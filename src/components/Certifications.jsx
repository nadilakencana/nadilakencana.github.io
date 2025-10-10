import React, { useState, useEffect } from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };
    
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);
  
  const totalSlides = Math.ceil(portfolioData.certifications.length / itemsPerSlide);

  useEffect(() => {
    if (totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <Section id="certifications" title="Certifications">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex-shrink-0 w-full">
              <div className={`grid gap-6 ${
                itemsPerSlide === 1 ? 'grid-cols-1' :
                itemsPerSlide === 2 ? 'grid-cols-1 md:grid-cols-2' :
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {portfolioData.certifications
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((cert, index) => (
                    <div key={slideIndex * itemsPerSlide + index} className="p-6 transition-colors border rounded-lg bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500">
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
            </div>
          ))}
        </div>
        
        {totalSlides > 1 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 text-white transition-all transform -translate-y-1/2 rounded-full lg:w-10 lg:h-10 top-1/2 md:p-2 bg-slate-700/80 hover:bg-blue-600 hover:scale-110"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 text-white transition-all transform -translate-y-1/2 rounded-full top-1/2 lg:w-10 lg:h-10 md:p-2 bg-slate-700/80 hover:bg-blue-600 hover:scale-110"
            >
              →
            </button>
            <div className="flex items-center justify-center mt-8">
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-blue-500 scale-125' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

export default Certifications;