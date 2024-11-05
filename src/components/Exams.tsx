import React, { useState, useEffect } from 'react';
import { Calendar, Plus, Search } from 'lucide-react';
import axios from 'axios';
import { Exam } from '../types';

export default function Exams() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get('/api/exams');
      setExams(response.data);
    } catch (error) {
      console.error('Error fetching exams:', error);
    }
  };

  const filteredExams = exams.filter(exam =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Exam Management</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="h-5 w-5 mr-2" />
          Schedule Exam
        </button>
      </div>

      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search exams..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredExams.map((exam) => (
            <div key={exam.id} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{exam.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{exam.description}</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">{new Date(exam.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Marks:</span>
                  <span className="font-medium">{exam.totalMarks}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Passing Marks:</span>
                  <span className="font-medium">{exam.passingMarks}</span>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
                  View Details
                </button>
                <button className="px-3 py-1 text-sm text-green-600 hover:text-green-800">
                  Enter Results
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}