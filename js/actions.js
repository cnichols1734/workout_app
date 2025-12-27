/**
 * User Actions
 * Handles all user interactions and data modifications
 */

function switchPage(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  
  if (page === 'workout') {
    document.getElementById('workoutPage').classList.add('active');
    document.querySelectorAll('.nav-tab')[0].classList.add('active');
  } else {
    document.getElementById('progressPage').classList.add('active');
    document.querySelectorAll('.nav-tab')[1].classList.add('active');
    renderProgressPage();
  }
}

function switchWeek(week) {
  currentWeek = week;
  currentDay = 'day1';
  renderWeekTabs();
  renderDayTabs();
  renderWeekInfo();
  renderWorkout();
}

function switchDay(day) {
  currentDay = day;
  renderDayTabs();
  renderWorkout();
}

function updateExerciseData(index, field, value) {
  if (!workoutData[currentWeek][currentDay][index]) {
    workoutData[currentWeek][currentDay][index] = { sets: 3, reps: '10', weight: 0, completed: false };
  }
  workoutData[currentWeek][currentDay][index][field] = field === 'weight' || field === 'sets' ? Number(value) : value;
  debouncedSave();
}

function toggleComplete(index) {
  if (!workoutData[currentWeek][currentDay][index]) {
    workoutData[currentWeek][currentDay][index] = { sets: 3, reps: '10', weight: 0, completed: false };
  }
  const wasCompleted = workoutData[currentWeek][currentDay][index].completed;
  workoutData[currentWeek][currentDay][index].completed = !wasCompleted;
  debouncedSave();
  renderDayTabs();
  renderWorkout();
  
  // Start rest timer when completing an exercise (not uncompleting)
  if (!wasCompleted) {
    // Determine rest time: 75-90 sec for big lifts, 45-60 sec for accessories
    const exerciseName = workoutProgram[currentWeek].days[currentDay].exercises[index]?.name.toLowerCase() || '';
    const isBigLift = exerciseName.includes('thrust') || exerciseName.includes('deadlift') || 
                      exerciseName.includes('squat') || exerciseName.includes('hack') ||
                      exerciseName.includes('press') || exerciseName.includes('row');
    startRestTimer(isBigLift ? 75 : 45);
    
    // Haptic feedback
    if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
  }
}

// Adjust weight by increment
function adjustWeight(index, increment) {
  const input = document.getElementById(`weight-${index}`);
  if (input) {
    const currentValue = Number(input.value) || 0;
    const newWeight = Math.max(0, currentValue + increment);
    input.value = newWeight;
    updateExerciseData(index, 'weight', newWeight);
    
    // Haptic feedback if available
    if (navigator.vibrate) navigator.vibrate(10);
  }
}

function addCustomExercise() {
  const name = document.getElementById('customName').value.trim();
  const sets = document.getElementById('customSets').value;
  const reps = document.getElementById('customReps').value.trim();
  const weight = document.getElementById('customWeight').value;

  if (!name) {
    showAchievement('Missing Info', 'Please enter exercise name', 'alert-circle');
    return;
  }

  const customExercise = {
    name: name,
    sets: sets || 3,
    reps: reps || '10',
    defaultWeight: weight || 0,
    isCustom: true
  };

  // Add to the current day's exercise list
  workoutProgram[currentWeek].days[currentDay].exercises.push(customExercise);
  
  const newIndex = workoutProgram[currentWeek].days[currentDay].exercises.length - 1;
  // Always set the custom exercise as completed
  workoutData[currentWeek][currentDay][newIndex] = {
    sets: customExercise.sets,
    reps: customExercise.reps,
    weight: customExercise.defaultWeight,
    completed: true
  };

  debouncedSave();
  renderDayTabs();
  renderWorkout();
  showAchievement('Added!', `${name} added to workout`, 'check-circle');
}

async function saveWorkout() {
  const day = workoutProgram[currentWeek].days[currentDay];
  const dayData = workoutData[currentWeek][currentDay];
  
  const exercises = [];
  day.exercises.forEach((exercise, index) => {
    if (dayData[index] && dayData[index].completed) {
      exercises.push({
        name: exercise.name,
        sets: dayData[index].sets,
        reps: dayData[index].reps,
        weight: dayData[index].weight
      });
    }
  });
  
  if (exercises.length === 0) {
    showAchievement('No Exercises', 'Complete at least one exercise', 'alert-circle');
    return;
  }
  
  try {
    // Save to Supabase
    const { data, error } = await supabaseClient
      .from('workout_history')
      .insert({
        user_id: currentUser.id,
        date: new Date().toISOString(),
        week: currentWeek,
        day: currentDay,
        workout_name: `Week ${currentWeek.replace('week', '')} - ${day.name}: ${day.subtitle}`,
        duration: workoutTimerSeconds,
        exercises: exercises
      })
      .select()
      .single();
    
    if (error) throw error;
    
    // Add to local history
    workoutHistory.unshift({
      id: data.id,
      date: data.date,
      week: data.week,
      day: data.day,
      workoutName: data.workout_name,
      duration: data.duration,
      exercises: data.exercises
    });
    
    // Stop and reset workout timer
    stopWorkoutTimer();
    resetWorkoutTimer();
    
    // Celebrate with confetti!
    launchConfetti();
    
    const durationStr = workoutTimerSeconds > 0 ? ` in ${formatTime(data.duration)}` : '';
    showAchievement('Workout Complete!', `${exercises.length} exercises logged${durationStr}`, 'trophy');
    
    // Remove custom exercises after saving
    workoutProgram[currentWeek].days[currentDay].exercises = workoutProgram[currentWeek].days[currentDay].exercises.filter(e => !e.isCustom);
    
    // Reset completion but keep weights/sets/reps
    Object.keys(dayData).forEach(key => {
      if (dayData[key].completed) {
        dayData[key].completed = false;
      }
    });
    
    await saveState();
    renderWeekTabs();
    renderDayTabs();
    renderWorkout();
    
  } catch (e) {
    console.error('Failed to save workout:', e);
    showAchievement('Save Failed', 'Could not save workout. Try again.', 'x-circle');
  }
}

