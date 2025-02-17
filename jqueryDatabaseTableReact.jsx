

//jquer database table  from array

import React, { useState } from "react";
import DataTable from "react-data-table-component";

const JqueryDataBaseTable = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
  ];

  const countries = ["USA", "UK", "Canada", "Germany", "France", "Australia", "Pakistan", "India", "Brazil", "Japan"];

  const data = Array.from({ length: 100 }, (_, i) => {
    const country = countries[Math.floor(Math.random() * countries.length)];
    return {
      id: i + 1,
      name: `Wafadar Hussain ${i + 1} (${country})`,
      email: `email${i + 1}@example.com`,
      age: Math.floor(Math.random() * 30) + 18, // Random age between 18-47
      country: country, // Random country
    };
  });

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const value = event.target.value.toLowerCase();
    const newData = data.filter((row) => row.name.toLowerCase().includes(value));
    setRecords(newData);
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">User Data Table</h2>

      {/* Search Input */}
      <div className="flex justify-end mb-3">
        <input
          type="text"
          placeholder="Search by name..."
          onChange={handleFilter}
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Data Table */}
      <div className="border rounded-lg shadow-lg overflow-hidden">
        <DataTable
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination
          highlightOnHover
          className="bg-white"
        />
      </div>
    </div>
  );
};

export default JqueryDataBaseTable;






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

//   // Random name generator
//   const firstNames = ["Wafadar", "Ali", "Raza", "Ghazanfar", "Aqeel", "Ahmed", "Sara", "Hassan", "Fatima", "Waseem"];
//   const lastNames = ["Hussain", "Sher", "Khan", "Babar", "Abbas", "Ali", "Raza", "Noor", "Akram", "Zaidi"];

//   const generateRandomName = () => {
//     const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
//     const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
//     return `${firstName} ${lastName}`;
//   };

//   // Generating unique user data
//   const data = Array.from({ length: 100 }, (_, i) => ({
//     id: i + 1,
//     name: generateRandomName(),
//     email: `email${i + 1}@example.com`,
//     age: Math.floor(Math.random() * 30) + 18, // Random age between 18-47
//   }));

//   const [records, setRecords] = useState(data);

//   function handleFilter(event) {
//     const value = event.target.value.toLowerCase();
//     const newData = data.filter((row) => row.name.toLowerCase().includes(value));
//     setRecords(newData);
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
//         <DataTable
//           columns={columns}
//           data={records}
//           selectableRows
//           fixedHeader
//           pagination
//           highlightOnHover
//           className="bg-white"
//         />
//       </div>
//     </div>
//   );
// };

// export default App;

