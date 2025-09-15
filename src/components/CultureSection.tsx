import React from 'react';
import { EyeIcon, TrendingUpIcon, TargetIcon, BrainIcon, RocketIcon, UsersIcon } from 'lucide-react';
interface CultureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}
const CultureCard: React.FC<CultureCardProps> = ({
  icon,
  title,
  description,
  color
}) => {
  return <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]">
      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${color} text-white mb-5`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};
export const CultureSection = () => {
  return <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-4">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Data-Driven Growth,{' '}
            <span className="text-red-800">Human-Centered Approach</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At True Vision, we combine cutting-edge analytics with deep industry
            expertise to unlock sustainable growth for our team members and
            clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CultureCard icon={<EyeIcon className="w-6 h-6" />} title="Visionary Thinking" description="We see opportunities others miss. Our approach identifies hidden growth patterns and creates clear pathways to success." color="bg-gradient-to-br from-red-700 to-red-900" />
          <CultureCard icon={<BrainIcon className="w-6 h-6" />} title="Data Intelligence" description="We transform complex data into actionable insights. Our AI-powered analytics drive smarter decisions and measurable outcomes." color="bg-gradient-to-br from-red-600 to-red-800" />
          <CultureCard icon={<TrendingUpIcon className="w-6 h-6" />} title="Scalable Growth" description="We design systems that scale. Your career and business advancement is supported by proven, repeatable growth frameworks." color="bg-gradient-to-br from-gray-700 to-gray-900" />
          <CultureCard icon={<RocketIcon className="w-6 h-6" />} title="Innovation Culture" description="We embrace emerging technologies and methodologies. Our team stays ahead of industry trends to deliver cutting-edge solutions." color="bg-gradient-to-br from-red-700 to-red-900" />
          <CultureCard icon={<UsersIcon className="w-6 h-6" />} title="Collaborative Teams" description="We believe in the power of diverse perspectives. Our cross-functional teams combine expertise to solve complex challenges." color="bg-gradient-to-br from-gray-700 to-gray-900" />
          <CultureCard icon={<TargetIcon className="w-6 h-6" />} title="Results Focused" description="We measure success through outcomes. Every strategy and initiative is designed with clear KPIs and performance metrics." color="bg-gradient-to-br from-red-600 to-red-800" />
        </div>
      </div>
    </section>;
};