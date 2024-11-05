import React from 'react';
import { Student } from '../types/student';
import { Pencil, Trash2 } from 'lucide-react';

interface StudentListProps {
  students: Student[];
  onEdit: (student: Student) => void;
  onDelete: (id: number) => void;
}

export default function StudentList({ students, onEdit, onDelete }: StudentListProps) {
  if (!Array.isArray(students)) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
        <p className="text-yellow-700">No students data available</p>
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <p className="text-gray-500">No students found. Add your first student using the button above.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.studentId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {student.firstName} {student.lastName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.grade}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.contactNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(student)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => student.id && onDelete(student.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}