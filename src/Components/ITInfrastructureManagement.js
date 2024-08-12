import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Server, Plus, Activity } from 'lucide-react';

const ITInfrastructureManagement = () => {
  const [servers, setServers] = useState([
    { id: 1, name: 'Web Server', ip: '192.168.1.100', status: 'Online' },
    { id: 2, name: 'Database Server', ip: '192.168.1.101', status: 'Online' },
    { id: 3, name: 'Backup Server', ip: '192.168.1.102', status: 'Offline' },
  ]);

  const [newServerName, setNewServerName] = useState('');
  const [newServerIP, setNewServerIP] = useState('');

  const addServer = () => {
    if (newServerName && newServerIP) {
      const newServer = {
        id: servers.length + 1,
        name: newServerName,
        ip: newServerIP,
        status: 'Online',
      };
      setServers([...servers, newServer]);
      setNewServerName('');
      setNewServerIP('');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">IT Infrastructure Management</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add New Server</h2>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Server Name"
            value={newServerName}
            onChange={(e) => setNewServerName(e.target.value)}
            className="px-3 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="IP Address"
            value={newServerIP}
            onChange={(e) => setNewServerIP(e.target.value)}
            className="px-3 py-2 border rounded"
          />
          <button onClick={addServer} className="px-4 py-2 bg-blue-500 text-white rounded flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Server
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Server List</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">IP Address</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {servers.map((server) => (
              <tr key={server.id}>
                <td className="py-2">
                  <div className="flex items-center">
                    <Server className="w-4 h-4 mr-2" />
                    {server.name}
                  </div>
                </td>
                <td className="py-2">{server.ip}</td>
                <td className="py-2">
                  <span className={`flex items-center ${server.status === 'Online' ? 'text-green-600' : 'text-red-600'}`}>
                    <Activity className="w-4 h-4 mr-1" />
                    {server.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ITInfrastructureManagement.propTypes = {
  // If you need to pass props in the future, define them here
};

export default ITInfrastructureManagement;
