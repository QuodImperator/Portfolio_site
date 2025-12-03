import React, { useState } from 'react';
import projects from '../data/projects.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const currentProject = projects[currentIndex];

  if (projects.length === 0) {
    return <p className="text-white">No projects to display.</p>;
  }

  return (
    <div className="ProjectCarousel font-iosevka w-full max-w-2xl p-4">
      <h2 className="text-2xl font-semibold mb-4 text-white">Featured Projects</h2>
      
      <div className="relative flex items-center justify-between">
        
        {/* Left Arrow */}
        <button 
          onClick={prevProject} 
          className="p-2 bg-blue-500 rounded-full hover:bg-blue-400 transition-colors z-10"
          aria-label="Previous Project"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 text-white" />
        </button>

        {/* Project Card */}
        <div className="flex flex-col md:flex-row md:space-x-4 w-full mx-2">
          
          {/* Project Image */}
          <div className="w-full md:w-1/2 shrink-0 mb-4 md:mb-0">
            <img 
              src={currentProject.image} 
              alt={currentProject.title} 
              className="w-full h-auto object-cover rounded-lg aspect-video" 
            />
          </div>

          {/* Project Details */}
          <div className="w-full md:w-1/2 text-left flex flex-col">
            
            {/* Top Content Wrapper */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">{currentProject.title}</h3>
              <p className="text-white text-sm">{currentProject.description}</p>
              
              <div className="flex flex-wrap gap-1 pt-1">
                {currentProject.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-0.5 text-xs rounded-full bg-blue-500 hover:bg-blue-400 text-white font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Link */}
            <div className="mt-auto pt-3">
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition duration-300 font-semibold text-sm"
              >
                <span>View on GitHub</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextProject} 
          className="p-2 bg-blue-500 rounded-full hover:bg-blue-400 transition-colors z-10"
          aria-label="Next Project"
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-400'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;