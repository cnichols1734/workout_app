/**
 * App Configuration and State
 * Supabase setup and global state management
 */

// Supabase Configuration
const SUPABASE_URL = 'https://mvnsuzxziyvjbiljwiye.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12bnN1enh6aXl2amJpbGp3aXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4MDAyMTksImV4cCI6MjA4MjM3NjIxOX0.D3hqTMKHzfPoPF-KaeyapPNOpsDKwtmaT1oAmALZ-RA';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Local storage key (fallback/legacy)
const STATE_KEY = 'workout_8week_v1';

// Auth state
let currentUser = null;
let isSignUpMode = false;

// App state
let currentWeek = 'week1';
let currentDay = 'day1';
let currentPage = 'workout';
let workoutData = {};
let workoutHistory = [];

// Timer state
let workoutTimerInterval = null;
let workoutTimerSeconds = 0;
let workoutTimerRunning = false;

// Rest timer state
let restTimerInterval = null;
let restTimerSeconds = 0;
let restTimerTotal = 60;

// Debounced save timeout
let saveTimeout = null;

