// import { useState } from "react";

// export default function Testimonial() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [testimonials, setTestimonials] = useState([]);
//   const [formData, setFormData] = useState({
//     image: "",
//     fullName: "",
//     email: "",
//     phone: "",
//     satisfaction: "",
//     comment: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData({ ...formData, image: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTestimonials([...testimonials, formData]);
//     setIsModalOpen(false);
//     setFormData({ image: "", fullName: "", email: "", phone: "", satisfaction: "", comment: "" });
//   };

//   return (
//     <div className="p-6">
//       <button onClick={() => setIsModalOpen(true)} className="mb-4 p-2 bg-blue-500 text-white rounded">Add New Testimonial</button>
      
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <div className="flex justify-between mb-4">
//               <h2 className="text-xl font-bold">Add New Testimonial</h2>
//               <button onClick={() => setIsModalOpen(false)} className="text-gray-600">✖</button>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full p-2 border rounded" />
//               <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded" required />
//               <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
//               <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
//               <select name="satisfaction" value={formData.satisfaction} onChange={handleChange} className="w-full p-2 border rounded" required>
//                 <option value="">Overall Satisfaction (1-5)</option>
//                 {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}</option>)}
//               </select>
//               <textarea name="comment" placeholder="Comment" value={formData.comment} onChange={handleChange} className="w-full p-2 border rounded" required></textarea>
//               <div className="flex justify-end space-x-2">
//                 <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-400 p-2 rounded text-white">Close</button>
//                 <button type="submit" className="bg-blue-500 p-2 rounded text-white">Submit</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
      
//       <div className="grid gap-4">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="p-4 border rounded flex gap-4 items-center shadow">
//             {testimonial.image && <img src={testimonial.image} alt="" className="w-16 h-16 rounded-full" />}
//             <div>
//               <h3 className="font-bold">{testimonial.fullName}</h3>
//               <p>{testimonial.email} | {testimonial.phone}</p>
//               <p className="text-sm">Satisfaction: {testimonial.satisfaction}/5</p>
//               <p className="italic">{testimonial.comment}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from 'react'
import FaqGrid from './Pages/JqueryFaqGridapiData'
import LoginForm from './Component/LoginForm'
import JqueryDataBaseTable from './jqueryDatabaseTableReact'

const App = () => {
  return (
    <div>
      {/* <FaqGrid/>
      <LoginForm/> */}
      <JqueryDataBaseTable/>
    </div>
  )
}

export default App




// import React, { useState, useEffect } from 'react';

// const DataFetchingComponent = () => {
//   // State to hold the fetched data
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetching data from API
//     fetch('https://jsonplaceholder.typicode.com/posts') // Example API
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setData(data); // Store fetched data in state
//         setLoading(false); // Set loading to false once data is fetched
//       })
//       .catch((error) => {
//         setError(error.message); // Set error message if there's any issue
//         setLoading(false); // Set loading to false even if there's an error
//       });
//   }, []); // Empty dependency array means this will run once when component mounts
 

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DataFetchingComponent;
  



// import React, { useState } from "react";
// import DataTable from "react-data-table-component";

// const App = () => {
//   const columns = [
//     {
//       name: "Name",
//       selector: (row) => row.name,
//       sortable: true,
//     },
//     {
//       name: "Email",
//       selector: (row) => row.email,
//       sortable: true,
//     },
//     {
//       name: "Age",
//       selector: (row) => row.age,
//       sortable: true,
//     },
//   ];

//   const data = [
//     { id: 1, name: "Wafadar Hussain", email: "wafadarkhanbuck@gmail.com", age: 22 },
//     { id: 2, name: "Ali Sher", email: "alisherkhan@gmail.com", age: 20 },
//     { id: 3, name: "Raza Khan", email: "razakhanbuck@gmail.com", age: 21 },
//     { id: 4, name: "Ghazanfar Khan", email: "ghazanfarkhan@gmail.com", age: 22 },
//     { id: 5, name: "Aqeel Abbas", email: "aqeelkhanbuck@gmail.com", age: 25 },
//     { id: 6, name: "Ahmed Ali", email: "ahmedali@gmail.com", age: 30 },
//     { id: 7, name: "Sara Khan", email: "sarakhan@gmail.com", age: 28 },
//     { id: 8, name: "Hassan Raza", email: "hassanraza@gmail.com", age: 26 },
//     { id: 9, name: "Waseem Akram", email: "waseemakram@gmail.com", age: 32 },
//     { id: 10, name: "Fatima Noor", email: "fatimanoor@gmail.com", age: 27 },

