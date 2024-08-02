import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo2 from '../assets/logo1.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('youth');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    switch(userType) {
      case 'youth':
        navigate('/dashboard');
        break;
      case 'moderator':
        navigate('/moderator-dashboard');
        break;
      case 'professional':
        navigate('/professional-dashboard');
        break;
      default:
        navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Welcome To</h1>
          <a href="#" title="Logo">
            <img src={logo2} alt="logo" className="mx-auto mb-4 w-auto h-32" />
          </a>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">&#x1F44F; Please enter your details!</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your Password"
              pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}"
              title="Minimum 6 characters, at least 1 letter and 1 number"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="userType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">User Type</label>
            <select 
              value={userType} 
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="youth">Youth</option>
              <option value="professional">Mental Health Professional</option>
              <option value="moderator">Community Moderator</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">Login</button>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
            Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
