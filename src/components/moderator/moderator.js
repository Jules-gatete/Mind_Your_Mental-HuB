import React from 'react';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';

const ModeratorDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white flex flex-col justify-between fixed top-0 left-0 h-screen p-4">
        <div>
          <h1 className="text-2xl font-bold mb-6">Moderator</h1>
          <nav>
            <ul>
              <li className="mb-2"><Link to="/moderator-dashboard" className="text-white no-underline hover:underline">Dashboard Home</Link></li>
              <li className="mb-2"><Link to="/moderator-dashboard/approve-posts" className="text-white no-underline hover:underline">Approve Posts</Link></li>
              <li className="mb-2"><Link to="/moderator-dashboard/review-posts" className="text-white no-underline hover:underline">Review Posts</Link></li>
            </ul>
          </nav>
        </div>
      </aside>

      <div className="flex-1 flex flex-col ml-64">
        <header className="flex justify-between p-4 bg-gray-900 text-white shadow-md w-full">
          <h1>Moderator Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-400 rounded-md text-sm font-medium"
          >
            Logout
          </button>
        </header>
        <main className="flex-1 p-6 bg-gray-100 mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome, Moderator</h2>
          <section className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Pending Actions</h3>
            <div className="space-x-4">
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md">Approve Posts</button>
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md">Review Posts</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ModeratorDashboard;
