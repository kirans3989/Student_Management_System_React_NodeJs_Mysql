import axios from 'axios';
import { Student } from '../types/student';

const API_BASE_URL = '/api';

export const studentApi = {
  getAll: async (): Promise<Student[]> => {
    const response = await axios.get(`${API_BASE_URL}/students`);
    return response.data;
  },

  create: async (student: Omit<Student, 'id'>): Promise<Student> => {
    try {
      const response = await axios.post(`${API_BASE_URL}/students`, student);
      return response.data;
    } catch (error) {
      console.error('Error creating student:', error);
      throw new Error('Failed to create student');
    }
  },

  update: async (id: number, student: Omit<Student, 'id'>): Promise<Student> => {
    try {
      const response = await axios.put(`${API_BASE_URL}/students/${id}`, student);
      return response.data;
    } catch (error) {
      console.error('Error updating student:', error);
      throw new Error('Failed to update student');
    }
  },

  delete: async (id: number): Promise<void> => {
    try {
      await axios.delete(`${API_BASE_URL}/students/${id}`);
    } catch (error) {
      console.error('Error deleting student:', error);
      throw new Error('Failed to delete student');
    }
  }
};