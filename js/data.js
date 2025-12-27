/**
 * Workout Program Data
 * Contains the complete 8-week workout program structure
 */

const workoutProgram = {
  week1: {
    info: "Weeks 1–2: Stay in upper rep ranges. Focus on form and control. Leave 1–2 reps 'in the tank'. Warm-up: 10 min treadmill walk. Rest: Big lifts 75–90 sec, Accessories 45–60 sec.",
    days: {
      day1: {
        name: "Day 1",
        subtitle: "Lower (Glutes + Quads)",
        exercises: [
          { name: "Barbell Hip Thrusts (2-3 sec squeeze at top)", defaultWeight: 115, sets: 4, reps: "12" },
          { name: "Hack Squat Machine (slow descent)", defaultWeight: 90, sets: 4, reps: "12" },
          { name: "Smith Machine Squats", defaultWeight: 65, sets: 3, reps: "12" },
          { name: "Step-Ups with DBs (drive through heel)", defaultWeight: 20, sets: 3, reps: "10/leg" },
          { name: "Cable Leg Extensions (ankle strap)", defaultWeight: 15, sets: 3, reps: "15/leg" },
          { name: "Cable/Machine Glute Kickbacks", defaultWeight: 20, sets: 3, reps: "15/leg" },
          { name: "Seated Abduction Machine (optional)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day2: {
        name: "Day 2",
        subtitle: "Upper (Back, Shoulders, Arms)",
        exercises: [
          { name: "Lat Pulldown", defaultWeight: 70, sets: 4, reps: "12" },
          { name: "Seated Row (machine or cable)", defaultWeight: 75, sets: 4, reps: "12" },
          { name: "Dumbbell Shoulder Press", defaultWeight: 20, sets: 3, reps: "12" },
          { name: "Dumbbell Lateral Raises", defaultWeight: 10, sets: 3, reps: "15" },
          { name: "Face Pulls (rope)", defaultWeight: 35, sets: 3, reps: "15" },
          { name: "EZ-Bar Bicep Curls", defaultWeight: 30, sets: 3, reps: "12" },
          { name: "Rope Tricep Pushdowns", defaultWeight: 35, sets: 3, reps: "12" },
          { name: "Finisher: 12 Lat Raise + 12 Front Raise + 12 Rev Flye (optional)", defaultWeight: 0, sets: 1, reps: "1 round" }
        ]
      },
      day3: {
        name: "Day 3",
        subtitle: "Lower (Glutes + Hamstrings)",
        exercises: [
          { name: "Romanian Deadlifts (3-sec lower)", defaultWeight: 95, sets: 4, reps: "10" },
          { name: "Barbell Hip Thrusts (heavier than Day 1)", defaultWeight: 125, sets: 4, reps: "10" },
          { name: "Smith Machine Reverse Lunges", defaultWeight: 55, sets: 3, reps: "10/leg" },
          { name: "Lying/Seated Hamstring Curl", defaultWeight: 50, sets: 3, reps: "15" },
          { name: "Cable Pull-Throughs", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Glute Bridges (bodyweight)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day4: {
        name: "Day 4",
        subtitle: "Full Body + Core",
        exercises: [
          { name: "Dumbbell Deadlift", defaultWeight: 40, sets: 3, reps: "10" },
          { name: "Goblet Squats", defaultWeight: 40, sets: 3, reps: "12" },
          { name: "Arnold Press", defaultWeight: 20, sets: 3, reps: "10" },
          { name: "Single-Arm Dumbbell Rows", defaultWeight: 35, sets: 3, reps: "12/arm" },
          { name: "Seated Leg Curl Machine", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Plank with Shoulder Taps (Core Circuit)", defaultWeight: 0, sets: 2, reps: "30 sec" },
          { name: "Russian Twists (Core Circuit)", defaultWeight: 15, sets: 2, reps: "20 total" },
          { name: "Hanging Knee Raises / Captain's Chair (Core Circuit)", defaultWeight: 0, sets: 2, reps: "12" },
          { name: "Battle Ropes 30s on/20s off (optional)", defaultWeight: 0, sets: 3, reps: "30 sec" }
        ]
      }
    }
  },
  week2: {
    info: "Weeks 1–2: Same weights as Week 1. Try to hit the top end of reps cleanly. Warm-up: 10 min treadmill walk. Rest: Big lifts 75–90 sec, Accessories 45–60 sec.",
    days: {
      day1: {
        name: "Day 1",
        subtitle: "Lower (Glutes + Quads)",
        exercises: [
          { name: "Barbell Hip Thrusts (2-3 sec squeeze at top)", defaultWeight: 115, sets: 4, reps: "12" },
          { name: "Hack Squat Machine (slow descent)", defaultWeight: 90, sets: 4, reps: "12" },
          { name: "Smith Machine Squats", defaultWeight: 65, sets: 3, reps: "12" },
          { name: "Step-Ups with DBs (drive through heel)", defaultWeight: 20, sets: 3, reps: "10/leg" },
          { name: "Cable Leg Extensions (ankle strap)", defaultWeight: 15, sets: 3, reps: "15/leg" },
          { name: "Cable/Machine Glute Kickbacks", defaultWeight: 20, sets: 3, reps: "15/leg" },
          { name: "Seated Abduction Machine (optional)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day2: {
        name: "Day 2",
        subtitle: "Upper (Back, Shoulders, Arms)",
        exercises: [
          { name: "Lat Pulldown", defaultWeight: 70, sets: 4, reps: "12" },
          { name: "Seated Row (machine or cable)", defaultWeight: 75, sets: 4, reps: "12" },
          { name: "Dumbbell Shoulder Press", defaultWeight: 20, sets: 3, reps: "12" },
          { name: "Dumbbell Lateral Raises", defaultWeight: 10, sets: 3, reps: "15" },
          { name: "Face Pulls (rope)", defaultWeight: 35, sets: 3, reps: "15" },
          { name: "EZ-Bar Bicep Curls", defaultWeight: 30, sets: 3, reps: "12" },
          { name: "Rope Tricep Pushdowns", defaultWeight: 35, sets: 3, reps: "12" },
          { name: "Finisher: 12 Lat Raise + 12 Front Raise + 12 Rev Flye (optional)", defaultWeight: 0, sets: 1, reps: "1 round" }
        ]
      },
      day3: {
        name: "Day 3",
        subtitle: "Lower (Glutes + Hamstrings)",
        exercises: [
          { name: "Romanian Deadlifts (3-sec lower)", defaultWeight: 95, sets: 4, reps: "10" },
          { name: "Barbell Hip Thrusts (heavier than Day 1)", defaultWeight: 125, sets: 4, reps: "10" },
          { name: "Smith Machine Reverse Lunges", defaultWeight: 55, sets: 3, reps: "10/leg" },
          { name: "Lying/Seated Hamstring Curl", defaultWeight: 50, sets: 3, reps: "15" },
          { name: "Cable Pull-Throughs", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Glute Bridges (bodyweight)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day4: {
        name: "Day 4",
        subtitle: "Full Body + Core",
        exercises: [
          { name: "Dumbbell Deadlift", defaultWeight: 40, sets: 3, reps: "10" },
          { name: "Goblet Squats", defaultWeight: 40, sets: 3, reps: "12" },
          { name: "Arnold Press", defaultWeight: 20, sets: 3, reps: "10" },
          { name: "Single-Arm Dumbbell Rows", defaultWeight: 35, sets: 3, reps: "12/arm" },
          { name: "Seated Leg Curl Machine", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Plank with Shoulder Taps (Core Circuit)", defaultWeight: 0, sets: 2, reps: "30 sec" },
          { name: "Russian Twists (Core Circuit)", defaultWeight: 15, sets: 2, reps: "20 total" },
          { name: "Hanging Knee Raises / Captain's Chair (Core Circuit)", defaultWeight: 0, sets: 2, reps: "12" },
          { name: "Battle Ropes 30s on/20s off (optional)", defaultWeight: 0, sets: 3, reps: "30 sec" }
        ]
      }
    }
  },
  week3: {
    info: "Weeks 3–4: Increase lower body lifts 5-10 lbs. Focus on control and tempo. Warm-up: 10 min treadmill walk. Rest: Big lifts 75–90 sec, Accessories 45–60 sec.",
    days: {
      day1: {
        name: "Day 1",
        subtitle: "Lower (Glutes + Quads)",
        exercises: [
          { name: "Barbell Hip Thrusts (2-3 sec squeeze at top)", defaultWeight: 125, sets: 4, reps: "12" },
          { name: "Hack Squat Machine (slow descent)", defaultWeight: 100, sets: 4, reps: "12" },
          { name: "Smith Machine Squats", defaultWeight: 65, sets: 3, reps: "12" },
          { name: "Step-Ups with DBs (drive through heel)", defaultWeight: 20, sets: 3, reps: "10/leg" },
          { name: "Cable Leg Extensions (ankle strap)", defaultWeight: 15, sets: 3, reps: "15/leg" },
          { name: "Cable/Machine Glute Kickbacks", defaultWeight: 20, sets: 3, reps: "15/leg" },
          { name: "Seated Abduction Machine (optional)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day2: {
        name: "Day 2",
        subtitle: "Upper (Back, Shoulders, Arms)",
        exercises: [
          { name: "Lat Pulldown", defaultWeight: 70, sets: 4, reps: "12" },
          { name: "Seated Row (machine or cable)", defaultWeight: 80, sets: 4, reps: "12" },
          { name: "Dumbbell Shoulder Press", defaultWeight: 20, sets: 3, reps: "12" },
          { name: "Dumbbell Lateral Raises", defaultWeight: 10, sets: 3, reps: "15" },
          { name: "Face Pulls (rope)", defaultWeight: 35, sets: 3, reps: "15" },
          { name: "EZ-Bar Bicep Curls", defaultWeight: 30, sets: 3, reps: "12" },
          { name: "Rope Tricep Pushdowns", defaultWeight: 35, sets: 3, reps: "12" },
          { name: "Finisher: 12 Lat Raise + 12 Front Raise + 12 Rev Flye (optional)", defaultWeight: 0, sets: 1, reps: "1 round" }
        ]
      },
      day3: {
        name: "Day 3",
        subtitle: "Lower (Glutes + Hamstrings)",
        exercises: [
          { name: "Romanian Deadlifts (3-sec lower)", defaultWeight: 105, sets: 4, reps: "10" },
          { name: "Barbell Hip Thrusts (heavier than Day 1)", defaultWeight: 135, sets: 4, reps: "10" },
          { name: "Smith Machine Reverse Lunges", defaultWeight: 55, sets: 3, reps: "10/leg" },
          { name: "Lying/Seated Hamstring Curl", defaultWeight: 50, sets: 3, reps: "15" },
          { name: "Cable Pull-Throughs", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Glute Bridges (bodyweight)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day4: {
        name: "Day 4",
        subtitle: "Full Body + Core",
        exercises: [
          { name: "Dumbbell Deadlift", defaultWeight: 40, sets: 3, reps: "10" },
          { name: "Goblet Squats", defaultWeight: 40, sets: 3, reps: "12" },
          { name: "Arnold Press", defaultWeight: 20, sets: 3, reps: "10" },
          { name: "Single-Arm Dumbbell Rows", defaultWeight: 35, sets: 3, reps: "12/arm" },
          { name: "Seated Leg Curl Machine", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Plank with Shoulder Taps (Core Circuit)", defaultWeight: 0, sets: 2, reps: "30 sec" },
          { name: "Russian Twists (Core Circuit)", defaultWeight: 15, sets: 2, reps: "20 total" },
          { name: "Hanging Knee Raises / Captain's Chair (Core Circuit)", defaultWeight: 0, sets: 2, reps: "12" },
          { name: "Battle Ropes 30s on/20s off (optional)", defaultWeight: 0, sets: 3, reps: "30 sec" }
        ]
      }
    }
  },
  week4: {
    info: "Weeks 3–4: Same weights as Week 3. Focus on control and tempo. Warm-up: 10 min treadmill walk. Rest: Big lifts 75–90 sec, Accessories 45–60 sec.",
    days: {
      day1: {
        name: "Day 1",
        subtitle: "Lower (Glutes + Quads)",
        exercises: [
          { name: "Barbell Hip Thrusts (2-3 sec squeeze at top)", defaultWeight: 125, sets: 4, reps: "12" },
          { name: "Hack Squat Machine (slow descent)", defaultWeight: 100, sets: 4, reps: "12" },
          { name: "Smith Machine Squats", defaultWeight: 65, sets: 3, reps: "12" },
          { name: "Step-Ups with DBs (drive through heel)", defaultWeight: 20, sets: 3, reps: "10/leg" },
          { name: "Cable Leg Extensions (ankle strap)", defaultWeight: 15, sets: 3, reps: "15/leg" },
          { name: "Cable/Machine Glute Kickbacks", defaultWeight: 20, sets: 3, reps: "15/leg" },
          { name: "Seated Abduction Machine (optional)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day2: {
        name: "Day 2",
        subtitle: "Upper (Back, Shoulders, Arms)",
        exercises: [
          { name: "Lat Pulldown", defaultWeight: 70, sets: 4, reps: "12" },
          { name: "Seated Row (machine or cable)", defaultWeight: 80, sets: 4, reps: "12" },
          { name: "Dumbbell Shoulder Press", defaultWeight: 20, sets: 3, reps: "12" },
          { name: "Dumbbell Lateral Raises", defaultWeight: 10, sets: 3, reps: "15" },
          { name: "Face Pulls (rope)", defaultWeight: 35, sets: 3, reps: "15" },
          { name: "EZ-Bar Bicep Curls", defaultWeight: 30, sets: 3, reps: "12" },
          { name: "Rope Tricep Pushdowns", defaultWeight: 35, sets: 3, reps: "12" },
          { name: "Finisher: 12 Lat Raise + 12 Front Raise + 12 Rev Flye (optional)", defaultWeight: 0, sets: 1, reps: "1 round" }
        ]
      },
      day3: {
        name: "Day 3",
        subtitle: "Lower (Glutes + Hamstrings)",
        exercises: [
          { name: "Romanian Deadlifts (3-sec lower)", defaultWeight: 105, sets: 4, reps: "10" },
          { name: "Barbell Hip Thrusts (heavier than Day 1)", defaultWeight: 135, sets: 4, reps: "10" },
          { name: "Smith Machine Reverse Lunges", defaultWeight: 55, sets: 3, reps: "10/leg" },
          { name: "Lying/Seated Hamstring Curl", defaultWeight: 50, sets: 3, reps: "15" },
          { name: "Cable Pull-Throughs", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Glute Bridges (bodyweight)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day4: {
        name: "Day 4",
        subtitle: "Full Body + Core",
        exercises: [
          { name: "Dumbbell Deadlift", defaultWeight: 40, sets: 3, reps: "10" },
          { name: "Goblet Squats", defaultWeight: 40, sets: 3, reps: "12" },
          { name: "Arnold Press", defaultWeight: 20, sets: 3, reps: "10" },
          { name: "Single-Arm Dumbbell Rows", defaultWeight: 35, sets: 3, reps: "12/arm" },
          { name: "Seated Leg Curl Machine", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Plank with Shoulder Taps (Core Circuit)", defaultWeight: 0, sets: 2, reps: "30 sec" },
          { name: "Russian Twists (Core Circuit)", defaultWeight: 15, sets: 2, reps: "20 total" },
          { name: "Hanging Knee Raises / Captain's Chair (Core Circuit)", defaultWeight: 0, sets: 2, reps: "12" },
          { name: "Battle Ropes 30s on/20s off (optional)", defaultWeight: 0, sets: 3, reps: "30 sec" }
        ]
      }
    }
  },
  week5: {
    info: "Weeks 5–6: Heavier phase! Drop to 8-10 reps on big lifts, increase weight. Add 1 extra set to hip thrusts. Warm-up: 10 min treadmill walk.",
    days: {
      day1: {
        name: "Day 1",
        subtitle: "Lower (Glutes + Quads)",
        exercises: [
          { name: "Barbell Hip Thrusts (2-3 sec squeeze at top)", defaultWeight: 135, sets: 4, reps: "10" },
          { name: "Hack Squat Machine (slow descent)", defaultWeight: 110, sets: 4, reps: "10" },
          { name: "Smith Machine Squats", defaultWeight: 75, sets: 3, reps: "10" },
          { name: "Step-Ups with DBs (drive through heel)", defaultWeight: 20, sets: 3, reps: "10/leg" },
          { name: "Cable Leg Extensions (ankle strap)", defaultWeight: 15, sets: 3, reps: "15/leg" },
          { name: "Cable/Machine Glute Kickbacks", defaultWeight: 20, sets: 3, reps: "15/leg" },
          { name: "Seated Abduction Machine (optional)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day2: {
        name: "Day 2",
        subtitle: "Upper (Back, Shoulders, Arms)",
        exercises: [
          { name: "Lat Pulldown", defaultWeight: 70, sets: 4, reps: "10" },
          { name: "Seated Row (machine or cable)", defaultWeight: 85, sets: 4, reps: "10" },
          { name: "Dumbbell Shoulder Press", defaultWeight: 20, sets: 3, reps: "10" },
          { name: "Dumbbell Lateral Raises", defaultWeight: 10, sets: 3, reps: "15" },
          { name: "Face Pulls (rope)", defaultWeight: 35, sets: 3, reps: "15" },
          { name: "EZ-Bar Bicep Curls", defaultWeight: 30, sets: 3, reps: "12" },
          { name: "Rope Tricep Pushdowns", defaultWeight: 35, sets: 3, reps: "12" },
          { name: "Finisher: 12 Lat Raise + 12 Front Raise + 12 Rev Flye (optional)", defaultWeight: 0, sets: 1, reps: "1 round" }
        ]
      },
      day3: {
        name: "Day 3",
        subtitle: "Lower (Glutes + Hamstrings)",
        exercises: [
          { name: "Romanian Deadlifts (3-sec lower)", defaultWeight: 115, sets: 4, reps: "8-10" },
          { name: "Barbell Hip Thrusts (heavier than Day 1)", defaultWeight: 145, sets: 4, reps: "10" },
          { name: "Smith Machine Reverse Lunges", defaultWeight: 55, sets: 3, reps: "10/leg" },
          { name: "Lying/Seated Hamstring Curl", defaultWeight: 50, sets: 3, reps: "15" },
          { name: "Cable Pull-Throughs", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Glute Bridges (bodyweight)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day4: {
        name: "Day 4",
        subtitle: "Full Body + Core",
        exercises: [
          { name: "Dumbbell Deadlift", defaultWeight: 40, sets: 3, reps: "10" },
          { name: "Goblet Squats", defaultWeight: 40, sets: 3, reps: "12" },
          { name: "Arnold Press", defaultWeight: 20, sets: 3, reps: "10" },
          { name: "Single-Arm Dumbbell Rows", defaultWeight: 35, sets: 3, reps: "12/arm" },
          { name: "Seated Leg Curl Machine", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Plank with Shoulder Taps (Core Circuit)", defaultWeight: 0, sets: 2, reps: "30 sec" },
          { name: "Russian Twists (Core Circuit)", defaultWeight: 15, sets: 2, reps: "20 total" },
          { name: "Hanging Knee Raises / Captain's Chair (Core Circuit)", defaultWeight: 0, sets: 2, reps: "12" },
          { name: "Battle Ropes 30s on/20s off (optional)", defaultWeight: 0, sets: 3, reps: "30 sec" }
        ]
      }
    }
  },
  week6: {
    info: "Weeks 5–6: Same as Week 5. Add 1 extra set to hip thrusts on both lower days (5 sets total). Warm-up: 10 min treadmill walk.",
    days: {
      day1: {
        name: "Day 1",
        subtitle: "Lower (Glutes + Quads)",
        exercises: [
          { name: "Barbell Hip Thrusts (2-3 sec squeeze at top)", defaultWeight: 135, sets: 5, reps: "10" },
          { name: "Hack Squat Machine (slow descent)", defaultWeight: 110, sets: 4, reps: "10" },
          { name: "Smith Machine Squats", defaultWeight: 75, sets: 3, reps: "10" },
          { name: "Step-Ups with DBs (drive through heel)", defaultWeight: 20, sets: 3, reps: "10/leg" },
          { name: "Cable Leg Extensions (ankle strap)", defaultWeight: 15, sets: 3, reps: "15/leg" },
          { name: "Cable/Machine Glute Kickbacks", defaultWeight: 20, sets: 3, reps: "15/leg" },
          { name: "Seated Abduction Machine (optional)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day2: {
        name: "Day 2",
        subtitle: "Upper (Back, Shoulders, Arms)",
        exercises: [
          { name: "Lat Pulldown", defaultWeight: 70, sets: 4, reps: "10" },
          { name: "Seated Row (machine or cable)", defaultWeight: 85, sets: 4, reps: "10" },
          { name: "Dumbbell Shoulder Press", defaultWeight: 20, sets: 3, reps: "10" },
          { name: "Dumbbell Lateral Raises", defaultWeight: 10, sets: 3, reps: "15" },
          { name: "Face Pulls (rope)", defaultWeight: 35, sets: 3, reps: "15" },
          { name: "EZ-Bar Bicep Curls", defaultWeight: 30, sets: 3, reps: "12" },
          { name: "Rope Tricep Pushdowns", defaultWeight: 35, sets: 3, reps: "12" },
          { name: "Finisher: 12 Lat Raise + 12 Front Raise + 12 Rev Flye (optional)", defaultWeight: 0, sets: 1, reps: "1 round" }
        ]
      },
      day3: {
        name: "Day 3",
        subtitle: "Lower (Glutes + Hamstrings)",
        exercises: [
          { name: "Romanian Deadlifts (3-sec lower)", defaultWeight: 115, sets: 4, reps: "8-10" },
          { name: "Barbell Hip Thrusts (heavier than Day 1)", defaultWeight: 145, sets: 5, reps: "10" },
          { name: "Smith Machine Reverse Lunges", defaultWeight: 55, sets: 3, reps: "10/leg" },
          { name: "Lying/Seated Hamstring Curl", defaultWeight: 50, sets: 3, reps: "15" },
          { name: "Cable Pull-Throughs", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Glute Bridges (bodyweight)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day4: {
        name: "Day 4",
        subtitle: "Full Body + Core",
        exercises: [
          { name: "Dumbbell Deadlift", defaultWeight: 40, sets: 3, reps: "10" },
          { name: "Goblet Squats", defaultWeight: 40, sets: 3, reps: "12" },
          { name: "Arnold Press", defaultWeight: 20, sets: 3, reps: "10" },
          { name: "Single-Arm Dumbbell Rows", defaultWeight: 35, sets: 3, reps: "12/arm" },
          { name: "Seated Leg Curl Machine", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Plank with Shoulder Taps (Core Circuit)", defaultWeight: 0, sets: 2, reps: "30 sec" },
          { name: "Russian Twists (Core Circuit)", defaultWeight: 15, sets: 2, reps: "20 total" },
          { name: "Hanging Knee Raises / Captain's Chair (Core Circuit)", defaultWeight: 0, sets: 2, reps: "12" },
          { name: "Battle Ropes 30s on/20s off (optional)", defaultWeight: 0, sets: 3, reps: "30 sec" }
        ]
      }
    }
  },
  week7: {
    info: "Weeks 7–8: Final push! Go for PRs on hip thrusts, RDLs, rows. Emphasize tempo (slow lowering, strong squeeze). Clean reps, full control!",
    days: {
      day1: {
        name: "Day 1",
        subtitle: "Lower (Glutes + Quads)",
        exercises: [
          { name: "Barbell Hip Thrusts (2-3 sec squeeze at top)", defaultWeight: 145, sets: 5, reps: "10" },
          { name: "Hack Squat Machine (slow descent)", defaultWeight: 120, sets: 4, reps: "10" },
          { name: "Smith Machine Squats", defaultWeight: 75, sets: 3, reps: "10" },
          { name: "Step-Ups with DBs (drive through heel)", defaultWeight: 20, sets: 3, reps: "10/leg" },
          { name: "Cable Leg Extensions (ankle strap)", defaultWeight: 15, sets: 3, reps: "15/leg" },
          { name: "Cable/Machine Glute Kickbacks", defaultWeight: 20, sets: 3, reps: "15/leg" },
          { name: "Seated Abduction Machine (optional)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day2: {
        name: "Day 2",
        subtitle: "Upper (Back, Shoulders, Arms)",
        exercises: [
          { name: "Lat Pulldown", defaultWeight: 75, sets: 4, reps: "10" },
          { name: "Seated Row (machine or cable)", defaultWeight: 85, sets: 4, reps: "10" },
          { name: "Dumbbell Shoulder Press", defaultWeight: 20, sets: 3, reps: "10" },
          { name: "Dumbbell Lateral Raises", defaultWeight: 10, sets: 3, reps: "15" },
          { name: "Face Pulls (rope)", defaultWeight: 35, sets: 3, reps: "15" },
          { name: "EZ-Bar Bicep Curls", defaultWeight: 30, sets: 3, reps: "12" },
          { name: "Rope Tricep Pushdowns", defaultWeight: 35, sets: 3, reps: "12" },
          { name: "Finisher: 12 Lat Raise + 12 Front Raise + 12 Rev Flye (optional)", defaultWeight: 0, sets: 1, reps: "1 round" }
        ]
      },
      day3: {
        name: "Day 3",
        subtitle: "Lower (Glutes + Hamstrings)",
        exercises: [
          { name: "Romanian Deadlifts (3-sec lower, PR attempt!)", defaultWeight: 120, sets: 4, reps: "8-10" },
          { name: "Barbell Hip Thrusts (PR attempt!)", defaultWeight: 155, sets: 5, reps: "10" },
          { name: "Smith Machine Reverse Lunges", defaultWeight: 55, sets: 3, reps: "10/leg" },
          { name: "Lying/Seated Hamstring Curl", defaultWeight: 50, sets: 3, reps: "15" },
          { name: "Cable Pull-Throughs", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Glute Bridges (bodyweight)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day4: {
        name: "Day 4",
        subtitle: "Full Body + Core",
        exercises: [
          { name: "Dumbbell Deadlift", defaultWeight: 40, sets: 3, reps: "10" },
          { name: "Goblet Squats", defaultWeight: 40, sets: 3, reps: "12" },
          { name: "Arnold Press", defaultWeight: 20, sets: 3, reps: "10" },
          { name: "Single-Arm Dumbbell Rows", defaultWeight: 35, sets: 3, reps: "12/arm" },
          { name: "Seated Leg Curl Machine", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Plank with Shoulder Taps (Core Circuit)", defaultWeight: 0, sets: 2, reps: "30 sec" },
          { name: "Russian Twists (Core Circuit)", defaultWeight: 15, sets: 2, reps: "20 total" },
          { name: "Hanging Knee Raises / Captain's Chair (Core Circuit)", defaultWeight: 0, sets: 2, reps: "12" },
          { name: "Battle Ropes 30s on/20s off (optional)", defaultWeight: 0, sets: 3, reps: "30 sec" }
        ]
      }
    }
  },
  week8: {
    info: "FINAL WEEK! 🔥 Repeat Week 7 weights. Aim for clean reps, full control, no failure. If feeling great, try +5 lb on hip thrusts only!",
    days: {
      day1: {
        name: "Day 1",
        subtitle: "Lower (Glutes + Quads)",
        exercises: [
          { name: "Barbell Hip Thrusts (PR attempt! +5 if strong)", defaultWeight: 145, sets: 5, reps: "10" },
          { name: "Hack Squat Machine (slow descent)", defaultWeight: 120, sets: 4, reps: "10" },
          { name: "Smith Machine Squats", defaultWeight: 75, sets: 3, reps: "10" },
          { name: "Step-Ups with DBs (drive through heel)", defaultWeight: 20, sets: 3, reps: "10/leg" },
          { name: "Cable Leg Extensions (ankle strap)", defaultWeight: 15, sets: 3, reps: "15/leg" },
          { name: "Cable/Machine Glute Kickbacks", defaultWeight: 20, sets: 3, reps: "15/leg" },
          { name: "Seated Abduction Machine (optional)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day2: {
        name: "Day 2",
        subtitle: "Upper (Back, Shoulders, Arms)",
        exercises: [
          { name: "Lat Pulldown", defaultWeight: 75, sets: 4, reps: "10" },
          { name: "Seated Row (machine or cable)", defaultWeight: 85, sets: 4, reps: "10" },
          { name: "Dumbbell Shoulder Press", defaultWeight: 20, sets: 3, reps: "10" },
          { name: "Dumbbell Lateral Raises", defaultWeight: 10, sets: 3, reps: "15" },
          { name: "Face Pulls (rope)", defaultWeight: 35, sets: 3, reps: "15" },
          { name: "EZ-Bar Bicep Curls", defaultWeight: 30, sets: 3, reps: "12" },
          { name: "Rope Tricep Pushdowns", defaultWeight: 35, sets: 3, reps: "12" },
          { name: "Finisher: 12 Lat Raise + 12 Front Raise + 12 Rev Flye (optional)", defaultWeight: 0, sets: 1, reps: "1 round" }
        ]
      },
      day3: {
        name: "Day 3",
        subtitle: "Lower (Glutes + Hamstrings)",
        exercises: [
          { name: "Romanian Deadlifts (3-sec lower, finish strong!)", defaultWeight: 120, sets: 4, reps: "8-10" },
          { name: "Barbell Hip Thrusts (PR attempt! +5 if strong)", defaultWeight: 155, sets: 5, reps: "10" },
          { name: "Smith Machine Reverse Lunges", defaultWeight: 55, sets: 3, reps: "10/leg" },
          { name: "Lying/Seated Hamstring Curl", defaultWeight: 50, sets: 3, reps: "15" },
          { name: "Cable Pull-Throughs", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Glute Bridges (bodyweight)", defaultWeight: 0, sets: 2, reps: "20" }
        ]
      },
      day4: {
        name: "Day 4",
        subtitle: "Full Body + Core",
        exercises: [
          { name: "Dumbbell Deadlift", defaultWeight: 40, sets: 3, reps: "10" },
          { name: "Goblet Squats", defaultWeight: 40, sets: 3, reps: "12" },
          { name: "Arnold Press", defaultWeight: 20, sets: 3, reps: "10" },
          { name: "Single-Arm Dumbbell Rows", defaultWeight: 35, sets: 3, reps: "12/arm" },
          { name: "Seated Leg Curl Machine", defaultWeight: 45, sets: 3, reps: "15" },
          { name: "Plank with Shoulder Taps (Core Circuit)", defaultWeight: 0, sets: 2, reps: "30 sec" },
          { name: "Russian Twists (Core Circuit)", defaultWeight: 15, sets: 2, reps: "20 total" },
          { name: "Hanging Knee Raises / Captain's Chair (Core Circuit)", defaultWeight: 0, sets: 2, reps: "12" },
          { name: "Battle Ropes 30s on/20s off (optional)", defaultWeight: 0, sets: 3, reps: "30 sec" }
        ]
      }
    }
  }
};

