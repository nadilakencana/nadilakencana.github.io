import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.certifications.map((cert, index) => (
          <div key={index} className="p-6 transition-colors border rounded-lg bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500">
            <div className="mb-4">
              <img 
                src={cert.img_url} 
                alt={cert.name}
                className="object-contain w-full h-32 rounded-lg"
              />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-200">{cert.name}</h3>
            <p className="mb-1 font-medium text-blue-400">{cert.issuer}</p>
            <p className="text-sm text-slate-400">{cert.date}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;