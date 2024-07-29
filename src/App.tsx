import React, { useState } from 'react';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setIsLoggedIn] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Save the inputs to localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    // Authentication handler
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Set login
    setIsLoggedIn(true);
    alert('Login Successful');
    
    // Reload the page
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen  w-full ml-80 bg-gray-600 bg-opacity-30">
      <div className="bg-white p-6 shadow-md w-full max-w-sm rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-400">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border-none bg-green-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border-none bg-green-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="block text-sm font-medium text-gray-700">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
