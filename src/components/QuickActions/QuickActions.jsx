import {
  CheckCircle2,
  Folder,
  CalendarDays,
  Bell,
  FileText,
  Plus,
  X,
} from "lucide-react";

import { useState } from "react";

import "./QuickActions.css";

function QuickActions({ onAddTask }) {
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Work");
  const [time, setTime] = useState("09:00 AM");

  const actions = [
    {
      title: "Add Task",
      description: "Quickly capture\na new task",
      icon: CheckCircle2,
      color: "purple",
    },
    {
      title: "New Project",
      description: "Start working\non something",
      icon: Folder,
      color: "blue",
    },
    {
      title: "Schedule",
      description: "Plan your\ncalendar",
      icon: CalendarDays,
      color: "green",
    },
    {
      title: "Remind Me",
      description: "Set a smart\nreminder",
      icon: Bell,
      color: "orange",
    },
    {
      title: "Write Note",
      description: "Write down\nyour thoughts",
      icon: FileText,
      color: "pink",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    onAddTask({
      title: title.trim(),
      category,
      time,
    });

    setTitle("");
    setCategory("Work");
    setTime("09:00 AM");
    setShowModal(false);
  };

  return (
    <>
      <section className="quick-actions">
        <h2>What do you want to do?</h2>

        <div className="quick-actions-grid">
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <button
                className={`action-card ${action.color}`}
                key={action.title}
                onClick={() => {
                  if (action.title === "Add Task") {
                    setShowModal(true);
                  }
                }}
              >
                <div className="action-icon">
                  <Icon
                    size={21}
                    strokeWidth={2}
                  />
                </div>

                <h3>{action.title}</h3>

                <p>
                  {action.description
                    .split("\n")
                    .map((line, index) => (
                      <span key={index}>
                        {line}
                        {index === 0 && <br />}
                      </span>
                    ))}
                </p>
              </button>
            );
          })}

          <button className="action-card custom">
            <div className="action-icon">
              <Plus size={21} />
            </div>

            <h3>Customize</h3>
          </button>
        </div>
      </section>

      {showModal && (
        <div
          className="task-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="task-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="task-modal-header">
              <div>
                <h2>Add Task</h2>
                <p>Create a new task for today.</p>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <label>
                Task name

                <input
                  type="text"
                  placeholder="e.g. Finish dashboard"
                  value={title}
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  autoFocus
                />
              </label>

              <label>
                Category

                <select
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                >
                  <option>Design</option>
                  <option>Work</option>
                  <option>Meeting</option>
                  <option>Development</option>
                  <option>Content</option>
                </select>
              </label>

              <label>
                Time

                <input
                  type="time"
                  value={convertTo24Hour(time)}
                  onChange={(event) =>
                    setTime(
                      convertTo12Hour(
                        event.target.value
                      )
                    )
                  }
                />
              </label>

              <button
                className="add-task-submit"
                type="submit"
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function convertTo24Hour(time) {
  const [clock, modifier] = time.split(" ");

  let [hours, minutes] = clock.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = String(Number(hours) + 12);
  }

  return `${hours}:${minutes}`;
}

function convertTo12Hour(time) {
  if (!time) {
    return "09:00 AM";
  }

  let [hours, minutes] = time.split(":");

  const numericHours = Number(hours);

  const modifier =
    numericHours >= 12 ? "PM" : "AM";

  hours = numericHours % 12 || 12;

  return `${String(hours).padStart(2, "0")}:${minutes} ${modifier}`;
}

export default QuickActions;