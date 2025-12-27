/**
 * Authentication Functions
 * Handles user sign-in, sign-up, and sign-out via Supabase
 */

function toggleAuthMode() {
  isSignUpMode = !isSignUpMode;
  const formTitle = document.getElementById('authFormTitle');
  const submitBtn = document.getElementById('authSubmitBtn');
  const toggleText = document.getElementById('authToggleText');
  const toggleLink = document.getElementById('authToggleLink');
  
  if (isSignUpMode) {
    formTitle.textContent = 'Create Account';
    submitBtn.textContent = 'Sign Up';
    toggleText.textContent = 'Already have an account?';
    toggleLink.textContent = 'Sign in';
  } else {
    formTitle.textContent = 'Sign In';
    submitBtn.textContent = 'Sign In';
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
  
  if (!email || !password) {
    errorEl.textContent = 'Please enter both email and password';
    errorEl.classList.add('show');
    return;
  }
  
  if (password.length < 6) {
    errorEl.textContent = 'Password must be at least 6 characters';
    errorEl.classList.add('show');
    return;
  }
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="auth-loading"></span>' + (isSignUpMode ? 'Creating Account...' : 'Signing In...');
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
      errorEl.textContent = 'Check your email to confirm your account!';
      errorEl.style.background = 'rgba(46, 204, 113, 0.15)';
      errorEl.style.borderColor = 'rgba(46, 204, 113, 0.3)';
      errorEl.style.color = 'var(--accent-green)';
      errorEl.classList.add('show');
    }
    
  } catch (error) {
    console.error('Auth error:', error);
    errorEl.style.background = 'rgba(231, 76, 60, 0.15)';
    errorEl.style.borderColor = 'rgba(231, 76, 60, 0.3)';
    errorEl.style.color = 'var(--accent-red)';
    errorEl.textContent = error.message || 'Authentication failed. Please try again.';
    errorEl.classList.add('show');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = isSignUpMode ? 'Sign Up' : 'Sign In';
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

