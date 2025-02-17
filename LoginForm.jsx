// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Hook to handle navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const userData = { 
//         email: "admin@example.com",  // Use the correct email
//         password: "admin123"  // Use the correct password
//       };

//     // Call your API for login authentication
//     try {
//       const response = await fetch(
//   'https://eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcGFqYW5pMTIzNEBnbWFpbC5jb20iLCJuYmYiOjE3MzI1MjY0NjksImV4cCI6MTczMjUzMDA2OSwiaWF0IjoxNzMyNTI2NDY5fQ.aapZxuNOmdVQwmGN1sWJWJ64V4cSeIZGpDfwOZOohG8'
// , {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log('Login successful:', data);
//         // Redirect to Dashboard on successful login
//         navigate('/dashboard');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (error) {
//       setError('An error occurred, please try again');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-white p-8 rounded-md shadow-md h-80 w-80">
//         <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
//         {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AUTH_TOKEN, API_BASE_URL } from '../CONFIG/Config';  // Import config

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Hook to handle navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userData = { 
//         email,  // Use the dynamic email input
//         password,  // Use the dynamic password input
//     };

//     // Use the AUTH_TOKEN from config.js for authorization
//     try {
//       const response = await fetch(`${API_BASE_URL}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': ` ${AUTH_TOKEN}`, // Attach the AUTH_TOKEN here
//         },
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log('Login successful:', data);
//         // Redirect to Dashboard on successful login
//         navigate('/dashboard');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (error) {
//       setError('An error occurred, please try again');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-white p-8 rounded-md shadow-md h-80 w-80">
//         <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
//         {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AUTH_TOKEN } from '../CONFIG/Config'; // Import the auth token from config.js

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Hook to handle navigation

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Hardcoded credentials (for simulation)
//     const correctEmail = 'akhtar@admin.com';
//     const correctPassword = 'akhtar@admin.com';

//     // Simulate checking the email and password
//     if (email === correctEmail && password === correctPassword) {
//       // On successful login, store the auth token in localStorage
//       localStorage.setItem('authToken', AUTH_TOKEN);

//       console.log('Login successful:', { token: AUTH_TOKEN });
//       // Redirect to Dashboard
//       navigate('/dashboard');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-white p-8 rounded-md shadow-md h-90 w-90">
//         <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
//         {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;



 

// LoginForm.js
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { API_BASE_URL, API_WEB_DOMAIN } from '../CONFIG/Config';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const AUTH_TOKEN = localStorage.getItem('authToken') || ''; // Fetch token if exists
  
//     const requestData = {
//       email: email,
//       password: password
//     };
  
//     try {
//       const response = await fetch('https://uat-api.askaii.co.uk/api/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${AUTH_TOKEN}`  // Use token here
//         },
//         body: JSON.stringify(requestData)
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         throw new Error(data.message || 'Login failed');
//       }
  
//       // Store token after successful login
//       localStorage.setItem('authToken', data.token);
  
//       console.log('Login successful:', data);
//       navigate('/dashboard'); // Redirect to dashboard
//     } catch (error) {
//       setError(error.message);
//       console.error('Login Error:', error);
//     }
//   };
  

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-white p-8 rounded-md shadow-md h-90 w-90">
//         <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
//         {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;





 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [config, setConfig] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch config.json on component mount
  useEffect(() => {
    fetch('/Data/data.json')
      .then((response) => response.json())
      .then((data) => setConfig(data))
      .catch((error) => console.error('Error loading config:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!config) {
      setError('Configuration not loaded.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${config.apiBaseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.token}`,
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();
     
      console.log(data);


      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // ✅ Navigate to Dashboard & pass user data
      navigate('/dashboard', { state: { userData: data } });

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;





// get the data from json file url and token



 




 





// import { useContext, useState } from "react";
// import { UserContext } from "../context/UserContext";

// const LoginForm = () => {
//   const { setUser } = useContext(UserContext);
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (name && email) {
//       const newUser = { name, email };
//       setUser(newUser);
//       console.log("User Logged In:", newUser); // Console pe show karne ke liye
//     }
//   };

//   return (
//     <div className="max-w-sm mx-auto bg-white p-5 shadow-md rounded-md">
//       <h2 className="text-2xl font-bold mb-4 text-gray-700">Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           className="w-full mb-3 p-2 border rounded-md"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Enter Email"
//           className="w-full mb-3 p-2 border rounded-md"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
