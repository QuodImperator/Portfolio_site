import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <main
      className="Description font-iosevka flex flex-col justify-start items-center h-screen text-center pt-20 px-6 space-y-6 text-white bg-custom-gradient"
    >
      <h1 className="Alias text-4xl font-bold">Ave Imperator</h1>

      {/* BASIC INFO */}
      <div className="Info text-lg leading-relaxed">
        <p>Darko Stefanoski</p>
        <p>Skopje, Macedonia</p>
        <p>Software Wrangler</p>
        <br />
        <p>
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

      {/* CONTACT SECTION */}
      <div className="Contact flex flex-col space-y-3 text-lg">
        {/* Email */}
        <a
          href="mailto:darkostefanoski951@gmail.com"
          className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
          <span>darkostefanoski951@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/darko-stefanoski-48b56a214/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
          <span>linkedin.com/in/darko-stefanoski-48b56a214</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/QuodImperator"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          <span>github.com/QuodImperator</span>
        </a>
      </div>

      {/* ABOUT ME */}
      <div className="AboutMe max-w-2xl text-center text-medium leading-relaxed">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I like tech (sometimes) and building quality, performant software (hopefully).
          My experience lies in building full-stack applications (JS, React, HTML+CSS, Java, Spring Boot, GraphQL, SQL etc.), small games (C# and Unity), and my desire lies in employment.
          <br />
          <br />
          Other less relevant information about me is that I like reading (mostly history, philosophy, classics and occasional modern fiction), bodybuilding, grand strategy video games and self inflicted nutritional experimentation inspired by Ray Peat.
        </p>
      </div>
    </main>
  );
}

export default Home;