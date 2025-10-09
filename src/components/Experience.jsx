import React from 'react';
import Section from './Section';

const Experience = ({ experience }) => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-12">
        {experience.map((job, index) => (
          <div key={index} className="relative pl-8 border-l-2 sm:pl-12 border-blue-600/50">
            <div className="absolute w-5 h-5 rounded-full shadow-lg -left-3 top-1 bg-gradient-to-r from-blue-800 to-sky-500 shadow-sky-500/50"></div>
            <h3 className="text-xl font-bold text-white">{job.role}</h3>
            <p className="mb-1 font-semibold text-blue-400">{job.company} | {job.period}</p>
            <ul className="space-y-1 list-disc list-inside text-slate-300">
              {job.description.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;