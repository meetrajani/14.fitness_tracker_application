import React, { useState } from 'react';

const WorkoutForm = ({ logWorkout }) => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    logWorkout({ activity, duration, calories, date });
    // Reset form fields
    setActivity('');
    setDuration('');
    setCalories('');
    setDate('');
  };

  return (
    <div>
      <h3>Log Workout</h3>
      <label>
        Activity:
        <input type="text" value={activity} onChange={(e) => setActivity(e.target.value)} />
      </label>
      <br />
      <label>
        Duration (minutes):
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </label>
      <br />
      <label>
        Calories:
        <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
      </label>
      <br />
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSubmit}>Log Workout</button>
    </div>
  );
};

export default WorkoutForm;
