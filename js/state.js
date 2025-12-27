/**
 * State Management
 * Handles loading and saving user data to/from Supabase
 */

async function loadState() {
  if (!currentUser) return;
  
  try {
    // Load user progress from Supabase
    const { data: progressData, error: progressError } = await supabaseClient
      .from('user_progress')
      .select('*')
      .eq('user_id', currentUser.id);
    
    if (progressError) throw progressError;
    
    // Load workout history from Supabase
    const { data: historyData, error: historyError } = await supabaseClient
      .from('workout_history')
      .select('*')
      .eq('user_id', currentUser.id)
      .order('date', { ascending: false });
    
    if (historyError) throw historyError;
    
    // Transform progress data back into workoutData structure
    workoutData = {};
    if (progressData) {
      progressData.forEach(row => {
        if (!workoutData[row.week]) workoutData[row.week] = {};
        if (!workoutData[row.week][row.day]) workoutData[row.week][row.day] = {};
        workoutData[row.week][row.day][row.exercise_index] = {
          sets: row.sets,
          reps: row.reps,
          weight: Number(row.weight) || 0,
          completed: row.completed || false
        };
      });
    }
    
    // Transform history data
    workoutHistory = [];
    if (historyData) {
      workoutHistory = historyData.map(row => ({
        id: row.id,
        date: row.date,
        week: row.week,
        day: row.day,
        workoutName: row.workout_name,
        duration: row.duration || 0,
        exercises: row.exercises || []
      }));
    }
    
  } catch (e) {
    console.error('Failed to load state from Supabase:', e);
  }
  
  // Initialize workout data structure and fix any null/invalid values
  Object.keys(workoutProgram).forEach(week => {
    if (!workoutData[week]) workoutData[week] = {};
    Object.keys(workoutProgram[week].days).forEach(day => {
      if (!workoutData[week][day]) workoutData[week][day] = {};
      workoutProgram[week].days[day].exercises.forEach((exercise, idx) => {
        if (!workoutData[week][day][idx]) {
          workoutData[week][day][idx] = {
            sets: exercise.sets,
            reps: exercise.reps,
            weight: exercise.defaultWeight || 0,
            completed: false
          };
        } else {
          // Fix any null or invalid values in existing data
          const data = workoutData[week][day][idx];
          if (data.weight == null || data.weight === '' || isNaN(data.weight)) {
            data.weight = exercise.defaultWeight || 0;
          }
          if (data.sets == null) data.sets = exercise.sets;
          if (data.reps == null) data.reps = exercise.reps;
          if (data.completed == null) data.completed = false;
        }
      });
    });
  });
}

async function saveState() {
  if (!currentUser) return;
  
  try {
    // Save user progress to Supabase - upsert all current workout data
    const progressRows = [];
    Object.keys(workoutData).forEach(week => {
      Object.keys(workoutData[week]).forEach(day => {
        Object.keys(workoutData[week][day]).forEach(exerciseIndex => {
          const data = workoutData[week][day][exerciseIndex];
          progressRows.push({
            user_id: currentUser.id,
            week: week,
            day: day,
            exercise_index: parseInt(exerciseIndex),
            sets: data.sets,
            reps: data.reps,
            weight: data.weight,
            completed: data.completed,
            updated_at: new Date().toISOString()
          });
        });
      });
    });
    
    if (progressRows.length > 0) {
      const { error } = await supabaseClient
        .from('user_progress')
        .upsert(progressRows, { 
          onConflict: 'user_id,week,day,exercise_index',
          ignoreDuplicates: false 
        });
      
      if (error) throw error;
    }
    
  } catch (e) {
    console.error('Failed to save state to Supabase:', e);
  }
}

// Debounced save to avoid too many DB calls
function debouncedSave() {
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => saveState(), 500);
}

