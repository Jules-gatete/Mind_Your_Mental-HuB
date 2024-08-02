import React, { useState, useEffect } from 'react';




const RecommendResources = () => {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({ title: '', type: '', duration: '', link: '', description: '' });
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TODO: Fetch existing resources and users from the backend
    // For now, let's add some dummy data
    setResources([
      { id: 1, title: 'Understanding Anxiety', type: 'Article', duration: '10 min read', link: 'https://www.example.com/anxiety', description: 'Learn about anxiety and its effects.' },
      { id: 2, title: 'Coping with Stress', type: 'Video', duration: '15 min', link: 'https://www.example.com/stress', description: 'Effective strategies for managing stress.' },
      { id: 2, title: 'Effective Communication Skills', type: 'Video', duration: '15 min', link: 'https://www.example.com/stress', description: 'Effective strategies for managing stress.' },
      { id: 3, title: 'Managing Depression', type: 'Article', duration: '15 min', link: 'https://www.example.com/stress', description: 'Effective strategies for managing stress.' },
      { id: 4, title: 'mindfulness Techniques', type: 'Interactive', duration: '15 min', link: 'https://www.example.com/stress', description: 'Effective strategies for managing stress.' },

    ]);
    setUsers([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'willy allen' },
      { id: 4, name: 'Jumma Landry' },
    ]);
  }, []);

  const handleInputChange = (e) => {
    setNewResource({ ...newResource, [e.target.name]: e.target.value });
  };

  const addResource = (e) => {
    e.preventDefault();
    // TODO: Save the new resource to the backend
    const newId = resources.length + 1;
    setResources([...resources, { ...newResource, id: newId }]);
    setNewResource({ title: '', type: '', duration: '', link: '', description: '' });
  };

  const recommendResource = (resourceId, userId) => {
    // TODO: Implement recommendation logic and update backend
    console.log(`Recommending resource ${resourceId} to user ${userId}`);
    // Reset selected user after recommendation
    setSelectedUser('');
  };

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div>
        <h3 className="text-xl font-semibold mb-4">Add Educational Resource</h3>
        <form onSubmit={addResource} className="space-y-2">
          <input
            type="text"
            name="title"
            placeholder="Resource Title"
            value={newResource.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <select
            name="type"
            value={newResource.type}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Type</option>
            <option value="Article">Article</option>
            <option value="Video">Video</option>
            <option value="Audio">Audio</option>
            <option value="Interactive">Interactive</option>
          </select>
          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g., 10 min read, 15 min)"
            value={newResource.duration}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="url"
            name="link"
            placeholder="Resource Link"
            value={newResource.link}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Resource Description"
            value={newResource.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Resource
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Existing Resources</h3>
        <div>
        <input
  type="text"
  placeholder="Search resources..."
  className="w-full p-2 mb-4 border rounded"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
        </div>
        <div className="space-y-4">
        {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">{resource.title}</h4>
              <p className="text-sm text-gray-600">Type: {resource.type}</p>
              <p className="text-sm text-gray-600">Duration: {resource.duration}</p>
             
              <p className="mt-2">{resource.description}</p>
              <div className="mt-4 flex items-center">
                <select
                  value={selectedUser}
                  onChange={(e) => setSelectedUser(e.target.value)}
                  className="p-2 border rounded mr-2 flex-grow"
                >
                  <option value="">Select User to Recommend</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                  ))}
                </select>
                <button
                  onClick={() => recommendResource(resource.id, selectedUser)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  disabled={!selectedUser}
                >
                  Recommend
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendResources;