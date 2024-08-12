import React, { useState, useEffect } from 'react';
import { BarChart, MessageCircle, Building, Zap, Shield, Globe, X, ArrowRight, Cpu, Users, FileText, Instagram, MapPin, Camera, DollarSign, Target, FileSearch, Bot, TrendingUp } from 'lucide-react';
import logo from './Images/Reality_Logo-Transparent.png';
import './App.css';
import PropertyManagementTools from './Components/PropertyManagementTool';
import ConversationAnalysisTool from './Components/ConversationAnalysisTool';
import PerformanceMaximizationTool from './Components/PerformanceMaximizationTool';
import ITInfrastructureManagement from './Components/ITInfrastructureManagement.js';
import SecurityProtection from './Components/SecurityProtection';
import GlobalReach from './Components/GlobalReach';
import PredictiveAnalytics from './Components/PredictiveAnalytics';
import CustomerRelationshipManagement from './Components/CustomerRelationshipManagement.js';

const Header = () => (
  <header className="header">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <div className="flex items-center">
        <img src={logo} alt="Reality Logo" className="logo" />
        <h1 className="text-3xl font-bold ml-2 gradient-text">Reality</h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#features">Features</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const AlertBanner = () => (
  <div className="alert-banner">
    <p className="alert-text">All tools are using dummy data while waiting on API access</p>
  </div>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-content text-center">
      <h2 className="text-4xl font-bold mb-4 gradient-text">Welcome to Reality</h2>
      <p className="mb-8">Discover the power of our innovative tools and features.</p>
      <button className="orange-gradient-button">Get Started</button>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, onClick }) => (
  <div className="feature-card" onClick={onClick}>
    <Icon className="icon" size={32} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const AnimatedTool = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`animated-tool ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    { icon: Building, title: "Property Management", description: "Streamline your property management tasks.", component: PropertyManagementTools },
    { icon: MessageCircle, title: "Conversation Analysis", description: "Gain insights from customer interactions.", component: ConversationAnalysisTool },
    { icon: Zap, title: "Performance Maximization", description: "Optimize your business performance.", component: PerformanceMaximizationTool },
    { icon: Cpu, title: "IT Infrastructure", description: "Manage your IT infrastructure efficiently.", component: ITInfrastructureManagement },
    { icon: Shield, title: "Security Protection", description: "Enhance your digital security measures.", component: SecurityProtection },
    { icon: Globe, title: "Global Reach", description: "Expand your business globally.", component: GlobalReach },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              onClick={() => setSelectedFeature(feature)}
            />
          ))}
        </div>
      </div>
      {selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-11/12 h-5/6 max-w-4xl overflow-hidden flex flex-col">
            <div className="bg-gray-100 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedFeature.title}</h2>
              <button onClick={() => setSelectedFeature(null)}>
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-grow">
              <AnimatedTool>
                {React.createElement(selectedFeature.component)}
              </AnimatedTool>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Tools = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const tools = [
    { icon: Cpu, title: "Predictive Analytics", description: "AI-powered market trend analysis and property value prediction.", component: PredictiveAnalytics },
    { icon: Users, title: "Customer Relationship Management", description: "Manage and analyze customer interactions and data.", component: CustomerRelationshipManagement },
    { icon: FileText, title: "Document Management", description: "Organize and manage your documents efficiently." },
    { icon: Instagram, title: "Social Media Integration", description: "Connect and manage your social media presence." },
    { icon: MapPin, title: "Location Intelligence", description: "Gain insights from geographic and location data." },
    { icon: Camera, title: "Virtual Tours", description: "Create and manage virtual property tours." },
    { icon: DollarSign, title: "Financial Analytics", description: "Analyze and forecast your financial performance." },
    { icon: Target, title: "Marketing Automation", description: "Streamline and automate your marketing efforts." },
    { icon: FileSearch, title: "Lease Management", description: "Efficiently manage and track lease agreements." },
    { icon: Bot, title: "AI Chatbot", description: "Provide instant support with AI-powered chatbots." },
    { icon: TrendingUp, title: "Market Analysis", description: "Analyze market trends and make informed decisions." },
    { icon: BarChart, title: "Performance Reporting", description: "Generate comprehensive performance reports." },
  ];

  return (
    <section id="tools" className="tool-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Our Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="tool-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedTool(tool)}
            >
              <tool.icon className="text-blue-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedTool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-11/12 h-5/6 max-w-6xl overflow-hidden flex flex-col">
            <div className="bg-gray-100 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold gradient-text">{selectedTool.title}</h2>
              <button 
                onClick={() => setSelectedTool(null)} 
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-grow">
              {selectedTool.component ? <selectedTool.component /> : <p>Coming soon...</p>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const About = () => (
  <section id="about" className="about-section">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">About Us</h2>
      <p className="text-center mb-8">
        We are dedicated to providing innovative solutions for the real estate industry, leveraging cutting-edge technology to streamline processes and enhance decision-making.
      </p>
      <div className="flex justify-center">
        <button className="orange-gradient-button flex items-center">
          Learn More <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center">
        <p>&copy; 2024 Reality. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="/privacy-policy" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-gray-300">Terms of Service</a>
          <a href="/contact-us" className="text-gray-400 hover:text-gray-300">Contact Us</a>
        </div>
      </div>
    </div>
  </footer>
);


function App() {
  return (
    <div className="App">
      <Header />
      <AlertBanner />
      <Hero />
      <Features />
      <Tools />
      <About />
      <Footer />
    </div>
  );
}

export default App;