'use client';
import { GraduationCap, Briefcase, Trophy, Lightbulb, Code } from 'lucide-react';

const roadmapSteps = [
  {
    title: 'Early Start',
    description: 'Began learning coding in 2018 during Senior 1.',
    icon: Lightbulb,
    color: 'bg-blue-500',
  },
  {
    title: 'Advanced Study',
    description: 'Studied MPC at GS Mater Dei, enhancing technical skills.',
    icon: GraduationCap,
    color: 'bg-green-500',
  },
  {
    title: 'Project Work',
    description: 'Gained experience by building web apps and systems.',
    icon: Code,
    color: 'bg-yellow-500',
  },
  {
    title: 'First Job',
    description: 'Plan to join a company and apply development skills.',
    icon: Briefcase,
    color: 'bg-red-500',
  },
  {
    title: 'Expert Level',
    description: 'Master web development and lead innovative projects.',
    icon: Trophy,
    color: 'bg-purple-500',
  },
];


  

export default function CareerRoadmap() {
  return (
    <div className="container mx-auto px-4 py-8" id='About'>
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">My Journey.</h1>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2 absolute border-opacity-20 border-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>
        {roadmapSteps.map((step, index) => (
          <div
            className={`mb-8 flex flex-col sm:flex-row justify-between items-center w-full ${{
              even: 'sm:flex-row-reverse',
              odd: 'sm:flex-row',
            }[index % 2 === 0 ? 'even' : 'odd']}`}
            key={index}
          >
            <div className="order-1 w-full sm:w-5/12"></div>
            <div
              className={`z-20 flex items-center justify-center order-1 ${step.color} shadow-xl w-8 h-8 rounded-full`}
            >
              {step.icon && <step.icon size={20} className="text-white" />}
            </div>
            <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">{step.title}</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
