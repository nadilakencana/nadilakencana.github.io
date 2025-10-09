import React from 'react';
import Section from './Section';

const Certifications = ({ certifications }) => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-8 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <div key={index} className="p-6 transition-all duration-300 border rounded-lg shadow-lg bg-gradient-to-br from-blue-800/40 to-slate-800/60 border-sky-500/20 hover:border-blue-400/40">
            <h3 className="text-lg font-bold text-white">{cert.name}</h3>
            <p className="text-blue-400">{cert.issuer}</p>
            <p className="mt-1 text-sm text-slate-500">{cert.date}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;