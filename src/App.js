import React, { useState, useEffect } from 'react';
import { BarChart, MessageCircle, Building, Zap, Shield, Globe, X, ArrowRight, Cpu, Users, FileText, Instagram, MapPin, Camera, DollarSign, Target, FileSearch, Bot, TrendingUp } from 'lucide-react';
import logo from './Images/Reality_Logo-Transparent.png';
import './App.css';
import PropertyManagementTools from './Components/PropertyManagementTool';
import ConversationAnalysisTool from './Components/ConversationAnalysisTool';
import PerformanceMaximizationTool from './Components/PerformanceMaximizationTool';

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
  <div 
    className="feature-card"
    onClick={onClick}
  >
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
    <div className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {children}
    </div>
  );
};

const FeatureDetails = ({ feature, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const featureComponents = {
    propertymanagement: (
      <AnimatedTool>
        <PropertyManagementTools />
      </AnimatedTool>
    ),
    conversiontool: (
      <AnimatedTool>
        <ConversationAnalysisTool />
      </AnimatedTool>
    ),
    performance: (
      <AnimatedTool>
        <PerformanceMaximizationTool />
      </AnimatedTool>
    )
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white rounded-lg w-11/12 h-5/6 max-w-6xl overflow-hidden flex flex-col transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="bg-gray-100 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold gradient-text">{feature.title}</h2>
          <button 
            onClick={handleClose} 
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-grow">
          <p className="mb-6 text-lg text-gray-600">{feature.description}</p>
          {featureComponents[feature.id]}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const features = [
    { id: 'propertymanagement', icon: BarChart, title: 'Property Management Tool', description: 'Streamline your real estate operations with our comprehensive Property Management Tool. This powerful software solution is designed to simplify the complex tasks of property management, helping landlords, property managers, and real estate professionals save time, reduce stress, and maximize returns.' },
    { id: 'conversiontool', icon: MessageCircle, title: 'Conversion Analysis Tool', description: 'Unlock the full potential of your digital marketing efforts with our powerful Conversion Analysis Tool. This cutting-edge solution empowers businesses of all sizes to transform raw data into actionable insights, helping you optimize your conversion rates and maximize your return on investment.' },
    { id: 'performance', icon: Zap, title: 'Performance Analysis Tool', description: 'Elevate your business and individual productivity with our state-of-the-art Performance Analysis Tool. This comprehensive solution empowers organizations and professionals to measure, analyze, and optimize performance across various domains, driving continuous improvement and achieving peak efficiency.' },
    { id: 'infrastructure', icon: Building, title: 'Infrastructure', description: 'Manage your IT infrastructure' },
    { id: 'security', icon: Shield, title: 'Security', description: 'Protect your assets' },
    { id: 'global', icon: Globe, title: 'Global Reach', description: 'Expand your global presence' },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              onClick={() => setSelectedFeature(feature)}
            />
          ))}
        </div>
      </div>
      {selectedFeature && (
        <FeatureDetails
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </section>
  );
};

const Tools = () => {
  const tools = [
    { icon: Cpu, title: "Predictive Analytics", description: "AI-powered market trend analysis and property value prediction." },
    { icon: Users, title: "Smart CRM", description: "AI-driven customer relationship management for personalized interactions." },
    { icon: FileText, title: "Content Generation", description: "AI tools for creating customizable real estate content and listings." },
    { icon: Instagram, title: "Social Media Management", description: "Integrated tools for scheduling posts and analyzing social media performance." },
    { icon: MapPin, title: "Location Intelligence", description: "Insights into foot traffic patterns and location-based data for smarter decisions." },
    { icon: Camera, title: "Virtual Tour Creation", description: "AI-powered tools for creating immersive virtual property tours." },
    { icon: DollarSign, title: "Market Analysis", description: "AI algorithms for accurate pricing recommendations based on market trends." },
    { icon: Target, title: "Lead Scoring", description: "AI-driven systems to qualify and prioritize promising leads." },
    { icon: FileSearch, title: "Document Analysis", description: "AI tools for quick analysis and information extraction from real estate documents." },
    { icon: Bot, title: "Chatbots", description: "AI-powered virtual assistants to handle inquiries and schedule appointments." },
    { icon: TrendingUp, title: "Performance Analytics", description: "AI-driven insights into agent and property performance metrics." },
    { icon: BarChart, title: "Data Visualization", description: "Interactive dashboards for visualizing complex real estate data." }
  ];

  return (
    <section id="tools" className="tool-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Our Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <tool.icon className="text-blue-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">About Us</h2>
      <p className="text-center text-lg mb-8">
        We are dedicated to providing innovative solutions for businesses of all sizes.
      </p>
      <div className="flex justify-center">
        <button className="orange-gradient-button">Learn More <ArrowRight className="inline ml-2" size={20} /></button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; 2023 Reality. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="App">
      <div id="particles-js"></div>
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