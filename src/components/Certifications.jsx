import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <Section id="certifications" title="TEST - CERTIFICATIONS UPDATED">
      <div className="text-red-500 text-2xl font-bold">
        HELLO WORLD - FILE HAS BEEN UPDATED!
      </div>
      <div className="space-y-4 mt-8">
        {portfolioData.certifications.map((cert, index) => (
          <div key={index} className="p-4 bg-red-500 rounded border text-white">
            <h3 className="font-bold">#{index + 1} - {cert.name}</h3>
            <p>{cert.issuer} - {cert.date}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;