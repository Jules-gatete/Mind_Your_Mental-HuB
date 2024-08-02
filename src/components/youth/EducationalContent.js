import React, { useState } from 'react';

const EducationalContent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    { 
      title: 'Understanding Anxiety', 
      type: 'Article', 
      duration: '10 min read', 
      link: 'https://www.mcleanhospital.org/essential/anxiety',
      description: 'Learn about the symptoms, causes, and treatments for anxiety disorders.'
    },
    { 
      title: 'Coping with Stress', 
      type: 'Video', 
      duration: '15 min', 
      link: 'https://www.youtube.com/watch?v=TK5KOXLT15g&vl=en',
      description: 'Discover effective strategies for managing stress in daily life.'
    },
    { 
      title: 'Mindfulness Techniques', 
      type: 'Audio', 
      duration: '20 min', 
      link: 'https://www.youtube.com/watch?v=-2zdUXve6fQ',
      description: 'Learn and practice mindfulness techniques for improved mental well-being.'
    },
    { 
      title: 'Building Self-Esteem', 
      type: 'Interactive', 
      duration: '30 min', 
      link: 'https://www.therapistaid.com/interactive-therapy-tools',
      description: 'Engage in interactive exercises to boost your self-esteem and confidence.'
    },
    { 
      title: 'Effective Communication Skills', 
      type: 'Article', 
      duration: '15 min read', 
      link: 'https://www.stevenson.edu/online/about-us/news/importance-effective-communication/',
      description: 'Improve your communication skills for better personal and professional relationships.'
    },
    { 
      title: 'Managing Depression', 
      type: 'Video', 
      duration: '18 min', 
      link: 'https://www.youtube.com/watch?v=rNKAju8ufjM',
      description: 'Understand depression and learn coping strategies for managing symptoms.'
    },
    { 
      title: 'Healthy Sleep Habits', 
      type: 'Video', 
      duration: '25 min', 
      link: 'https://www.youtube.com/watch?v=Luq5VA8SY2E',
      description: 'Learn about the importance of good sleep hygiene and how to improve your sleep habits.'
    },
  ];

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Educational Content</h1>
      <input
        type="text"
        placeholder="Search resources..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search resources"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No resources found matching your search.</p>
        ) : (
          filteredResources.map((resource, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">{resource.title}</h2>
              <p className="text-sm text-gray-600">Type: {resource.type}</p>
              <p className="text-sm text-gray-600">Duration: {resource.duration}</p>
              <p className="text-sm text-gray-700 mt-2">{resource.description}</p>
              <a 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-3 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 no-underline"
              >
                Start Learning
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EducationalContent;