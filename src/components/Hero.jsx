import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import cvUrl from '../assets/Nadila Pilar Kencana CV.pdf';

const TYPING_LINES = ['Next-Level Web', 'Developer'];

const Hero = ({ name, title, summary, imageUrl, contact }) => {
  const [typedLines, setTypedLines] = useState(['', '']);

  useEffect(() => {
    const fullText = TYPING_LINES.join('\n');
    let i = 0;
    const timer = setInterval(() => {
      i++;
      const typed = fullText.slice(0, i).split('\n');
      setTypedLines([typed[0] || '', typed[1] || '']);
      if (i >= fullText.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
   <section 
      id="about" title="About Me"
      className="relative flex items-center min-h-screen px-6 py-16 overflow-hidden bg-[#100420] text-white"
      style={{
        // Gradient yang lebih sesuai dengan desain
        background: 'radial-gradient(circle at right top, rgb(12 55 163 / 40%), transparent 40%), radial-gradient(circle at left bottom, rgb(20 83 224 / 40%), transparent 50%), rgb(2, 6, 23)'
      }}
    >
      {/* Teks "HI" di Latar Belakang */}
      <div className="absolute inset-0 flex items-center justify-center -z-0">
        <h1 className="text-[150px] sm:text-[250px] md:text-[450px] font-black text-white/5 select-none">
          HI
        </h1>
      </div>

      <div className="container relative z-10 flex flex-col-reverse items-center justify-between gap-12 mx-auto md:flex-row">

        {/* Kolom Kiri: Teks & Tombol */}
        <div className="flex flex-col items-center w-full max-w-xl text-center md:items-start md:w-auto md:text-left">
          <p className="mb-2 text-xl font-bold text-white">I am {name}</p>
          <h1 className="mb-4 min-h-[2.6em] text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 to-sky-200 bg-clip-text">
              {typedLines[0]}
              <br />
              {typedLines[1]}
              <span className="inline-block w-[3px] sm:w-1 h-[0.85em] -mb-1 ml-1 align-middle bg-sky-300 animate-pulse"></span>
          </h1>
          <p className="mb-8 leading-relaxed text-slate-400">
            {summary}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a 
              href={cvUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 font-semibold text-white transition-all duration-300 border-2 rounded-full border-slate-500 hover:shadow-2xl hover:shadow-sky-500/20 hover:bg-sky-800 hover:border-sky-800"
            >
              Download CV ↓
            </a>
            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 transition-colors duration-300 border-2 rounded-full border-slate-600 hover:shadow-2xl hover:shadow-sky-500/20 hover:bg-sky-800 hover:border-sky-800">
                <FaInstagram size={20} />
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 transition-colors duration-300 border-2 rounded-full border-slate-600 hover:shadow-2xl hover:shadow-sky-500/20 hover:bg-sky-800 hover:border-sky-800">
                <FaGithub size={20} />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 transition-colors duration-300 border-2 rounded-full border-slate-600 hover:shadow-2xl hover:shadow-sky-500/20 hover:bg-sky-800 hover:border-sky-800">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="flex-shrink-0">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <img 
              src={imageUrl} // Ganti dengan URL gambar Anda
              alt={name} 
              className="object-cover w-full h-full rounded-full shadow-2xl shadow-blue-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;