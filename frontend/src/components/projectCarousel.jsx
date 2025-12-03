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
        <div className="font-iosevka w-full max-w-2xl border-blue-400/50 rounded-3xl bg-black/30 shadow-lg border-4 overflow-hidden">

            <div className="relative">

                {/* Project Card */}
                <div className="relative w-full overflow-hidden aspect-video">

                    {/* Background Image */}
                    <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent"></div>

                    {/* Project Details Overlay */}
                    <div className="relative h-full flex flex-col justify-end p-6 text-left text-white">

                        <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{currentProject.title}</h3>
                        <p className="text-sm mb-3 drop-shadow-md">{currentProject.description}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                            {currentProject.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 text-xs rounded-full bg-blue-500/80 backdrop-blur-sm hover:bg-blue-400/80 text-white font-medium transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Project Link */}
                        <a
                            href={currentProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition duration-300 font-semibold text-sm"
                        >
                            <span>View on GitHub</span>
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                {/* Left Arrow */}
                <button
                    onClick={prevProject}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-blue-400/50 transition-colors z-20"
                    aria-label="Previous Project"
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5 text-white drop-shadow-lg" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextProject}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-blue-400/50 transition-colors z-20"
                    aria-label="Next Project"
                >
                    <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 text-white drop-shadow-lg" />
                </button>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors drop-shadow-lg ${index === currentIndex ? 'bg-blue-400' : 'bg-white/70 hover:bg-blue-400'
                            }`}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectCarousel;