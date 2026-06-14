import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";

const roles = [
  "Web Developer",
  "Full Stack Learner",
  "AI Enthusiast",
  "Programming Learner",
  "CSE Student",
];

const Landing = ({ children }: PropsWithChildren) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400); // match fade transition duration
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/Aditya%20Chourasia%20Resume_20260608_230455_0000.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Aditya Chourasia Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Blob download failed, falling back to open:", err);
      window.open("/Aditya%20Chourasia%20Resume_20260608_230455_0000.pdf", "_blank");
    }
  };

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ADITYA
              <br />
              <span>CHOURASIA</span>
            </h1>
            <a
              className="download-resume-btn"
              href="/Aditya%20Chourasia%20Resume_20260608_230455_0000.pdf"
              onClick={handleDownloadResume}
              data-cursor="disable"
            >
              Download Resume
            </a>
          </div>
          <div className="landing-info">
            <h3>I am a</h3>
            <h2 className={`landing-role-text ${fade ? "fade-in" : "fade-out"}`}>
              {roles[currentRoleIndex]}
            </h2>
            <div className="cgpa-badge" data-cursor="disable">
              CGPA: 9.02/10
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

