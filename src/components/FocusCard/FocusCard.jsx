import { useEffect, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

import "./FocusCard.css";

const TOTAL_TIME = 25 * 60;

function FocusCard() {
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          setIsRunning(false);
          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (timeLeft % 60)
    .toString()
    .padStart(2, "0");

  const progress =
    ((TOTAL_TIME - timeLeft) / TOTAL_TIME) * 100;

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(TOTAL_TIME);
  };

  return (
    <section className="focus-card">
      <div className="focus-header">
        <h2>Focus Zone</h2>
        <p>Deep work session</p>
      </div>

      <div className="timer-wrapper">
        <div
          className="timer-circle"
          style={{
            "--timer-progress": `${progress}%`,
          }}
        >
          <div className="timer-content">
            <strong>
              {minutes}:{seconds}
            </strong>

            <span>Time left</span>
          </div>
        </div>

        <button
          className="focus-button"
          onClick={() => setIsRunning((previous) => !previous)}
          aria-label={isRunning ? "Pause focus" : "Start focus"}
        >
          {isRunning ? (
            <Pause
              size={14}
              fill="currentColor"
            />
          ) : (
            <Play
              size={14}
              fill="currentColor"
            />
          )}
        </button>
      </div>

      <div className="focus-divider"></div>

      <div className="focus-goal">
        <div className="goal-header">
          <div>
            <h3>Today's Goal</h3>
            <p>2 / 3 completed</p>
          </div>

          <button
            className="reset-button"
            onClick={handleReset}
            aria-label="Reset timer"
            title="Reset timer"
          >
            <RotateCcw size={12} />
          </button>
        </div>

        <div className="goal-progress">
          <div className="goal-progress-fill"></div>
        </div>
      </div>
    </section>
  );
}

export default FocusCard;