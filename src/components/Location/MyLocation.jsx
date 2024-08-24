import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function MyLocation() {
  const location = useLocation();
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-300 p-8 rounded-lg text-center shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Current Location</h1>
        <p className="text-lg mb-2">Pathname: {location.pathname}</p>
        <p className="text-lg mb-6">Search: {location.search}</p>
        <button
          className=" bg-blue-500 hover:bg-red-600 text-white font-bold py-4 px-4 rounded-md"
          onClick={goHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default MyLocation;
