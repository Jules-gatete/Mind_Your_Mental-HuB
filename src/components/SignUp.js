import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo1 from '../assets/logo2.png';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    password: '',
    agree: false
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Display a message indicating successful signup
    setMessage('Sign up successful! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <img src={logo1} alt="logo" className="mx-auto mb-4 w-auto h-32" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter your full name" />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Age</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter your age" />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-blue-500">
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter your password" pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}" title="Minimum 6 characters, at least 1 letter and 1 number" />
          </div>
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="agree" 
              name="agree" 
              checked={formData.agree}
              onChange={handleChange}
              className="rounded text-blue-600 border-gray-300 focus:ring focus:ring-blue-500" 
            />
            <label htmlFor="agree" className="ml-2 text-sm text-gray-700 dark:text-gray-300">I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">Sign Up</button>
        </form>
        {message && <p className="text-center text-green-500 mt-4">{message}</p>}
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
          By signing up, you agree to our <a href="#" className="text-blue-500 hover:underline">policies</a>.
        </p>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
