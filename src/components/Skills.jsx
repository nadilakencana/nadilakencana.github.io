import React from 'react';
import Section from './Section';

const SkillPill = ({ skill }) => (
  <span className="inline-block px-4 py-2 mb-2 mr-2 text-sm font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-800 to-sky-600 hover:scale-105 hover:from-blue-600 hover:to-sky-500 hover:shadow-lg hover:shadow-sky-500/25">
    {skill}
  </span>
);

const Skills = ({ skills, designTools }) => {
  return (
    <Section id="skills" title="Skills & Tools">
      <div className="text-center">
        <h3 className="mb-4 text-2xl font-bold text-white">Tech Stack</h3>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => <SkillPill key={index} skill={skill} />)}
        </div>
        <h3 className="mt-12 mb-4 text-2xl font-bold text-white">Design Tools</h3>
        <div className="flex flex-wrap justify-center">
          {designTools.map((tool, index) => <SkillPill key={index} skill={tool} />)}
        </div>
      </div>
    </Section>
  );
};

export default Skills;