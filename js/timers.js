/**
 * Timer Functions
 * Handles workout timer and rest timer functionality
 */

// ========== WORKOUT TIMER ==========
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateWorkoutTimerDisplay() {
  const display = document.getElementById('workoutTimerDisplay');
  if (display) {
    display.textContent = formatTime(workoutTimerSeconds);
  }
}

function toggleWorkoutTimer() {
  if (workoutTimerRunning) {
    stopWorkoutTimer();
  } else {
    startWorkoutTimer();
  }
}

function startWorkoutTimer() {
  workoutTimerRunning = true;
  const btn = document.getElementById('timerToggleBtn');
  if (btn) {
    btn.textContent = 'Pause';
    btn.classList.add('active');
  }
  workoutTimerInterval = setInterval(() => {
    workoutTimerSeconds++;
    updateWorkoutTimerDisplay();
  }, 1000);
}

function stopWorkoutTimer() {
  workoutTimerRunning = false;
  const btn = document.getElementById('timerToggleBtn');
  if (btn) {
    btn.textContent = 'Resume';
    btn.classList.remove('active');
  }
  if (workoutTimerInterval) {
    clearInterval(workoutTimerInterval);
    workoutTimerInterval = null;
  }
}

function resetWorkoutTimer() {
  workoutTimerSeconds = 0;
  workoutTimerRunning = false;
  const btn = document.getElementById('timerToggleBtn');
  if (btn) {
    btn.textContent = 'Start';
    btn.classList.remove('active');
  }
  if (workoutTimerInterval) {
    clearInterval(workoutTimerInterval);
    workoutTimerInterval = null;
  }
  updateWorkoutTimerDisplay();
}

// ========== REST TIMER ==========
function startRestTimer(seconds) {
  restTimerTotal = seconds;
  restTimerSeconds = seconds;
  
  const overlay = document.getElementById('restTimerOverlay');
  const circle = document.getElementById('restTimerCircle');
  const timeDisplay = document.getElementById('restTimerTime');
  const subtitle = document.getElementById('restTimerSubtitle');
  
  subtitle.textContent = seconds >= 60 ? 'Big lift - take your time!' : 'Quick rest - stay warm!';
  
  overlay.classList.add('show');
  updateRestTimerDisplay();
  
  // Clear any existing interval
  if (restTimerInterval) clearInterval(restTimerInterval);
  
  restTimerInterval = setInterval(() => {
    restTimerSeconds--;
    updateRestTimerDisplay();
    
    if (restTimerSeconds <= 0) {
      skipRestTimer();
      // Vibrate when done
      if (navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 100]);
    }
  }, 1000);
}

function updateRestTimerDisplay() {
  const circle = document.getElementById('restTimerCircle');
  const timeDisplay = document.getElementById('restTimerTime');
  
  if (timeDisplay) timeDisplay.textContent = restTimerSeconds;
  if (circle) {
    const progress = ((restTimerTotal - restTimerSeconds) / restTimerTotal) * 100;
    circle.style.setProperty('--progress', progress + '%');
  }
}

function skipRestTimer() {
  if (restTimerInterval) {
    clearInterval(restTimerInterval);
    restTimerInterval = null;
  }
  const overlay = document.getElementById('restTimerOverlay');
  if (overlay) overlay.classList.remove('show');
}

