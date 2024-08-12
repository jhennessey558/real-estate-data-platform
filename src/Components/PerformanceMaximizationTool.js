// src/Components/PerformanceMaximizationTool.js
import React from 'react';
import { TrendingUp, DollarSign, Users, Home } from 'lucide-react';

const PerformanceMetric = ({ icon, title, value, change }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-3xl font-bold mb-2">{value}</p>
    <p className={`text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
      {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last month
    </p>
  </div>
);

const PerformanceMaximizationTool = () => {
  const metrics = [
    { icon: <DollarSign className="text-blue-500" size={24} />, title: 'Revenue', value: '$1.2M', change: 5.3 },
    { icon: <Home className="text-green-500" size={24} />, title: 'Occupancy Rate', value: '94%', change: 2.1 },
    { icon: <Users className="text-yellow-500" size={24} />, title: 'Tenant Satisfaction', value: '4.7/5', change: 0.2 },
    { icon: <TrendingUp className="text-purple-500" size={24} />, title: 'Property Value', value: '$25.8M', change: 3.8 },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Performance Maximization Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <PerformanceMetric key={index} {...metric} />
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Performance Insights</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Revenue is up 5.3% due to increased occupancy and strategic pricing adjustments.</li>
          <li>Occupancy rate has improved by 2.1%, reflecting successful marketing efforts.</li>
          <li>Tenant satisfaction remains high, with a slight increase of 0.2 points.</li>
          <li>Property value has grown by 3.8%, outpacing the local market average of 2.5%.</li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Consider implementing a referral program to further boost occupancy rates.</li>
          <li>Invest in energy-efficient upgrades to reduce operating costs and increase property value.</li>
          <li>Conduct a tenant survey to identify areas for improvement in satisfaction scores.</li>
          <li>Explore opportunities for value-add renovations to drive further property value growth.</li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceMaximizationTool;
