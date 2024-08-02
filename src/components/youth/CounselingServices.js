import React from 'react';

// Import local images
import image1 from '../../assets/1.jfif';
import image2 from '../../assets/2.jfif';
import image3 from '../../assets/3.jfif';
import image4 from '../../assets/4.jfif';

const counselors = [
  {
    id: 1,
    name: "Dr. Emily Smith",
    specialties: ["Anxiety", "Depression", "Self-esteem"],
    about: "Specializes in youth anxiety and depression, focusing on building self-esteem.",
    image: image1
  },
  {
    id: 2,
    name: "John Davis, LMFT",
    specialties: ["Family Therapy", "Behavioral Issues", "ADHD"],
    about: "Experienced in family therapy and youth behavioral challenges including ADHD.",
    image: image2
  },
  {
    id: 3,
    name: "Dr. Maria Rodriguez",
    specialties: ["Trauma", "PTSD", "Stress Management"],
    about: "Expert in trauma-informed care for youth, addressing PTSD and stress management.",
    image: image3
  },
  {
    id: 4,
    name: "Sarah Thompson, LPC",
    specialties: ["Alcoholism", "Future Planning", "Life Skills"],
    about: "Assists youth with alcohol-related issues and future planning concerns.",
    image: image4
  }
];

const CounselorCard = ({ counselor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
      <img src={counselor.image} alt={counselor.name} className="w-32 h-32 rounded-full" />
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-xl font-bold mb-2">{counselor.name}</h3>
        <p className="text-gray-600 mb-2">{counselor.about}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-1">Specialties:</h4>
          <p className="text-gray-600">{counselor.specialties.join(", ")}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Book a Session
        </button>
      </div>
    </div>
  );
};

const CounselingServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Youth Counseling Services</h1>
      <p className="text-center text-gray-600 mb-8">
        Our specialized counselors are here to support you. Choose a counselor and book your session today.
      </p>
      <div className="space-y-6">
        {counselors.map(counselor => (
          <CounselorCard key={counselor.id} counselor={counselor} />
        ))}
      </div>
    </div>
  );
};

export default CounselingServices;
