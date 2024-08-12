import React from 'react';
import { Globe, Map, CreditCard, Users } from 'lucide-react';

const GlobalReach = () => {
  const globalFeatures = [
    { icon: Map, title: 'Market Insights', description: 'Access detailed insights into international markets and trends.' },
    { icon: Globe, title: 'Localization Support', description: 'Tools for adapting your business to local languages and cultures.' },
    { icon: CreditCard, title: 'Cross-border Transactions', description: 'Seamless management of international financial transactions.' },
    { icon: Users, title: 'Global Networking', description: 'Connect with international partners and expand your business network.' },
  ];

  return (
    <div className="global-reach">
      <h2 className="text-2xl font-bold mb-4">Expand Your Global Presence</h2>
      <p className="mb-6">Our Global Reach tools help you navigate the complexities of international business and tap into new markets worldwide.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {globalFeatures.map((feature, index) => (
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

export default GlobalReach;
