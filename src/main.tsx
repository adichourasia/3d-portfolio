import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Suppress unhandled promise rejections and errors from third-party browser extensions
const isExtensionError = (message: string | undefined | null) => {
  if (!message) return false;
  return (
    message.includes("A listener indicated an asynchronous response") ||
    message.includes("message channel closed before a response")
  );
};

window.addEventListener("unhandledrejection", (event) => {
  const reason = event.reason;
  const msg = reason?.message || (typeof reason === "string" ? reason : "");
  if (isExtensionError(msg)) {
    event.preventDefault();
    event.stopPropagation();
  }
});

window.addEventListener("error", (event) => {
  const msg = event.message || event.error?.message;
  if (isExtensionError(msg)) {
    event.preventDefault();
    event.stopPropagation();
  }
});

// Synthesize a mechanical click sound using Web Audio API
const playClickSound = () => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    // A quick frequency sweep makes a crisp, mechanical select click
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.06, audioCtx.currentTime); // Subtle volume
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
  } catch (e) {
    console.warn("AudioContext failed to initialize:", e);
  }
};

// Play sound on click of any interactive elements
window.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (
    target.closest("button") ||
    target.closest("a") ||
    target.closest('[role="button"]') ||
    target.closest(".carousel-dot") ||
    target.closest(".connect-card") ||
    target.closest(".skill-card") ||
    target.closest(".terminal-trigger") ||
    target.closest(".chatbot-trigger") ||
    target.closest(".suggestion-btn")
  ) {
    playClickSound();
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
