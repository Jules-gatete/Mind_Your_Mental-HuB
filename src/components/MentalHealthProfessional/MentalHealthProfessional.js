import React from 'react';
import { Link, useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import logo from '../../assets/logo1.png'; // Assuming the same logo is used
import AvailabilityManagement from './AvailabilityManagement';
import UserProfiles from './UserProfiles';
import CounselingSession from './CounselingSession';
import RecommendResources from './RecommendResources';
//import '@fortawesome/fontawesome-free/css/all.min.css';

const navigation = [
  { name: 'Home', href: '/professional-dashboard', icon: 'fa-home' },
  { name: 'Manage Availability', href: '/professional-dashboard/availability', icon: 'fa-calendar' },
  { name: 'Counseling Sessions', href: '/professional-dashboard/counseling', icon: 'fa-comments' },
  { name: 'Recommend Resources', href: '/professional-dashboard/recommend-resources', icon: 'fa-book' },
  { name: 'My Profile', href: '/professional-dashboard/user-profiles', icon: 'fa-user-circle' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ProfessionalDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-blue-600 text-white flex flex-col justify-between fixed top-0 left-0 h-screen">
        <div className="p-4">
        <img src={logo} alt="logo" className="mx-auto mb-4 w-80 h-35"/>
       
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
            <Route index element={<DashboardHome />} />
            <Route path="availability" element={<AvailabilityManagement />} />
            <Route path="counseling" element={<CounselingSession />} />
            <Route path="recommend-resources" element={<RecommendResources />} />
            < Route path="user-profiles" element={<UserProfiles />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const DashboardHome = () => (
  <div>
    <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">Welcome  at{/*Name*/}</h1>
           <a href="#" title="Logo">
            <img src={logo} alt="logo" className="mx-auto mb-4 w-45 h-32" />
           </a>
    <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">Your Support is Highly valuable</h3>
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/professional-dashboard/availability" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 no-underline">Manage Availability</Link>
        <Link to="/professional-dashboard/counseling" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 no-underline">Counseling Sessions</Link>
        <Link to="/professional-dashboard/recommend-resources" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 no-underline">Recommend Resources</Link>
        <Link to="/professional-dashboard/user-profiles" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 no-underline">My Profile</Link>
      </div>
    </section>
    <section className="bg-white shadow-md rounded-lg p-6">
      <h4 className="text-xl font-semibold mb-4">Recent Activity</h4>
      <ul className="space-y-2">
        <li>• Scheduled a new counseling session</li>
        <li>• Updated availability status</li>
        <li>• New user profiles viewed</li>
      </ul>
    </section>
  </div>
);

export default ProfessionalDashboard;
