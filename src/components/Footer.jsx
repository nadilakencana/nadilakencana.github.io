import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer className="border-t bg-gradient-to-r from-blue-900 to-slate-900 border-sky-700/50">
      <div className="px-4 py-6 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 text-slate-500">
        <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;