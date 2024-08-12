import React from 'react';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const SecurityProtection = () => {
  const securityFeatures = [
    { icon: Lock, title: 'Data Encryption', description: 'All your data is encrypted using industry-standard protocols.' },
    { icon: Eye, title: 'Real-time Monitoring', description: 'Continuous monitoring of your systems for potential threats.' },
    { icon: AlertTriangle, title: 'Threat Detection', description: 'Advanced AI-powered threat detection and prevention.' },
    { icon: Shield, title: 'Access Control', description: 'Granular access controls to protect sensitive information.' },
  ];

  return (
    <div className="security-protection">
      <h2 className="text-2xl font-bold mb-4">Protect Your Assets</h2>
      <p className="mb-6">Our comprehensive security solutions ensure the safety of your valuable assets and data.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <feature.icon className="text-blue-500 w-8 h-8 mb-2" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityProtection;
