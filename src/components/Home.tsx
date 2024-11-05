import React from 'react';
import { BookOpen, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const courses = [
    {
      id: 1,
      name: "Computer Science",
      duration: "4 Years",
      description: "Bachelor's degree in Computer Science and Engineering",
      seats: 120
    },
    {
      id: 2,
      name: "Business Administration",
      duration: "3 Years",
      description: "Bachelor's in Business Administration",
      seats: 100
    },
    {
      id: 3,
      name: "Mechanical Engineering",
      duration: "4 Years",
      description: "Bachelor's degree in Mechanical Engineering",
      seats: 90
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* College Overview */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Tech University</h1>
        <p className="text-lg mb-6">Empowering minds, shaping futures since 1990</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-sm">Students</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm">Programs</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Award className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Placement</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Courses */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Duration: {course.duration}</span>
                <span>Available Seats: {course.seats}</span>
              </div>
              <Link
                to="/admission"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Why Choose Tech University?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Excellence in Education</h3>
            <p className="text-gray-600">Consistently ranked among top universities with accredited programs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Expert Faculty</h3>
            <p className="text-gray-600">Learn from industry experts and experienced professors.</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Modern Facilities</h3>
            <p className="text-gray-600">State-of-the-art labs and learning resources.</p>
          </div>
        </div>
      </div>
    </div>
  );
}