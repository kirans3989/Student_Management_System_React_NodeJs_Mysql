import React, { useState } from 'react';
import { BarChart, PieChart, LineChart, Download } from 'lucide-react';

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState('academic');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          <Download className="h-5 w-5 mr-2" />
          Export Reports
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md ${
              selectedReport === 'academic'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedReport('academic')}
          >
            Academic Performance
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              selectedReport === 'attendance'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedReport('attendance')}
          >
            Attendance Report
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              selectedReport === 'financial'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedReport('financial')}
          >
            Financial Summary
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Performance Overview</h3>
              <BarChart className="h-6 w-6 text-blue-600" />
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              {/* Chart placeholder */}
              <span className="text-gray-500">Performance Chart</span>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Grade Distribution</h3>
              <PieChart className="h-6 w-6 text-green-600" />
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              {/* Chart placeholder */}
              <span className="text-gray-500">Grade Distribution Chart</span>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Trend Analysis</h3>
              <LineChart className="h-6 w-6 text-purple-600" />
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              {/* Chart placeholder */}
              <span className="text-gray-500">Trend Analysis Chart</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="text-sm font-medium text-blue-700">Average Performance</h4>
            <p className="text-2xl font-bold text-blue-900 mt-2">85%</p>
            <p className="text-sm text-blue-600 mt-1">+5% from last semester</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="text-sm font-medium text-green-700">Pass Rate</h4>
            <p className="text-2xl font-bold text-green-900 mt-2">92%</p>
            <p className="text-sm text-green-600 mt-1">+2% from last semester</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="text-sm font-medium text-purple-700">Top Performers</h4>
            <p className="text-2xl font-bold text-purple-900 mt-2">45</p>
            <p className="text-sm text-purple-600 mt-1">Students above 90%</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="text-sm font-medium text-orange-700">Improvement Cases</h4>
            <p className="text-2xl font-bold text-orange-900 mt-2">28</p>
            <p className="text-sm text-orange-600 mt-1">Students need attention</p>
          </div>
        </div>
      </div>
    </div>
  );
}