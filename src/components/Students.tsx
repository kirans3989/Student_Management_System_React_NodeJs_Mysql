import React, { useState } from 'react';
import { UserPlus, Users } from 'lucide-react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import { Student } from '../types';

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const handleAddStudent = (student: Student) => {
    if (editingStudent) {
      setStudents(students.map(s => s.id === editingStudent.id ? { ...student, id: editingStudent.id } : s));
    } else {
      setStudents([...students, { ...student, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingStudent(null);
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleDeleteStudent = (id: number) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
        <button
          onClick={() => {
            setShowForm(true);
            setEditingStudent(null);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <UserPlus className="h-5 w-5 mr-2" />
          Add Student
        </button>
      </div>

      {showForm ? (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {editingStudent ? 'Edit Student' : 'Add New Student'}
          </h2>
          <StudentForm
            onSubmit={handleAddStudent}
            initialData={editingStudent || undefined}
            onCancel={() => {
              setShowForm(false);
              setEditingStudent(null);
            }}
          />
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Student List</h2>
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
