import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MessageSquare, TrendingUp, ThumbsUp, ThumbsDown } from 'lucide-react';

// Mock data generation
const generateMockData = () => {
  const topics = ['Price', 'Location', 'Size', 'Amenities', 'Schools', 'Neighborhood'];
  return topics.map(topic => ({
    topic,
    mentions: Math.floor(Math.random() * 1000) + 100,
    sentiment: (Math.random() * 2 - 1).toFixed(2) // Range from -1 to 1
  }));
};

const ConversationAnalysisTool = () => {
  const [data, setData] = useState(generateMockData());
  const [loading, setLoading] = useState(false);

  const refreshData = () => {
    setLoading(true);
    setTimeout(() => {
      setData(generateMockData());
      setLoading(false);
    }, 1000);
  };

  const totalConversations = data.reduce((sum, item) => sum + item.mentions, 0);
  const averageSentiment = (data.reduce((sum, item) => sum + parseFloat(item.sentiment), 0) / data.length).toFixed(2);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Real Estate Conversation Analysis</h1>
      <p className="mb-4">Analyzing thousands of conversations across properties daily.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-sm text-blue-800">Total Conversations</p>
            <p className="text-2xl font-bold text-blue-600">{totalConversations}</p>
          </div>
          <MessageSquare className="text-blue-500" size={24} />
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-sm text-green-800">Top Topic</p>
            <p className="text-2xl font-bold text-green-600">{data.sort((a, b) => b.mentions - a.mentions)[0].topic}</p>
          </div>
          <TrendingUp className="text-green-500" size={24} />
        </div>
        <div className={`${averageSentiment > 0 ? 'bg-yellow-100' : 'bg-red-100'} p-4 rounded-lg flex items-center justify-between`}>
          <div>
            <p className={`text-sm ${averageSentiment > 0 ? 'text-yellow-800' : 'text-red-800'}`}>Average Sentiment</p>
            <p className={`text-2xl font-bold ${averageSentiment > 0 ? 'text-yellow-600' : 'text-red-600'}`}>{averageSentiment}</p>
          </div>
          {averageSentiment > 0 ? <ThumbsUp className="text-yellow-500" size={24} /> : <ThumbsDown className="text-red-500" size={24} />}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Topic Mentions and Sentiment</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="topic" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="mentions" fill="#8884d8" name="Mentions" />
            <Bar yAxisId="right" dataKey="sentiment" fill="#82ca9d" name="Sentiment" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={refreshData}
        disabled={loading}
      >
        {loading ? 'Refreshing...' : 'Refresh Data'}
      </button>
    </div>
  );
};

export default ConversationAnalysisTool;
