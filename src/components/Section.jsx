import React from 'react';

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-12">{title}</h2>
      {children}
    </div>
  </section>
);

export default Section;