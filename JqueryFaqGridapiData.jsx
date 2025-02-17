import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const FaqGrid = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch("/Data/data.json");
        const data = await response.json();
        setConfig(data);
      } catch (err) {
        console.error("Error loading config.json:", err);
        setError("Failed to load config");
      }
    };

    fetchConfig();
  }, []);

  useEffect(() => {
    if (!config) return;

    const fetchFaqs = async () => {
      try {
        const response = await axios.get(config.API_URL, {
          headers: { Authorization: `Bearer ${config.TOKEN}` },
        });

        if (Array.isArray(response.data)) {
          setFaqs(response.data);
        } else if (response.data?.faqs) {
          setFaqs(response.data.faqs);
        } else {
          setError("Invalid API response format");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [config]);

  const columns = [
    {
      name: "#",
      selector: (row, index) => row.id || row.faqId || row.uuid || index + 1,
      sortable: true,
    },
    {
      name: "Question",
      selector: (row) => row.question,
      sortable: true,
    },
    {
      name: "Answer",
      selector: (row) => row.answer,
    },
  ];

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">FAQs</h2>

      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {!loading && !error && (
        <DataTable
          columns={columns}
          data={faqs}
          pagination
          highlightOnHover
        />
      )}
    </div>
  );
};

export default FaqGrid;