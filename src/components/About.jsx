import React from 'react';
import Section from './Section';

const About = ({ summary, education }) => {
  return (
    <Section id="about" title="About Me">
      <div className="p-8 text-center border rounded-lg bg-gradient-to-r from-blue-800/30 to-sky-800/20 backdrop-blur-sm border-blue-500/20">
        <p className="text-lg leading-relaxed">{summary}</p>
        <p className="mt-4 text-lg">
          <strong>Education:</strong> {education.major} at {education.institution} ({education.period})
        </p>
      </div>
    </Section>
  );
};

export default About;