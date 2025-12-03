import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import resume from "../assets/Darko-Stefanoski-CV-UNFINISHED.pdf";
import ProjectCarousel from "../components/projectCarousel.jsx";

function Home() {
  return (
    <main className="Description font-iosevka flex flex-col justify-start items-center min-h-screen text-center py-8 px-4 space-y-4 text-white bg-custom-gradient">

      <h1 className="Alias text-3xl font-bold">Ave Imperator</h1>

      {/* Basic Info */}
      <div className="Info text-base leading-relaxed">
        <p>Darko Stefanoski • Skopje, Macedonia • Software Developer</p>
        <p className="mt-1">
          CS Student @{" "}
          <a
            href="https://www.finki.ukim.mk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            UKIM-FCSE
          </a>
        </p>
      </div>

      {/* Contact Links */}
      <div className="Contact flex flex-wrap justify-center gap-6 text-base">
        <a
          href="mailto:darkostefanoski951@gmail.com"
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
          <span>darkostefanoski951@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/darko-stefanoski-48b56a214/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/QuodImperator"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
          <span>GitHub</span>
        </a>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition duration-300"
        >
          <FontAwesomeIcon icon={faFilePdf} className="w-4 h-4" />
          <span>Resume</span>
        </a>
      </div>

      {/* About Me */}
      <div className="AboutMe max-w-2xl text-center text-sm leading-relaxed px-2">
        <h2 className="text-lg font-semibold mb-2">About Me</h2>
        <p>
          I like tech (sometimes) and building quality, performant software (hopefully).
          My experience lies in building full-stack applications (JS, React, HTML+CSS, Java, Spring Boot, GraphQL, SQL etc.), small games (C# and Unity), and my desire lies in employment.
        </p>
        <br className="hidden md:block" />
        <p className="mt-2 md:mt-0">
          Other less relevant information: I like reading (history, philosophy, classics), bodybuilding, grand strategy video games and self-inflicted nutritional experimentation.
        </p>
      </div>

      {/* Projects */}
      <div className="Projects w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">Featured Projects</h2>
        <ProjectCarousel />
      </div>
    </main>
  );
}

export default Home;