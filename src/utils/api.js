// src/utils/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUpUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logWorkout = async (workoutData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/workouts`, workoutData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

