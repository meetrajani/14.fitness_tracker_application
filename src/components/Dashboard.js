import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { WorkoutContext } from "../context/WorkoutContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { workouts, goals } = useContext(WorkoutContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {user ? user.email : "User"}!</h1>

      {/* Display Goals */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Your Goals</h2>
        {goals.length === 0 ? (
          <p>You have not set any goals yet.</p>
        ) : (
          <ul>
            {goals.map((goal, index) => (
              <li key={index}>
                {goal.goal} {goal.completed ? "(Completed)" : "(In Progress)"}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display Workouts */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Recent Workouts</h2>
        {workouts.length === 0 ? (
          <p>You haven't logged any workouts yet.</p>
        ) : (
          <ul>
            {workouts.map((workout, index) => (
              <li key={index}>
                {workout.activity} - {workout.duration} minutes on {workout.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
