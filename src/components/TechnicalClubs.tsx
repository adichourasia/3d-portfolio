import { useEffect, useRef, useState } from "react";
import "./styles/TechnicalClubs.css";

const clubData = [
  {
    role: "DBMS Lead",
    organization: "Piratage: The Ethical Hacking Club",
    duration: "2025 – Present",
    desc: "Leading the database management system division, organizing hacking workshops, and managing secure data design and storage practices for club members.",
    color: "#ffc703", // Cyan
  },
  {
    role: "Member",
    organization: "IIC: Institution Innovations Council",
    duration: "2025 – Present",
    desc: "Actively contributing to startup innovation drives, ideation camps, and business prototype creation aligned with national institutional standards.",
    color: "#38bdf8", // Sky blue
  },
  {
    role: "UI-UX Expert",
    organization: "Piratage: The Ethical Hacking Club",
    duration: "2024 – 2025",
    desc: "Designed interfaces, website wireframes, posters, and digital marketing materials, creating consistent aesthetics for club events.",
    color: "#a78bfa", // Purple
  },
];

const TechnicalClubs = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndices((prev) => {
              if (prev.includes(index)) return prev;
              return [...prev, index];
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="clubs-section section-container" id="clubs" ref={sectionRef}>
      <h2>
        Technical <span>Clubs</span>
      </h2>
      <div className="clubs-timeline-container">
        {/* Central timeline line */}
        <div className="clubs-line"></div>

        {clubData.map((club, index) => {
          const isActive = activeIndices.includes(index);
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`clubs-item ${isLeft ? "left-item" : "right-item"} ${
                isActive ? "fade-in-item" : ""
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`clubs-dot ${isActive ? "active-dot" : ""}`}
                style={{
                  boxShadow: isActive ? `0 0 15px 4px ${club.color}` : "none",
                  backgroundColor: club.color,
                }}
              ></div>

              {/* Card content */}
              <div className="clubs-card" data-cursor="disable">
                <div className="clubs-card-header">
                  <span className="clubs-duration" style={{ color: "var(--accentColor)" }}>
                    {club.duration}
                  </span>
                  <h3>{club.role}</h3>
                  <h4>{club.organization}</h4>
                </div>
                <p>{club.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalClubs;
