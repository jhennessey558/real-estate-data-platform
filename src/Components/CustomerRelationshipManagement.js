import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, UserPlus, PieChart as PieChartIcon, Edit, Trash2, Filter } from 'lucide-react';

// Mock data for customers
const initialCustomers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', lastContact: '2023-08-01', status: 'Active', notes: 'Interested in property A' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', lastContact: '2023-07-15', status: 'Inactive', notes: 'Follow up needed' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-555-5555', lastContact: '2023-08-10', status: 'Active', notes: 'Potential buyer for luxury apartments' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', phone: '111-222-3333', lastContact: '2023-08-05', status: 'New', notes: 'Referred by John Doe' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', phone: '444-555-6666', lastContact: '2023-07-20', status: 'Lost', notes: 'Moved to another city' },
];

// Mock data for customer analysis
const customerAnalysisData = [
  { name: 'New', value: 400 },
  { name: 'Active', value: 300 },
  { name: 'Inactive', value: 200 },
  { name: 'Lost', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const CustomerRelationshipManagement = () => {
    const [activeTab, setActiveTab] = useState('customer-list');
    const [customers, setCustomers] = useState(initialCustomers);
    const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '', notes: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [editingCustomer, setEditingCustomer] = useState(null);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewCustomer(prev => ({ ...prev, [name]: value }));
    };
  
    const addCustomer = () => {
      const customer = {
        id: customers.length + 1,
        ...newCustomer,
        lastContact: new Date().toISOString().split('T')[0],
        status: 'New'
      };
      setCustomers([...customers, customer]);
      setNewCustomer({ name: '', email: '', phone: '', notes: '' });
    };
  
    const deleteCustomer = (id) => {
      setCustomers(customers.filter(customer => customer.id !== id));
    };
  
    const startEditing = (customer) => {
      setEditingCustomer(customer);
      setActiveTab('edit-customer');
    };
  
    const saveEditedCustomer = () => {
      setCustomers(customers.map(c => c.id === editingCustomer.id ? editingCustomer : c));
      setEditingCustomer(null);
      setActiveTab('customer-list');
    };
  
    const filteredCustomers = customers.filter(customer =>
      (customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterStatus === 'All' || customer.status === filterStatus)
    );
    return (
        <div className="w-full">
          <div className="flex mb-4 space-x-2">
            <button
              className={`px-4 py-2 rounded ${activeTab === 'customer-list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('customer-list')}
            >
              <Users className="inline-block mr-2" size={18} />
              Customer List
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === 'add-customer' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('add-customer')}
            >
              <UserPlus className="inline-block mr-2" size={18} />
              Add Customer
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === 'customer-analysis' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('customer-analysis')}
            >
              <PieChartIcon className="inline-block mr-2" size={18} />
              Customer Analysis
            </button>
          </div>
          
          {activeTab === 'customer-list' && (
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Customer List</h2>
              <div className="flex mb-4 space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search customers..."
                    className="w-full p-2 border rounded"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center">
                  <Filter className="mr-2" size={18} />
                  <select
                    className="p-2 border rounded"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="All">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Lost">Lost</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">Email</th>
                      <th className="text-left p-2">Phone</th>
                      <th className="text-left p-2">Last Contact</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">Notes</th>
                      <th className="text-left p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCustomers.map(customer => (
                      <tr key={customer.id} className="border-b">
                        <td className="p-2">{customer.name}</td>
                        <td className="p-2">{customer.email}</td>
                        <td className="p-2">{customer.phone}</td>
                        <td className="p-2">{customer.lastContact}</td>
                        <td className="p-2">
                          <span className={`px-2 py-1 rounded text-sm ${
                            customer.status === 'Active' ? 'bg-green-200 text-green-800' :
                            customer.status === 'Inactive' ? 'bg-yellow-200 text-yellow-800' :
                            customer.status === 'Lost' ? 'bg-red-200 text-red-800' :
                            'bg-blue-200 text-blue-800'
                          }`}>
                            {customer.status}
                          </span>
                        </td>
                        <td className="p-2">{customer.notes}</td>
                        <td className="p-2">
                          <button onClick={() => startEditing(customer)} className="text-blue-500 mr-2">
                            <Edit size={18} />
                          </button>
                          <button onClick={() => deleteCustomer(customer.id)} className="text-red-500">
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
               {activeTab === 'add-customer' && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Add New Customer</h2>
          <div className="grid gap-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                className="w-full border p-2 rounded"
                name="name"
                placeholder="Customer Name"
                value={newCustomer.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                className="w-full border p-2 rounded"
                name="email"
                type="email"
                placeholder="Email Address"
                value={newCustomer.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">Phone</label>
              <input
                className="w-full border p-2 rounded"
                name="phone"
                placeholder="Phone Number"
                value={newCustomer.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1">Notes</label>
              <textarea
                className="w-full border p-2 rounded"
                name="notes"
                placeholder="Additional Notes"
                value={newCustomer.notes}
                onChange={handleInputChange}
                rows="3"
              ></textarea>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={addCustomer}
            >
              Add Customer
            </button>
          </div>
        </div>
      )}
      
      {activeTab === 'customer-analysis' && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Customer Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Customer Status Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={customerAnalysisData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {customerAnalysisData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Customer Growth Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={customerAnalysisData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Key Insights:</h4>
            <ul className="list-disc list-inside">
              <li>Majority of customers are new or active, indicating strong acquisition</li>
              <li>There's an opportunity to re-engage inactive customers through targeted campaigns</li>
              <li>Customer retention strategies may be needed to reduce the number of lost customers</li>
              <li>Consider implementing a loyalty program to increase the number of active customers</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'edit-customer' && editingCustomer && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Edit Customer</h2>
          <div className="grid gap-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                className="w-full border p-2 rounded"
                name="name"
                value={editingCustomer.name}
                onChange={(e) => setEditingCustomer({...editingCustomer, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                className="w-full border p-2 rounded"
                name="email"
                type="email"
                value={editingCustomer.email}
                onChange={(e) => setEditingCustomer({...editingCustomer, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1">Phone</label>
              <input
                className="w-full border p-2 rounded"
                name="phone"
                value={editingCustomer.phone}
                onChange={(e) => setEditingCustomer({...editingCustomer, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1">Status</label>
              <select
                className="w-full border p-2 rounded"
                value={editingCustomer.status}
                onChange={(e) => setEditingCustomer({...editingCustomer, status: e.target.value})}
              >
                <option value="New">New</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Lost">Lost</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Notes</label>
              <textarea
                className="w-full border p-2 rounded"
                name="notes"
                value={editingCustomer.notes}
                onChange={(e) => setEditingCustomer({...editingCustomer, notes: e.target.value})}
                rows="3"
              ></textarea>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={saveEditedCustomer}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerRelationshipManagement;