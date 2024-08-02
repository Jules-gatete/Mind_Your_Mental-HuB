import React from 'react';
import { Link, useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import EducationalContent from './EducationalContent';
import CounselingServices from './CounselingServices';
import PeerSupportForums from './PeerSupportForums';
import Testimonies from './Testimonies';
import ProfileSettings from './ProfileSettings';
//import '@fortawesome/fontawesome-free/css/all.min.css';

const navigation = [
  { name: 'Home', href: '/dashboard', icon: 'fa-home' },
  { name: 'Educational Content', href: '/dashboard/education', icon: 'fa-book' },
  { name: 'Counseling Services', href: '/dashboard/counseling', icon: 'fa-user-md' },
  { name: 'Peer Support Forums', href: '/dashboard/forums', icon: 'fa-users' },
  { name: 'Testimonies', href: '/dashboard/testimonies', icon: 'fa-comments' },
  { name: 'Profile Settings', href: '/dashboard/profile', icon: 'fa-cog' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const YouthDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // logout logic here
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex">
    <aside className="w-64 bg-blue-600 text-white flex flex-col justify-between fixed top-0 left-0 h-screen">
      <div className="p-4">
      <img src={logo} alt="logo" className="mx-auto mb-4 w-auto h-47"/>
      <nav className="space-y-1 mt-12">
            <ul>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500',
                      'block rounded-md px-3 py-2 text-base font-medium no-underline'
                    )}
                    aria-current={location.pathname === item.href ? 'page' : undefined}
                  >
                    <i className={`fas ${item.icon} mr-2`}></i>{item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex justify-center space-x-4">
            <a href="#" className="text-black hover:opacity-80">
              <i className="fab fa-facebook text-white"></i>
            </a>
            <a href="#" className="text-black hover:opacity-80">
              <i className="fab fa-twitter text-white"></i>
            </a>
            <a href="#" className="text-black hover:opacity-80">
              <i className="fab fa-instagram text-white"></i>
            </a>
          </div>





        <div className="p-4 flex justify-center space-x-4 bottom-0">
        <button onClick={handleLogout} className="px-4 py-2 bg-black text-white hover:bg-red-600 text-sm font-medium">
       Logout
      </button>
</div>

      </aside>

      <div className="flex-1 flex flex-col ml-64">
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md w-full fixed">
  
         </header>

        <main className="flex-1 p-6 bg-gray-100 mt-16">
          <Routes>
            <Route path="/" element={
              <>
            <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">Welcome  at{/*Name*/}</h1>
           <a href="#" title="Logo">
            <img src={logo} alt="logo" className="mx-auto mb-4 w-45 h-32" />
           </a>
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">Your Mental Wellness Matters</h3>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                  <div className="grid grid-cols-2 gap-4 mt ">
                    <Link to="/dashboard/education" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 no-underline">Access Educational Resources</Link>
                    <Link to="/dashboard/forums" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 no-underline">Join Support Group</Link>
                    <Link to="/dashboard/testimonies" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 no-underline">Share Testimony</Link>
                    <Link to="/dashboard/forums" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 no-underline">View & Join Forums</Link>
                    <Link to="/dashboard/profile" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 no-underline">Update Your Account</Link>
                  </div>



                </section>
                <section className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4"> Recent Activity</h2>
                  <ul className="space-y-2">
                    <li>• You joined the "Anxiety Support" group</li>
                    <li>• New educational content: "Coping with Stress"</li>
                    <li>• shared a testimony</li>
                  </ul>
                </section>
              </>
            } />
            <Route path="education" element={<EducationalContent />} />
            <Route path="counseling" element={<CounselingServices />} />
            <Route path="forums" element={<PeerSupportForums />} />
            <Route path="testimonies" element={<Testimonies />} />
            <Route path="profile" element={<ProfileSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default YouthDashboard;
