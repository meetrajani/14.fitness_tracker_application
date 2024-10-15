import React, { useState, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

const GoalSetting = () => {
  const { setGoal } = useContext(WorkoutContext);
  const [goal, setGoalValue] = useState('');

  const handleSetGoal = () => {
    setGoal({ goal, completed: false });
  };

  return (
    <div>
      <h3>Set Goal</h3>
      <input
        type="text"
        placeholder="Weekly Goal"
        value={goal}
        onChange={(e) => setGoalValue(e.target.value)}
      />
      <button onClick={handleSetGoal}>Set Goal</button>
    </div>
  );
};

export default GoalSetting;
