/**
 * UI Rendering Functions
 * Handles all DOM rendering and display updates
 */

function renderWeekTabs() {
  const container = document.getElementById('weekTabs');
  container.innerHTML = '';
  
  Object.keys(workoutProgram).forEach(weekKey => {
    const weekNum = weekKey.replace('week', '');
    const isActive = weekKey === currentWeek;
    
    // Calculate progress - check workout history for saved workouts
    const days = Object.keys(workoutProgram[weekKey].days);
    let completedDays = 0;
    days.forEach(dayKey => {
      // Check if this day has been saved in workout history
      const hasSavedWorkout = workoutHistory.some(session => 
        session.week === weekKey && session.day === dayKey
      );
      if (hasSavedWorkout) completedDays++;
    });
    
    const tab = document.createElement('div');
    tab.className = 'week-tab' + (isActive ? ' active' : '');
    tab.innerHTML = `
      <div class="week-number">Week ${weekNum}</div>
      <div class="week-progress">${completedDays}/${days.length} days</div>
    `;
    tab.onclick = () => switchWeek(weekKey);
    container.appendChild(tab);
  });
}

function renderDayTabs() {
  const container = document.getElementById('dayTabs');
  const days = workoutProgram[currentWeek].days;
  container.innerHTML = '';
  
  Object.keys(days).forEach(dayKey => {
    const day = days[dayKey];
    const isActive = dayKey === currentDay;
    
    // Check if this day has been saved in workout history and get the most recent date
    const savedSession = workoutHistory.find(session => 
      session.week === currentWeek && session.day === dayKey
    );
    const hasSavedWorkout = !!savedSession;
    
    let dateStr = '';
    if (hasSavedWorkout) {
      const date = new Date(savedSession.date);
      dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    
    const tab = document.createElement('div');
    let className = 'day-tab';
    if (isActive) className += ' active';
    if (hasSavedWorkout) className += ' completed';
    tab.className = className;
    
    tab.innerHTML = `
      <div class="day-name">${day.name}</div>
      <div class="day-subtitle">${day.subtitle}</div>
      ${hasSavedWorkout ? `<div class="day-date">${dateStr}</div>` : ''}
      ${hasSavedWorkout ? '<div class="day-check">✓</div>' : ''}
    `;
    tab.onclick = () => switchDay(dayKey);
    container.appendChild(tab);
  });
}

function renderWeekInfo() {
  const container = document.getElementById('weekInfo');
  const info = workoutProgram[currentWeek].info;
  container.innerHTML = `
    <div class="week-info-title">Week ${currentWeek.replace('week', '')} Focus</div>
    <div class="week-info-text">${info}</div>
  `;
}

function renderWorkout() {
  const container = document.getElementById('workoutContainer');
  const day = workoutProgram[currentWeek].days[currentDay];
  const dayData = workoutData[currentWeek][currentDay] || {};
  
  const exercises = day.exercises;
  const completed = exercises.filter((_, idx) => dayData[idx]?.completed).length;
  const hasAnyCompleted = completed > 0;
  
  container.innerHTML = `
    ${exercises.map((exercise, idx) => renderExerciseCard(exercise, idx, dayData[idx])).join('')}
    
    <div class="custom-exercise-section">
      <div class="custom-exercise-title">➕ Add Custom Exercise</div>
      <input type="text" id="customName" class="custom-input" placeholder="Exercise name (e.g., Extra Cardio)" />
      <div class="custom-row">
        <input type="number" id="customSets" class="custom-input" placeholder="Sets" inputmode="numeric" />
        <input type="number" id="customReps" class="custom-input" placeholder="Reps" inputmode="numeric" />
        <input type="number" id="customWeight" class="custom-input" placeholder="Weight" inputmode="decimal" />
      </div>
      <button class="add-custom-btn" type="button" onclick="addCustomExercise()">Add to Workout</button>
    </div>
    
    <button class="save-workout-btn ${hasAnyCompleted ? 'ready' : ''}" 
            type="button" 
            onclick="saveWorkout()"
            ${!hasAnyCompleted ? 'disabled' : ''}>
      ${hasAnyCompleted ? '💾 Save Workout' : '⏳ Complete At Least One Exercise'}
    </button>
  `;
}

function renderExerciseCard(exercise, index, data = {}) {
  const isCompleted = data.completed || false;
  const sets = data.sets != null ? data.sets : exercise.sets;
  const reps = data.reps != null ? data.reps : exercise.reps;
  // Handle null, undefined, and ensure we get a number
  let weight = data.weight;
  if (weight == null || weight === '') {
    weight = exercise.defaultWeight || 0;
  }
  weight = Number(weight) || 0;
  
  // Get last weight used for this exercise from history
  const lastWeight = getLastWeight(exercise.name);
  const isPR = lastWeight > 0 && weight > lastWeight;
  
  return `
    <div class="exercise-card${isCompleted ? ' completed' : ''}">
      <div class="exercise-header">
        <div class="exercise-name">
          ${exercise.name}
          ${isPR ? '<span class="pr-badge">🏆 PR!</span>' : ''}
        </div>
        <button onclick="toggleComplete(${index})" type="button" class="complete-btn">
          ${isCompleted ? '✓' : '○'}
        </button>
      </div>
      
      <div class="exercise-details">
        <div class="detail-group">
          <div class="detail-label">Sets</div>
          <input type="number" class="detail-input" value="${sets}" 
                 onchange="updateExerciseData(${index}, 'sets', this.value)" 
                 inputmode="numeric" />
        </div>
        <div class="detail-group">
          <div class="detail-label">Reps</div>
          <input type="text" class="detail-input" value="${reps}" 
                 onchange="updateExerciseData(${index}, 'reps', this.value)" />
        </div>
        <div class="detail-group">
          <div class="detail-label">Weight</div>
          <div class="weight-controls">
            <button type="button" class="weight-btn" onclick="adjustWeight(${index}, -5)">−</button>
            <input type="number" class="detail-input weight-input-field" value="${weight}" 
                   id="weight-${index}"
                   onchange="updateExerciseData(${index}, 'weight', this.value)" 
                   inputmode="decimal" />
            <button type="button" class="weight-btn" onclick="adjustWeight(${index}, 5)">+</button>
          </div>
          ${lastWeight > 0 ? `<div class="last-weight">Last: <span>${lastWeight} lb</span></div>` : ''}
        </div>
      </div>
    </div>
  `;
}

// Get last weight used for an exercise from history
function getLastWeight(exerciseName) {
  for (const session of workoutHistory) {
    const exercise = session.exercises.find(e => e.name === exerciseName);
    if (exercise && exercise.weight > 0) {
      return exercise.weight;
    }
  }
  return 0;
}

function renderProgressPage() {
  const totalWorkouts = workoutHistory.length;
  const weekNum = parseInt(currentWeek.replace('week', ''));
  const streak = calculateStreak();
  
  document.getElementById('totalWorkouts').textContent = totalWorkouts;
  document.getElementById('currentWeek').textContent = weekNum;
  document.getElementById('streakCount').textContent = streak;
  
  renderHistory();
}

// Calculate workout streak (consecutive days with workouts)
function calculateStreak() {
  if (workoutHistory.length === 0) return 0;
  
  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Get unique workout dates
  const workoutDates = [...new Set(workoutHistory.map(w => {
    const d = new Date(w.date);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }))].sort((a, b) => b - a);
  
  // Check if there's a workout today or yesterday to start the streak
  const mostRecentDate = workoutDates[0];
  const daysSinceLastWorkout = Math.floor((today.getTime() - mostRecentDate) / (1000 * 60 * 60 * 24));
  
  if (daysSinceLastWorkout > 1) return 0; // Streak broken
  
  // Count consecutive days
  let checkDate = mostRecentDate;
  for (let i = 0; i < workoutDates.length; i++) {
    if (workoutDates[i] === checkDate) {
      streak++;
      checkDate -= (1000 * 60 * 60 * 24); // Previous day
    } else if (workoutDates[i] < checkDate - (1000 * 60 * 60 * 24)) {
      break; // Gap found
    }
  }
  
  return streak;
}

function renderHistory() {
  const container = document.getElementById('historyContainer');
  
  if (workoutHistory.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📋</div>
        <div class="empty-state-text">No workouts yet. Start training!</div>
      </div>`;
    return;
  }
  
  container.innerHTML = workoutHistory.slice(0, 20).map(session => {
    const date = new Date(session.date);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const timeStr = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    
    return `
      <div class="history-card">
        <div class="history-header">
          <div>
            <div class="history-workout-name">${session.workoutName}</div>
            <div class="history-date">${dateStr} at ${timeStr}</div>
          </div>
          <div class="history-actions">
            <div class="history-badge">${session.exercises.length} exercises</div>
            <button class="delete-btn" type="button" onclick="deleteWorkout('${session.id}')">Delete</button>
          </div>
        </div>
        <div class="history-exercises">
          ${session.exercises.map(ex => `
            <div class="history-exercise">
              <span class="history-exercise-name">${ex.name}</span>
              <span class="history-exercise-details">${ex.sets} × ${ex.reps} @ ${ex.weight} lbs</span>
            </div>`).join('')}
        </div>
      </div>`;
  }).join('');
}

function showAchievement(title, text, icon = '💪') {
  const popup = document.getElementById('achievementPopup');
  const overlay = document.getElementById('overlay');
  const iconEl = document.getElementById('achievementIcon');
  const titleEl = document.getElementById('achievementTitle');
  const textEl = document.getElementById('achievementText');
  
  iconEl.textContent = icon;
  titleEl.textContent = title;
  textEl.textContent = text;
  
  overlay.classList.add('show');
  popup.classList.add('show');
  
  setTimeout(() => {
    overlay.classList.remove('show');
    popup.classList.remove('show');
  }, 1250);
}

function showConfirm(title, text, onConfirm) {
  const dialog = document.getElementById('confirmDialog');
  const overlay = document.getElementById('confirmOverlay');
  const titleEl = document.getElementById('confirmTitle');
  const textEl = document.getElementById('confirmText');
  const okBtn = document.getElementById('confirmOk');
  const cancelBtn = document.getElementById('confirmCancel');

  titleEl.textContent = title;
  textEl.textContent = text;

  dialog.style.display = 'block';
  overlay.classList.add('show');

  const cleanup = () => {
    dialog.style.display = 'none';
    overlay.classList.remove('show');
    okBtn.onclick = null;
    cancelBtn.onclick = null;
  };

  okBtn.onclick = () => {
    cleanup();
    onConfirm();
  };

  cancelBtn.onclick = cleanup;
  overlay.onclick = cleanup;
}

// Confetti celebration
function launchConfetti() {
  const colors = ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
      confetti.style.width = (5 + Math.random() * 10) + 'px';
      confetti.style.height = confetti.style.width;
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }, i * 30);
  }
}

