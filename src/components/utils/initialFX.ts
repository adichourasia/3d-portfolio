import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { lenis } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (lenis) {
    lenis.start();
  }
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#000000",
    duration: 0.5,
    delay: 1,
  });

  const isMobile = window.innerWidth <= 1024;
  if (isMobile) {
    gsap.fromTo(
      [".landing-info h3", ".landing-intro h2", ".landing-intro h1", ".landing-role-text"],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.3,
      }
    );
  } else {
    var landingText = new SplitText(
      [".landing-info h3", ".landing-intro h2", ".landing-intro h1", ".landing-role-text"],
      {
        type: "chars,lines",
        linesClass: "split-line",
      }
    );
    gsap.fromTo(
      landingText.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.02,
        delay: 0.3,
      }
    );
  }

  gsap.fromTo(
    ".cgpa-badge",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1.5,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}