//     { id: 1, name: "Wafadar Hussain", email: "wafadarkhanbuck@gmail.com", age: 22 },
//     { id: 2, name: "Ali Sher", email: "alisherkhan@gmail.com", age: 20 },
//     { id: 3, name: "Raza Khan", email: "razakhanbuck@gmail.com", age: 21 },
//     { id: 4, name: "Ghazanfar Khan", email: "ghazanfarkhan@gmail.com", age: 22 },
//     { id: 5, name: "Aqeel Abbas", email: "aqeelkhanbuck@gmail.com", age: 25 },
//     { id: 6, name: "Ahmed Ali", email: "ahmedali@gmail.com", age: 30 },
//     { id: 7, name: "Sara Khan", email: "sarakhan@gmail.com", age: 28 },
//     { id: 8, name: "Hassan Raza", email: "hassanraza@gmail.com", age: 26 },
//     { id: 9, name: "Waseem Akram", email: "waseemakram@gmail.com", age: 32 },
//     { id: 10, name: "Fatima Noor", email: "fatimanoor@gmail.com", age: 27 },
//     { id: 1, name: "Wafadar Hussain", email: "wafadarkhanbuck@gmail.com", age: 22 },
//     { id: 2, name: "Ali Sher", email: "alisherkhan@gmail.com", age: 20 },
//     { id: 3, name: "Raza Khan", email: "razakhanbuck@gmail.com", age: 21 },
//     { id: 4, name: "Ghazanfar Khan", email: "ghazanfarkhan@gmail.com", age: 22 },
//     { id: 5, name: "Aqeel Abbas", email: "aqeelkhanbuck@gmail.com", age: 25 },
//     { id: 6, name: "Ahmed Ali", email: "ahmedali@gmail.com", age: 30 },
//     { id: 7, name: "Sara Khan", email: "sarakhan@gmail.com", age: 28 },
//     { id: 8, name: "Hassan Raza", email: "hassanraza@gmail.com", age: 26 },
//     { id: 9, name: "Waseem Akram", email: "waseemakram@gmail.com", age: 32 },
//     { id: 10, name: "Fatima Noor", email: "fatimanoor@gmail.com", age: 27 },
//     { id: 1, name: "Wafadar Hussain", email: "wafadarkhanbuck@gmail.com", age: 22 },
//     { id: 2, name: "Ali Sher", email: "alisherkhan@gmail.com", age: 20 },
//     { id: 3, name: "Raza Khan", email: "razakhanbuck@gmail.com", age: 21 },
//     { id: 4, name: "Ghazanfar Khan", email: "ghazanfarkhan@gmail.com", age: 22 },
//     { id: 5, name: "Aqeel Abbas", email: "aqeelkhanbuck@gmail.com", age: 25 },
//     { id: 6, name: "Ahmed Ali", email: "ahmedali@gmail.com", age: 30 },
//     { id: 7, name: "Sara Khan", email: "sarakhan@gmail.com", age: 28 },
//     { id: 8, name: "Hassan Raza", email: "hassanraza@gmail.com", age: 26 },
//     { id: 9, name: "Waseem Akram", email: "waseemakram@gmail.com", age: 32 },
//     { id: 10, name: "Fatima Noor", email: "fatimanoor@gmail.com", age: 27 },
//   ];
  
//   const [records, setRecords] = useState(data);

//   function handleFilter(event) {
//     const value = event.target.value.toLowerCase();
//     const newData = data.filter((row) => row.name.toLowerCase().includes(value));
//         setRecords(newData);
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold text-center mb-4">User Data Table</h2>
      
//       {/* Search Input */}
//       <div className="flex justify-end mb-3">
//         <input
//           type="text"
//           placeholder="Search by name..."
//           onChange={handleFilter}
//           className="border border-gray-300 rounded-lg px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Data Table */}
//       <div className="border rounded-lg shadow-lg overflow-hidden">
//       <DataTable
//         columns={columns}
//         data={records}
//         selectableRows
//         fixedHeader
//         pagination
//         highlightOnHover
//       />
//       </div>
//     </div>
//   );
// };

// export default App;



 




// get the data json api in grid 


 



// faqs get data from api 

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const FaqGrid = () => {
//   const [faqs, setFaqs] = useState([])  // Store FAQs
//   const [loading, setLoading] = useState(true)  // Track loading state
//   const [error, setError] = useState(null)  // Store error message
//   const [config, setConfig] = useState(null)  // Store config data

//   // Fetch configuration and FAQ data in one effect
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         // Fetch the config data
//         const configResponse = await fetch('/Data/data.json')
//         const configData = await configResponse.json()
//         setConfig(configData)

//         // Fetch FAQs once config is loaded
//         if (configData?.API_URL && configData?.TOKEN) {
//           const faqsResponse = await axios.get(configData.API_URL, {
//             headers: { Authorization: `Bearer ${configData.TOKEN}` },
//           })
          
//           if (Array.isArray(faqsResponse.data)) {
//             setFaqs(faqsResponse.data)  // Save FAQ data
//           } else if (faqsResponse.data?.faqs) {
//             setFaqs(faqsResponse.data.faqs)  // Save FAQ data from 'faqs' field
//           } else {
//             setError('Invalid API response format')
//           }
//         } else {
//           setError('Missing API URL or Token in config')
//         }
//       } catch (err) {
//         setError('Failed to fetch data or config')
//         console.error(err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     loadData()
//   }, [])  // Empty dependency array ensures this runs only once

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-2xl font-semibold text-center mb-4">FAQs</h2>

//       {loading && <div className="flex justify-center"><div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full"></div></div>}
//       {error && <div className="text-red-500 text-center mb-4">{error}</div>}

//       {!loading && !error && (
//         <table className="min-w-full table-auto border-separate border-spacing-2 border border-gray-200">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 text-left">#</th>
//               <th className="px-4 py-2 text-left">Question</th>
//               <th className="px-4 py-2 text-left">Answer</th>
//             </tr>
//           </thead>
//           <tbody>
//             {faqs.length > 0 ? (
//               faqs.map((faq, index) => (
//                 <tr key={faq.id || faq.faqId || faq.uuid || index}>
//                   <td className="border px-4 py-2">{faq.id || faq.faqId || faq.uuid || index + 1}</td>
//                   <td className="border px-4 py-2">{faq.question}</td>
//                   <td className="border px-4 py-2">{faq.answer}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3" className="text-center border px-4 py-2">
//                   No Data Available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   )
// }

// export default FaqGrid
