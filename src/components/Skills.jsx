import React from 'react';
import Section from './Section';
import { FaServer, FaCode, FaDatabase, FaCloud, FaTasks, FaPaintBrush, FaProjectDiagram } from 'react-icons/fa';

const SkillPill = ({ skill }) => (
  <span className="inline-block px-3 py-1.5 text-sm font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-800 to-sky-600 hover:scale-105 hover:from-blue-600 hover:to-sky-500 hover:shadow-lg hover:shadow-sky-500/25">
    {skill}
  </span>
);

const categoryIcons = {
  "Project & Delivery Management": <FaTasks />,
  "Backend":               <FaServer />,
  "Frontend":              <FaCode />,
  "Database & Tools":      <FaDatabase />,
  "AI & Cloud Integration":<FaCloud />,
  "Design Tools":          <FaPaintBrush />,
  "Project Tools":         <FaProjectDiagram />,
};

const Skills = ({ skills }) => {
  return (
    <Section id="skills" title="Skills & Tools">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map(({ category, items }) => (
          <div
            key={category}
            className="p-6 rounded-xl border border-blue-900/40 bg-gradient-to-br from-blue-900/20 to-slate-800/30 backdrop-blur-sm"
          >
            <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-white">
              <span>{categoryIcons[category] ?? "🔧"}</span>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <SkillPill key={i} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
