import React from 'react';
import { Cpu, Users, FileText, Instagram, MapPin, Camera, DollarSign, Target, FileSearch, Bot, TrendingUp, BarChart, MessageCircle, Zap, PieChart, Briefcase, Globe, Clock, Building } from 'lucide-react';

const ToolCard = ({ icon: Icon, title, description }) => (
  <div className="tool-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <Icon className="text-blue-500 w-12 h-12 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const ToolsSection = () => {
  const tools = [
    {
      icon: Cpu,
      title: "Predictive Analytics",
      description: "AI-powered market trend analysis and property value prediction."
    },
    {
      icon: Users,
      title: "Smart CRM",
      description: "AI-driven customer relationship management for personalized interactions."
    },
    {
      icon: FileText,
      title: "Content Generation",
      description: "AI tools for creating customizable real estate content and listings."
    },
    {
      icon: Instagram,
      title: "Social Media Management",
      description: "Integrated tools for scheduling posts and analyzing social media performance."
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description: "Insights into foot traffic patterns and location-based data for smarter decisions."
    },
    {
      icon: Camera,
      title: "Virtual Tour Creation",
      description: "AI-powered tools for creating immersive virtual property tours."
    },
    {
      icon: DollarSign,
      title: "Market Analysis",
      description: "AI algorithms for accurate pricing recommendations based on market trends."
    },
    {
      icon: Target,
      title: "Lead Scoring",
      description: "AI-driven systems to qualify and prioritize promising leads."
    },
    {
      icon: FileSearch,
      title: "Document Analysis",
      description: "AI tools for quick analysis and information extraction from real estate documents."
    },
    {
      icon: Bot,
      title: "Chatbots",
      description: "AI-powered virtual assistants to handle inquiries and schedule appointments."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Tools to track and analyze agent performance and transaction data."
    },
    {
      icon: BarChart,
      title: "Property Management",
      description: "Streamline property management tasks with our intuitive tools."
    },
    {
      icon: MessageCircle,
      title: "Conversation Analysis",
      description: "Gain insights from client conversations to improve communication."
    },
    {
      icon: Zap,
      title: "Performance Maximization",
      description: "Optimize your real estate performance with data-driven strategies."
    },
    {
      icon: PieChart,
      title: "Market Opportunity Identification",
      description: "AI analysis to identify potential leads and market opportunities."
    },
    {
      icon: Briefcase,
      title: "Automated Follow-ups",
      description: "Automate and personalize client communication based on behavior."
    },
    {
      icon: Globe,
      title: "Online Presence Management",
      description: "Maintain a consistent and professional online presence across platforms."
    },
    {
      icon: Clock,
      title: "Time-Saving Automation",
      description: "Automate routine tasks to focus on high-value activities."
    },
    {
      icon: Building,
      title: "Commercial Real Estate Analysis",
      description: "Specialized tools for commercial and retail property investments."
    }
  ];

  return (
    <section id="tools" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our AI-Powered Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} icon={tool.icon} title={tool.title} description={tool.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;