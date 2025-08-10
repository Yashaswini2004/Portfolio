import React from "react";
export default function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <a className="nav-link" href="https://www.linkedin.com/in/yashaswini-c-95725b377">
          @yashaswinic
        </a>
        <ul className="nav-select">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a  href="/Yashaswini C.pdf"  target="_blank"  rel="noopener noreferrer">Resume</a></li>
          <li><a href="https://github.com/Yashaswini2004" target="_blank"  rel="noopener noreferrer">Github</a></li>
          <li><a href="https://www.linkedin.com/in/yashaswini-c-95725b377" target="_blank"  rel="noopener noreferrer">Linkedin</a></li>
        </ul>
      </nav>
      <hr className="double-hr" />
    </>
  );
}
