import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Enthusiastic <span className="highlight-web">Web developer</span> and <span className="highlight-cse">CSE student</span> with a passion for creating
          responsive and interactive websites. Interested in <span className="highlight-fullstack">Full-Stack development</span> and continuously improving technical skills through
          projects and hands-on learning.
        </p>
        <div className="about-stats">
          <div className="stat-card" data-cursor="disable">
            <h4>6+</h4>
            <p>Projects Built</p>
          </div>
          <div className="stat-card" data-cursor="disable">
            <h4>7+</h4>
            <p>Hackathons</p>
          </div>
          <div className="stat-card" data-cursor="disable">
            <h4>10+</h4>
            <p>Skills Learned</p>
          </div>
          <div className="stat-card" data-cursor="disable">
            <h4>8+</h4>
            <p>Certifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

