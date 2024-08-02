import React, { useState } from 'react';

const UserProfileSettings = () => {
  const [formData, setFormData] = useState({
    username: 'User', // Assuming current username is shown as 'Unchanged'
    email: 'user1@example.com', // Assuming current email is shown as 'unchanged@example.com'
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    bio: 'This your current bio of the user', // Initial bio content
    avatar: null,
  });
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData({ ...formData, avatar: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Assuming bio is updated here
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleReset = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    setFormData({
      ...formData,
      username: 'User1', // Resetting to current username
      email: 'user1@example.com', // Resetting to current email
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      bio: 'This your current bio of the user', // Resetting bio if needed
      avatar: null,
    });
    setShowResetConfirm(false);
  };

  return (
    < div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Profile </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
        <div className="mb-6 flex items-center">
          <div className="mr-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
              <img 
                src={formData.avatar || 'https://via.placeholder.com/96?text=Upload'} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <input 
              type="file" 
              id="avatar" 
              name="avatar" 
              onChange={handleFileChange} 
              className="hidden"
            />
            <label 
              htmlFor="avatar" 
              className="mt-2 inline-block bg-blue-500 text-white py-1 px-3 rounded text-sm cursor-pointer hover:bg-blue-600 transition duration-300"
            >
              Change Photo
            </label>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2">{formData.username}</h3>
            <p className="text-gray-600">{formData.email}</p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Bio:</h4>
          <p className="text-gray-600">{formData.bio}</p>
   </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
            Update Bio
          </label>
          <textarea 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="bio" 
            name="bio"
            rows="3" 
            placeholder="Tell us about yourself" 
            value={formData.bio}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="current-password">
            Current Password
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="current-password" 
            name="currentPassword"
            type="password" 
            placeholder="Current Password" 
            value={formData.currentPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
            New Password
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="new-password" 
            name="newPassword"
            type="password" 
            placeholder="New Password" 
            value={formData.newPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirm New Password
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="confirm-password" 
            name="confirmPassword"
            type="password" 
            placeholder="Confirm New Password" 
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" 
            type="submit"
          >
            Save Changes
          </button>
          </div>

      </form>


      {showResetConfirm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
            <p className="mb-4">This will reset all form fields. This action cannot be undone.</p>
            <div className="flex justify-end">
              <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={confirmReset}
              >
                OK
              </button>
              <button 
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={() => setShowResetConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-green-600">Success!</h2>
            <p className="mb-4">You have successfully updated your profile.</p>
            <div className="flex justify-end">
              <button 
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowSuccessMessage(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileSettings;
