// src/components/professional/CounselingSession.jsx
import React, { useState } from 'react';

const CounselingSession = () => {
  const [sessions, setSessions] = useState([]);
  const [newSession, setNewSession] = useState({
    theme: '',
    date: '',
    time: '',
    details: '',
    userId: ''
  });

  const handleInputChange = (e) => {
    setNewSession({ ...newSession, [e.target.name]: e.target.value });
  };

  const scheduleSession = (e) => {
    e.preventDefault();
    // TODO: Save the new session to the backend
    setSessions([...sessions, newSession]);
    setNewSession({ theme: '', date: '', time: '', details: '', userId: '' });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div>
        <h3 className="text-xl font-semibold mb-4">Schedule Counseling Session</h3>
        <form onSubmit={scheduleSession}>
          <input
            type="text"
            name="theme"
            placeholder="Session Theme"
            value={newSession.theme}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="date"
            name="date"
            value={newSession.date}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="time"
            name="time"
            value={newSession.time}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            name="details"
            placeholder="Additional Details"
            value={newSession.details}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          ></textarea>
          <input
            type="text"
            name="userId"
            placeholder="User ID"
            value={newSession.userId}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Schedule Session
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Upcoming Sessions</h3>
        {/* List upcoming sessions */}
        <ul className="list-disc list-inside">
          {sessions.map((session, index) => (
            <li key={index}>
              {session.theme} - {session.date} at {session.time}
              <p>{session.details}</p>
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-4 mt-4">Past Sessions</h3>
        {/* List past sessions */}
      </div>
    </div>
  );
};

export default CounselingSession;
