import React, { useState } from 'react';

const Testimonies = () => {
  const [testimonies, setTestimonies] = useState([
    { name: 'Alex',  content: 'This platform helped me overcome my anxiety. The counseling sessions were life-changing.' },
    { name: 'Sarah',  content: 'The peer support forums made me feel less alone. I\'ve made great friends here.' },
    { name: 'Michael',  content: 'The educational resources gave me practical tools to manage my stress. Highly recommended!' },
  ]);
  const [newTestimony, setNewTestimony] = useState({ name: '', age: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimony({ ...newTestimony, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTestimony.name && newTestimony.age && newTestimony.content) {
      setTestimonies([...testimonies, newTestimony]);
      setNewTestimony({ name: '', age: '', content: '' });
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Testimonies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {testimonies.map((testimony, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <p className="italic mb-2">"{testimony.content}"</p>
            <p className="text-sm text-gray-600">- {testimony.name}, {testimony.age}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Share Your Story</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newTestimony.name}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          {/*<div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={newTestimony.age}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>*/}

          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Testimony</label>
            <textarea
              id="content"
              name="content"
              value={newTestimony.content}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Post Your Testimony
          </button>
        </form>
      </div>
    </div>
  );
};

export default Testimonies;
