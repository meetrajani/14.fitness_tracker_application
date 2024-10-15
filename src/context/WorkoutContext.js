import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [goals, setGoals] = useState([]);

  const logWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const setGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, logWorkout, goals, setGoal }}>
      {children}
    </WorkoutContext.Provider>
  );
};