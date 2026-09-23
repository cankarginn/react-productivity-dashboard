import { ArrowRight, Sun } from "lucide-react";
import "./WelcomeSection.css";

function WelcomeSection() {
  return (
    <section className="welcome-section">
      {/* Text Content */}
      <div className="welcome-content">
        <div className="welcome-time">
          <Sun size={17} strokeWidth={2} />
          <span>09:41</span>
        </div>

        <h1>
          Good morning,
          <br />
          Can 👋
        </h1>

        <p className="welcome-text">
          Let's make today amazing. You have
          <br />
          <strong>8 tasks</strong> and <strong>3 events.</strong>
        </p>

        <button className="planning-button">
          <span>Start Planning</span>
          <ArrowRight size={17} />
        </button>
      </div>

      {/* Illustration */}
      <div className="welcome-illustration">
        <div className="sun-glow"></div>

        <div className="cloud cloud-one"></div>
        <div className="cloud cloud-two"></div>
        <div className="cloud cloud-three"></div>

        <div className="island">
          <div className="person">
            <div className="head"></div>
            <div className="body"></div>
            <div className="laptop"></div>

            <div className="leg leg-one"></div>
            <div className="leg leg-two"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;