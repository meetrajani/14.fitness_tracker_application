import React from 'react';

const Statistics = ({ workouts }) => {
  return (
    <div>
      <h3>Workout Statistics</h3>
      {workouts.length === 0 ? (
        <p>No workout data available.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Date</th>
              <th>Duration (minutes)</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, index) => (
              <tr key={index}>
                <td>{workout.date}</td>
                <td>{workout.duration}</td>
                <td>{workout.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Statistics;