function deleteWorkout(sessionId) {
  showConfirm('Delete Workout?', 'This action cannot be undone.', async () => {
    try {
      // Delete from Supabase
      const { error } = await supabaseClient
        .from('workout_history')
        .delete()
        .eq('id', sessionId)
        .eq('user_id', currentUser.id);
      
      if (error) throw error;
      
      // Remove from local history
      const index = workoutHistory.findIndex((s) => s.id === sessionId);
      if (index !== -1) {
        workoutHistory.splice(index, 1);
      }
      
      renderProgressPage();
      showAchievement('Deleted', 'Workout removed from history', 'trash-2');
      
    } catch (e) {
      console.error('Failed to delete workout:', e);
      showAchievement('Delete Failed', 'Could not delete workout', 'x-circle');
    }
  });
}

// Backup/Restore functions
function downloadBackup() {
  if (workoutHistory.length === 0) {
    showAchievement('No Data', 'No workouts to backup yet', 'alert-circle');
    return;
  }

  // Create CSV content
  let csv = 'Date,Time,Week,Day,Workout Name,Exercise Name,Sets,Reps,Weight\n';
  
  workoutHistory.forEach(session => {
    const date = new Date(session.date);
    const dateStr = date.toLocaleDateString('en-US');
    const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    session.exercises.forEach(ex => {
      csv += `"${dateStr}","${timeStr}","${session.week}","${session.day}","${session.workoutName}","${ex.name}",${ex.sets},"${ex.reps}",${ex.weight}\n`;
    });
  });

  // Create download
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `workout-backup-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);

  showAchievement('Backup Downloaded!', 'Save this file safely', 'download');
}

function restoreBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function(e) {
    try {
      const csv = e.target.result;
      const lines = csv.split('\n').slice(1); // Skip header
      
      const restoredSessions = {};
      
      lines.forEach(line => {
        if (!line.trim()) return;
        
        const matches = line.match(/(".*?"|[^,]+)(?=\s*,|\s*$)/g);
        if (!matches || matches.length < 9) return;
        
        const [dateStr, timeStr, week, day, workoutName, exName, sets, reps, weight] = matches.map(m => m.replace(/^"|"$/g, ''));
        
        // Create unique session key
        const sessionKey = `${dateStr}_${timeStr}_${workoutName}`;
        
        if (!restoredSessions[sessionKey]) {
          restoredSessions[sessionKey] = {
            id: Date.now() + Math.random(),
            date: new Date(`${dateStr} ${timeStr}`).toISOString(),
            week: week,
            day: day,
            workoutName: workoutName,
            exercises: []
          };
        }
        
        restoredSessions[sessionKey].exercises.push({
          name: exName,
          sets: parseInt(sets) || 3,
          reps: reps,
          weight: parseFloat(weight) || 0
        });
      });
      
      // Add restored sessions to history
      const newSessions = Object.values(restoredSessions);
      workoutHistory = [...newSessions, ...workoutHistory];
      
      // Remove duplicates based on date and workout name
      const seen = new Set();
      workoutHistory = workoutHistory.filter(session => {
        const key = `${session.date}_${session.workoutName}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      
      // Sort by date descending
      workoutHistory.sort((a, b) => new Date(b.date) - new Date(a.date));
      
      // Save restored workouts to Supabase
      if (currentUser && newSessions.length > 0) {
        try {
          const historyRows = newSessions.map(session => ({
            user_id: currentUser.id,
            date: session.date,
            week: session.week,
            day: session.day,
            workout_name: session.workoutName,
            duration: session.duration || 0,
            exercises: session.exercises
          }));
          
          await supabaseClient.from('workout_history').insert(historyRows);
          
          // Reload from DB to get proper IDs
          await loadState();
        } catch (e) {
          console.error('Failed to save restored workouts to Supabase:', e);
        }
      }
      
      renderProgressPage();
      showAchievement('Backup Restored!', `${newSessions.length} workouts imported`, 'check-circle');
      
    } catch (error) {
      console.error('Restore error:', error);
      showAchievement('Restore Failed', 'Invalid backup file format', 'x-circle');
    }
  };
  
  reader.readAsText(file);
  event.target.value = ''; // Reset file input
}

