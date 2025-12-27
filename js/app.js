/**
 * App Initialization
 * Main entry point and boot sequence
 */

async function initializeApp() {
  // Check for existing session first
  const { data: { session } } = await supabaseClient.auth.getSession();
  
  if (session) {
    currentUser = session.user;
    await showMainApp();
  } else {
    showAuthScreen();
  }
  
  // Listen for auth changes
  supabaseClient.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session) {
      currentUser = session.user;
      await showMainApp();
    } else if (event === 'SIGNED_OUT') {
      currentUser = null;
      showAuthScreen();
    }
  });
}

async function showMainApp() {
  document.getElementById('authScreen').classList.add('hidden');
  await loadState();
  renderWeekTabs();
  renderDayTabs();
  renderWeekInfo();
  renderWorkout();
}

// Boot the app when the page loads
window.onload = initializeApp;

