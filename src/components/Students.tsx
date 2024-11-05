import React, { useState, useEffect } from 'react';
import { UserPlus, Users } from 'lucide-react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import { Student } from '../types';
import { studentApi } from '../api/students';

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStudents = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await studentApi.getAll();
      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      setError('Failed to fetch students');
      console.error('Error fetching students:', err);
      setStudents([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddStudent = async (studentData: Omit<Student, 'id'>) => {
    try {
      setError(null);
      if (editingStudent?.id) {
        const updatedStudent = await studentApi.update(editingStudent.id, studentData);
        setStudents(prevStudents => 
          prevStudents.map(student => 
            student.id === editingStudent.id ? updatedStudent : student
          )
        );
      } else {
        const newStudent = await studentApi.create(studentData);
        setStudents(prevStudents => [...prevStudents, newStudent]);
      }
      setShowForm(false);
      setEditingStudent(null);
    } catch (err) {
      console.error('Error handling student:', err);
      setError(editingStudent ? 'Failed to update student' : 'Failed to add student');
      throw err;
    }
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleDeleteStudent = async (id: number) => {
    try {
      setError(null);
      await studentApi.delete(id);
      setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
    } catch (err) {
      console.error('Error deleting student:', err);
      setError('Failed to delete student');
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
        <button
          onClick={() => {
            setShowForm(true);
            setEditingStudent(null);
            setError(null);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <UserPlus className="h-5 w-5 mr-2" />
          Add Student
        </button>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">{error}</p>
            </div>
          </div>
        </div>
      )}

      {showForm ? (
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">
              {editingStudent ? 'Edit Student' : 'Add New Student'}
            </h2>
            <StudentForm
              onSubmit={handleAddStudent}
              initialData={editingStudent || undefined}
              onCancel={() => {
                setShowForm(false);
                setEditingStudent(null);
                setError(null);
              }}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Student List</h2>
            <div className="flex items-center text-gray-600">
              <Users className="h-5 w-5 mr-2" />
              <span>Total Students: {students.length}</span>
            </div>
          </div>
          <StudentList
            students={students}
            onEdit={handleEditStudent}
            onDelete={handleDeleteStudent}
          />
        </div>
      )}
    </div>
  );
}