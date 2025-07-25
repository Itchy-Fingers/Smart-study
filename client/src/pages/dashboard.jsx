import React from 'react';

const Dashboard = () => {
  const user = {
    name: "John Doe",
    level: "Grade 7",
    progress: 75,
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Static Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col p-6">
        <h2 className="text-xl font-bold mb-6">SmartStudy</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="/dashboard" className="text-blue-600 font-semibold">🏠 Dashboard</a>
            </li>
            <li>
              <span className="text-blue-600 font-semibold">📊 Level</span>
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <span className="text-gray-700 font-medium">Junior School</span>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>
                      <a href="/level/grade7" className="text-blue-500">Grade 7</a>
                    </li>
                    <li>
                      <a href="/level/grade8" className="text-blue-500">Grade 8</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="text-gray-700 font-medium">Senior School</span>
                  {/* Add senior school grades here if needed */}
                </li>
              </ul>
            </li>
            <li>
              <a href="/forum" className="text-blue-600">💬 Forum</a>
            </li>
            <li>
              <a href="/schedule" className="text-blue-600">📅 Schedule</a>
            </li>
            <li>
              <a href="/ai-assistant" className="text-blue-600">🤖 AI Assistant</a>
            </li>
          </ul>
        </nav>
        <div className="mt-auto pt-6 border-t">
          <span className="text-sm text-gray-500">Logged in as {user.name}</span>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
        <div className="bg-white p-4 rounded shadow-md">
          <div className="bg-blue-500 text-white p-3 rounded mb-4">
            <h2 className="text-lg font-semibold mb-2">Your Progress</h2>
            <div className="w-full bg-gray-200 h-4 rounded">
              <div
                className="bg-blue-500 h-4 rounded"
                style={{ width: `${user.progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-1">{user.progress}% Completed</p>
          </div>

          <div className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-lg font-semibold mb-2">Upcoming Schedule</h2>
            <ul className="text-sm list-disc ml-4">
              <li>Mathematics Lesson - Monday 10AM</li>
              <li>Physics Lab - Wednesday 2PM</li>
              <li>Group Discussion - Friday 1PM</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="text-sm list-none">
              <li><a href="/resources" className="text-blue-500">📚 Study Resources</a></li>
              <li><a href="/forum" className="text-blue-500">💬 Forum</a></li>
              <li><a href="/profile" className="text-blue-500">👤 Your Profile</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;