import React, { useState } from 'react';
import { GraduationCap, UserPlus, Users } from 'lucide-react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import { Student } from './types/student';

function App() {
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
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Student Management System</span>
            </div>
            <div className="flex items-center">
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
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {showForm ? (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
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
              <h2 className="text-2xl font-bold text-gray-900">Student List</h2>
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
      </main>
    </div>
  );
}

export default App;