// import React from 'react';

// function Navbar() {
//   return (
//     <div className="bg-gray-800 p-4">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center text-white">
//         <img src="" alt="Company Logo" className="h-12" />
//         <nav>
//           <ul className="flex space-x-6">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#portfolio">Portfolio</a></li>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#careers">Careers</a></li>
//             <li><a href="#contact">Contact Us</a></li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }

// function AboutUs() {
//   return (
//     <section id="about" className="py-12 bg-gray-100">
//       <div className="max-w-screen-xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
//         <p className="text-lg mb-6">This is our About Us section. Learn more about our company!</p>
//         <div className="grid grid-cols-3 gap-6">
//           <div className="text-center">
//             <img src="/public/akhtar.jpg" alt="Akhtar Abbas" className="w-24 h-24 rounded-full mx-auto mb-2" />
//             <p className="font-semibold">Akhtar abbas</p>
//             <p>CEO</p>
//           </div>
//           <div className="text-center">
//             <img src="/public/wafadar.jpg" alt="Wafadar Hussain" className="w-24 h-24 rounded-full mx-auto mb-2" />
//             <p className="font-semibold">Wafadar Hussain </p>
//             <p>Mern Stack Developer</p>
//           </div>
//           <div className="text-center">
//             <img src="/public/Raza.jpg" alt="raza" className="w-24 h-24 rounded-full mx-auto mb-2" />
//             <p className="font-semibold">Muhammad Raza</p>
//             <p>React Developer</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-4">
//       <div className="max-w-screen-xl mx-auto text-center">
//         <p>© 2025 HubWeb. All Rights Reserved.</p>
//         <div className="mt-4">
//           <p>+923224824998 | Lahore | info@hubweb.com</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen flex items-center justify-center bg-gray-200">
//         <div className="bg-white p-8 rounded-md shadow-md w-96">
//           <h2 className="text-2xl font-semibold text-center mb-4">Dashboard</h2>
//           <p>Welcome to your dashboard!</p>
//         </div>
//       </div>
//       <AboutUs />
//       <Footer />
//     </div>
//   );
// }

// export default Dashboard;








import React from 'react';

function Navbar() {
  return (
    <div className="bg-gray-800 p-4 fixed w-full top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center text-white">
        <img src="/public/hubo.png" alt="Company Logo" className="h-12" />
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="fixed left-0 w-18 top-20  bg-gray-900 ">
      <a href="#home" className="block text-white p-2">🏠Home</a>
      <a href="#services" className="block text-white p-2">📱Services</a>
      <a href="#portfolio" className="block text-white p-2">💼Portfolio</a>
      <a href="#about" className="block text-white p-2">ℹ️ About us</a>
      <a href="#contact" className="block text-white p-2">📞Contact</a>
    </div>
  );
}
function AboutUs() {
  return (
    <section id="about" className="py-12 bg-gray-100 text-center">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg mb-6">Learn more about our company and team!</p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img src="/public/akhtar.jpg" alt="Akhtar Abbas" className="w-24 h-24 rounded-full mx-auto mb-2" />
            <p className="font-semibold">Akhtar Abbas</p>
            <p>CEO</p>
          </div>
          <div className="text-center">
            <img src="/public/wafadar.jpg" alt="Wafadar Hussain" className="w-24 h-24 rounded-full mx-auto mb-2" />
            <p className="font-semibold">Wafadar Hussain</p>
            <p>MERN Stack Developer</p>
          </div>
          <div className="text-center">
            <img src="/public/raza.jpg" alt="Muhammad Raza" className="w-24 h-24 rounded-full mx-auto mb-2" />
            <p className="font-semibold">Muhammad Raza</p>
            <p>React Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { id: 'app', name: 'App Development', image: '/public/app.jpeg', details: 'We build modern mobile apps.' },
    { id: 'web', name: 'Web Development', image: '/public/web.jpg', details: 'We create responsive websites.' },
    { id: 'uiux', name: 'UI/UX Design', image: '/public/uiux.jpg', details: 'We design user-friendly interfaces.' },
    { id: 'seo', name: 'SEO Optimization', image: '/public/seo.jpg', details: 'We optimize your website for search engines.' },
    { id: 'marketing', name: 'Digital Marketing', image: '/public/marketing.jpg', details: 'We enhance your online presence.' },
    { id: 'CRM', name: 'CRM', image: '/public/marketing.jpg', details: 'We enhance your online presence.' }

  ];
  
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-md shadow-md">
              <img src={service.image} alt={service.name} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-gray-700">{service.details}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-md">
            <img src="/public/client1.jpg" alt="Client 1" className="w-full h-40 object-cover rounded-md" />
            <p className="font-semibold mt-2">Client 1 - Web App</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <img src="/public/app.jpeg" alt="app" className="w-full h-40 object-cover rounded-md" />
            <p className="font-semibold mt-2">Client 2 - Mobile App</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <img src="/public/client3.jpg" alt="Client 3" className="w-full h-40 object-cover rounded-md" />
            <p className="font-semibold mt-2">Client 3 - E-commerce</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactUs() {
  return (
    <section id="contact" className="py-12 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg">📞 +923224824998 | 📧 info@hubweb.com</p>
    </section>
  );
}

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div id="home" className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded-md shadow-md w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Dashboard</h2>
          <p>Welcome to your dashboard!</p>
        </div>
      </div>
      <Services />
      <Portfolio />
      <AboutUs/>
      <ContactUs />
    </div>
  );
}

export default Dashboard;


 
// dashboard show the user data show from api in code below

// import React from 'react'
// import { useLocation } from 'react-router-dom'

// const Dashboard = () => {
//   const location = useLocation()
//   const userData = location.state?.userData // Get passed data

//   console.log('User Data on Dashboard:', userData) // Debugging

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <div className="bg-white p-6 rounded shadow-md w-96 text-center">
//         <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//         {userData ? (
//           <div>
//             {Object.entries(userData).map(([key, value]) => (
//               <p key={key} className="text-gray-700 capitalize">
//                 {key}: {value}
//               </p>
//             ))}
//           </div>
//         ) : (
//           <p className="text-red-500 font-semibold">No user data received.</p>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Dashboard




// import React from 'react';
// import { useUser } from '../context/UserContext';


// const Dashboard = () => {
//   const { user } = useUser();

//   console.log('Dashboard loaded with user data:', user);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <div className="bg-white p-6 rounded shadow-md w-96 text-center">
//         <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//         {user ? (
//           <div>
//             <p className="text-gray-700 capitalize">ID: {user.id}</p>
//             <p className="text-gray-700 capitalize">Name: {user.name}</p>
//             <p className="text-gray-700 capitalize">Email: {user.email}</p>
//             <p className="text-gray-700 capitalize">Role: {user.role}</p>
//           </div>
//         ) : (
//           <p className="text-red-500 font-semibold">No user data available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// // used to the context api 

 