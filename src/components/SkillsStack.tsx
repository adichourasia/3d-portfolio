import { useEffect, useRef, useState } from "react";
import "./styles/SkillsStack.css";

const skillsData = [
  {
    category: "Programming",
    percentage: 85,
    items: ["C", "C++", "Python", "Java (basics)"],
    color: "#ffc703", // Cyan
  },
  {
    category: "Web Development",
    percentage: 80,
    items: ["HTML", "CSS", "Django"],
    color: "#38bdf8", // Sky blue
  },
  {
    category: "Database Management",
    percentage: 75,
    items: ["MySQL"],
    color: "#818cf8", // Indigo
  },
  {
    category: "Tools & Platforms",
    percentage: 90,
    items: ["VS Code", "Git/GitHub", "GitHub Copilot", "Figma", "Canva"],
    color: "#fb7185", // Rose
  },
  {
    category: "Microsoft Office Suite",
    percentage: 95,
    items: ["MS Excel", "MS Word", "MS PowerPoint"],
    color: "#34d399", // Emerald
  },
];

const CircularProgress = ({ percentage, color, active }: { percentage: number; color: string; active: boolean }) => {
  const radius = 60;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - ((active ? percentage : 0) / 100) * circumference;

  return (
    <div className="skills-circle-container">
      <svg height={radius * 2} width={radius * 2} className="skills-svg">
        <circle
          stroke="rgba(255, 255, 255, 0.05)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset, transition: "stroke-dashoffset 1.5s cubic-bezier(0.25, 1, 0.5, 1)" }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="skills-percentage-text" style={{ color }}>
        {percentage}%
      </div>
    </div>
  );
};

const SkillsStack = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="skills-section section-container" id="techstack" ref={sectionRef}>
      <h2>
        My <span>Tech Stack</span>
      </h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card" data-cursor="disable">
            <CircularProgress percentage={skill.percentage} color={skill.color} active={inView} />
            <div className="skill-info">
              <h3>{skill.category}</h3>
              <div className="skill-items">
                {skill.items.map((item, i) => (
                  <span key={i} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsStack;
