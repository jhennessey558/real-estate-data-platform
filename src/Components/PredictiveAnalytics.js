import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Target } from 'lucide-react';

// Mock data for charts
const marketTrendData = [
  { month: 'Jan', price: 300000, demand: 80 },
  { month: 'Feb', price: 310000, demand: 85 },
  { month: 'Mar', price: 305000, demand: 82 },
  { month: 'Apr', price: 315000, demand: 88 },
  { month: 'May', price: 320000, demand: 90 },
  { month: 'Jun', price: 318000, demand: 87 },
];

const PredictiveAnalytics = () => {
  const [activeTab, setActiveTab] = useState('market-trends');
  const [propertyDetails, setPropertyDetails] = useState({
    address: '',
    squareFootage: '',
    bedrooms: '',
    bathrooms: '',
  });
  const [predictedValue, setPredictedValue] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails(prev => ({ ...prev, [name]: value }));
  };

  const predictPropertyValue = () => {
    // This is where you'd typically call an API to get the prediction
    // For now, we'll use a simple mock calculation
    const baseValue = 200000;
    const sqftValue = parseInt(propertyDetails.squareFootage) * 100;
    const bedroomValue = parseInt(propertyDetails.bedrooms) * 10000;
    const bathroomValue = parseInt(propertyDetails.bathrooms) * 5000;
    const mockPrediction = baseValue + sqftValue + bedroomValue + bathroomValue;
    setPredictedValue(mockPrediction);
  };

  return (
    <div className="w-full">
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 ${activeTab === 'market-trends' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('market-trends')}
        >
          Market Trends
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'property-value' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('property-value')}
        >
          Property Value
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'investment-opportunities' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('investment-opportunities')}
        >
          Investment Opportunities
        </button>
      </div>
      
      {activeTab === 'market-trends' && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Market Trend Analysis</h2>
          <p className="mb-4">AI-powered insights into real estate market trends</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line yAxisId="right" type="monotone" dataKey="demand" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4">
            <h4 className="font-semibold">Key Insights:</h4>
            <ul className="list-disc list-inside">
              <li>Property prices show an upward trend</li>
              <li>Demand is increasing month-over-month</li>
              <li>May saw the highest average property price</li>
              <li>Consider investing in properties listed in April for potential value appreciation</li>
            </ul>
          </div>
        </div>
      )}
      
      {activeTab === 'property-value' && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Property Value Prediction</h2>
          <p className="mb-4">Estimate property values based on key features</p>
          <div className="grid gap-4">
            <input
              className="border p-2 rounded"
              name="address"
              placeholder="Property Address"
              value={propertyDetails.address}
              onChange={handleInputChange}
            />
            <input
              className="border p-2 rounded"
              name="squareFootage"
              type="number"
              placeholder="Square Footage"
              value={propertyDetails.squareFootage}
              onChange={handleInputChange}
            />
            <input
              className="border p-2 rounded"
              name="bedrooms"
              type="number"
              placeholder="Number of Bedrooms"
              value={propertyDetails.bedrooms}
              onChange={handleInputChange}
            />
            <input
              className="border p-2 rounded"
              name="bathrooms"
              type="number"
              placeholder="Number of Bathrooms"
              value={propertyDetails.bathrooms}
              onChange={handleInputChange}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={predictPropertyValue}
            >
              Predict Value
            </button>
          </div>
          {predictedValue && (
            <div className="mt-4">
              <h4 className="font-semibold">Predicted Property Value:</h4>
              <p className="text-2xl font-bold text-green-600">${predictedValue.toLocaleString()}</p>
            </div>
          )}
        </div>
      )}
      
      {activeTab === 'investment-opportunities' && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Investment Opportunities</h2>
          <p className="mb-4">Discover high-potential investment areas</p>
          <div className="grid gap-4">
            <div className="flex items-center p-4 bg-blue-100 rounded-lg">
              <TrendingUp className="text-blue-500 mr-4" size={24} />
              <div>
                <h4 className="font-semibold">Emerging Neighborhood: Silverdale</h4>
                <p>Projected growth rate: 12% over the next 2 years</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-green-100 rounded-lg">
              <DollarSign className="text-green-500 mr-4" size={24} />
              <div>
                <h4 className="font-semibold">High ROI: Downtown Lofts</h4>
                <p>Average ROI: 15% annually for the past 3 years</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-yellow-100 rounded-lg">
              <Target className="text-yellow-500 mr-4" size={24} />
              <div>
                <h4 className="font-semibold">Up-and-Coming: Tech Corridor</h4>
                <p>New tech hub development expected to drive property values up by 20%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictiveAnalytics;