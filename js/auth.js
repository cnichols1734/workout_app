/**
 * Authentication Functions
 * Handles user sign-in, sign-up, and sign-out via Supabase
 */

function toggleAuthMode() {
  isSignUpMode = !isSignUpMode;
  const formTitle = document.getElementById('authFormTitle');
  const btnText = document.getElementById('authBtnText');
  const toggleText = document.getElementById('authToggleText');
  const toggleLink = document.getElementById('authToggleLink');
  
  if (isSignUpMode) {
    formTitle.textContent = 'Create Account';
    btnText.textContent = 'Sign Up';
    toggleText.textContent = 'Already have an account?';
    toggleLink.textContent = 'Sign in';
  } else {
    formTitle.textContent = 'Welcome Back';
    btnText.textContent = 'Sign In';
    toggleText.textContent = "Don't have an account?";
    toggleLink.textContent = 'Create one';
  }
  
  document.getElementById('authError').classList.remove('show');
}

async function handleAuth() {
  const email = document.getElementById('authEmail').value.trim();
  const password = document.getElementById('authPassword').value;
  const submitBtn = document.getElementById('authSubmitBtn');
  const errorEl = document.getElementById('authError');
  const errorTextEl = document.getElementById('authErrorText');
  const btnText = document.getElementById('authBtnText');
  
  if (!email || !password) {
    errorTextEl.textContent = 'Please enter both email and password';
    errorEl.classList.add('show');
    return;
  }
  
  if (password.length < 6) {
    errorTextEl.textContent = 'Password must be at least 6 characters';
    errorEl.classList.add('show');
    return;
  }
  
  // Show loading state
  submitBtn.disabled = true;
  btnText.innerHTML = '<span class="auth-loading"></span> ' + (isSignUpMode ? 'Creating...' : 'Signing In...');
  errorEl.classList.remove('show');
  
  try {
    let result;
    
    if (isSignUpMode) {
      result = await supabaseClient.auth.signUp({
        email: email,
        password: password
      });
    } else {
      result = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
      });
    }
    
    if (result.error) {
      throw result.error;
    }
    
    // Success - the auth state change listener will handle the rest
    if (isSignUpMode && result.data.user && !result.data.session) {
      // Email confirmation required
      errorTextEl.textContent = 'Check your email to confirm your account!';
      errorEl.style.background = 'rgba(0, 245, 160, 0.1)';
      errorEl.style.borderColor = 'rgba(0, 245, 160, 0.25)';
      errorEl.style.color = 'var(--accent-green)';
      errorEl.classList.add('show');
    }
    
  } catch (error) {
    console.error('Auth error:', error);
    errorEl.style.background = 'rgba(255, 71, 87, 0.1)';
    errorEl.style.borderColor = 'rgba(255, 71, 87, 0.25)';
    errorEl.style.color = 'var(--accent-secondary)';
    errorTextEl.textContent = error.message || 'Authentication failed. Please try again.';
    errorEl.classList.add('show');
  } finally {
    submitBtn.disabled = false;
    btnText.textContent = isSignUpMode ? 'Sign Up' : 'Sign In';
  }
}

async function handleSignOut() {
  try {
    await supabaseClient.auth.signOut();
    // Reset local state
    workoutData = {};
    workoutHistory = [];
    currentWeek = 'week1';
    currentDay = 'day1';
  } catch (error) {
    console.error('Sign out error:', error);
  }
}

function showAuthScreen() {
  document.getElementById('authScreen').classList.remove('hidden');
  // Reset form
  document.getElementById('authEmail').value = '';
  document.getElementById('authPassword').value = '';
  document.getElementById('authError').classList.remove('show');
}

