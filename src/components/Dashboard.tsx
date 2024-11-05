import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Users, GraduationCap, Calendar, CreditCard, Award, BookOpen, DollarSign } from 'lucide-react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    activePrograms: 0,
    monthlyRevenue: 0,
    attendanceRate: 0
  });

  // Simulated data - replace with actual API calls
  useEffect(() => {
    setStats({
      totalStudents: 1234,
      activePrograms: 15,
      monthlyRevenue: 45678,
      attendanceRate: 94
    });
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Users className="h-6 w-6 text-blue-500" />}
          title="Total Students"
          value={stats.totalStudents.toLocaleString()}
          trend="+12%"
          trendUp={true}
        />
        <StatCard
          icon={<BookOpen className="h-6 w-6 text-green-500" />}
          title="Active Programs"
          value={stats.activePrograms.toString()}
          trend="+3"
          trendUp={true}
        />
        <StatCard
          icon={<DollarSign className="h-6 w-6 text-purple-500" />}
          title="Monthly Revenue"
          value={`$${stats.monthlyRevenue.toLocaleString()}`}
          trend="+8.3%"
          trendUp={true}
        />
        <StatCard
          icon={<Calendar className="h-6 w-6 text-orange-500" />}
          title="Attendance Rate"
          value={`${stats.attendanceRate}%`}
          trend="+2.5%"
          trendUp={true}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/students">
          <QuickAction
            icon={<Users className="h-8 w-8" />}
            title="Manage Students"
            description="Add, edit, or view student records"
            bgColor="bg-blue-50"
            textColor="text-blue-600"
          />
        </Link>
        <Link to="/exams">
          <QuickAction
            icon={<Award className="h-8 w-8" />}
            title="Exam Management"
            description="Schedule and manage examinations"
            bgColor="bg-green-50"
            textColor="text-green-600"
          />
        </Link>
        <Link to="/reports">
          <QuickAction
            icon={<BarChart3 className="h-8 w-8" />}
            title="Reports & Analytics"
            description="View detailed insights and reports"
            bgColor="bg-purple-50"
            textColor="text-purple-600"
          />
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <Link to="/activity" className="text-sm text-blue-600 hover:text-blue-800">View all</Link>
        </div>
        <div className="space-y-6">
          <ActivityItem
            icon={<Users className="h-5 w-5 text-blue-500" />}
            title="New Student Enrolled"
            description="John Doe enrolled in Advanced Mathematics"
            time="2 hours ago"
          />
          <ActivityItem
            icon={<CreditCard className="h-5 w-5 text-green-500" />}
            title="Payment Received"
            description="$500 received from Sarah Smith"
            time="3 hours ago"
          />
          <ActivityItem
            icon={<Award className="h-5 w-5 text-purple-500" />}
            title="Exam Results Updated"
            description="Final results for Physics 101 published"
            time="5 hours ago"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, trend, trendUp }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <span className={`text-sm ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
          {trend}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-1">{title}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}

function QuickAction({ icon, title, description, bgColor, textColor }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className={`p-3 ${bgColor} rounded-lg ${textColor}`}>{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ icon, title, description, time }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
}