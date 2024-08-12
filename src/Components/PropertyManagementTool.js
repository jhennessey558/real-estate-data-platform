// src/Components/PropertyManagementTool.js
import React, { useState } from 'react';
import { Building, Users, DollarSign, Briefcase } from 'lucide-react';

const PropertyManagementTool = () => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Sunset Apartments', units: 50, occupancy: 90, revenue: 75000 },
    { id: 2, name: 'Downtown Lofts', units: 30, occupancy: 85, revenue: 45000 },
    { id: 3, name: 'Parkview Residences', units: 75, occupancy: 95, revenue: 112500 },
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Property Management Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg">
          <Building className="text-blue-500 mb-2" size={24} />
          <p className="text-sm text-blue-800">Total Properties</p>
          <p className="text-2xl font-bold text-blue-600">{properties.length}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <Users className="text-green-500 mb-2" size={24} />
          <p className="text-sm text-green-800">Total Units</p>
          <p className="text-2xl font-bold text-green-600">{properties.reduce((sum, prop) => sum + prop.units, 0)}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <Briefcase className="text-yellow-500 mb-2" size={24} />
          <p className="text-sm text-yellow-800">Average Occupancy</p>
          <p className="text-2xl font-bold text-yellow-600">
            {(properties.reduce((sum, prop) => sum + prop.occupancy, 0) / properties.length).toFixed(1)}%
          </p>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg">
          <DollarSign className="text-purple-500 mb-2" size={24} />
          <p className="text-sm text-purple-800">Total Revenue</p>
          <p className="text-2xl font-bold text-purple-600">
            ${properties.reduce((sum, prop) => sum + prop.revenue, 0).toLocaleString()}
          </p>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Property Name</th>
            <th className="p-2 text-left">Units</th>
            <th className="p-2 text-left">Occupancy</th>
            <th className="p-2 text-left">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id} className="border-b">
              <td className="p-2">{property.name}</td>
              <td className="p-2">{property.units}</td>
              <td className="p-2">{property.occupancy}%</td>
              <td className="p-2">${property.revenue.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyManagementTool;
