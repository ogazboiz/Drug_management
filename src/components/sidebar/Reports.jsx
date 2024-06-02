// src/components/sidebar/Reports.jsx
import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../../css/Reports.css';

const Reports = () => {
  const [reportType, setReportType] = useState('');
  const [reportData, setReportData] = useState(null);

  const handleGenerateReport = () => {
    // Replace this with actual data fetching logic
    const data = {
      usage: [
        { drug: 'Drug A', usage: 100 },
        { drug: 'Drug B', usage: 50 },
        { drug: 'Drug C', usage: 75 },
      ],
      inventory: [
        { drug: 'Drug A', quantity: 100 },
        { drug: 'Drug B', quantity: 50 },
        { drug: 'Drug C', quantity: 75 },
      ],
      procurement: [
        { order: 'Order 1', status: 'Delivered' },
        { order: 'Order 2', status: 'Pending' },
      ],
    };

    setReportData(data[reportType]);
  };

  const handleDownloadReport = (format) => {
    // Replace this with actual report download logic
    alert(`Downloading report in ${format} format.`);
  };

  return (
    <div className="reports">
      <h2>Reports</h2>
      
      <div className="report-form">
        <h3>Generate Report</h3>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="">Select Report Type</option>
          <option value="usage">Drug Usage</option>
          <option value="inventory">Inventory Status</option>
          <option value="procurement">Procurement Efficiency</option>
        </select>
        <button onClick={handleGenerateReport}>Generate Report</button>
      </div>

      {reportData && (
        <div className="report-data">
          <h3>Report Data</h3>
          {reportType === 'usage' && (
            <BarChart width={600} height={300} data={reportData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="drug" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="usage" fill="#8884d8" />
            </BarChart>
          )}
          {reportType === 'inventory' && (
            <LineChart width={600} height={300} data={reportData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="drug" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="quantity" stroke="#82ca9d" />
            </LineChart>
          )}
          <table>
            <thead>
              <tr>
                {Object.keys(reportData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reportData.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="download-buttons">
            <button onClick={() => handleDownloadReport('PDF')}>Download as PDF</button>
            <button onClick={() => handleDownloadReport('Excel')}>Download as Excel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;
