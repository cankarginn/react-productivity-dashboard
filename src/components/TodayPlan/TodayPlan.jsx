import {
  Check,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import "./TodayPlan.css";

function TodayPlan({ tasks, setTasks }) {
  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const handleSort = () => {
    setTasks((currentTasks) =>
      [...currentTasks].sort(
        (a, b) =>
          Number(b.completed) - Number(a.completed)
      )
    );
  };

  return (
    <section className="today-plan">
      <div className="today-plan-header">
        <div className="today-plan-title">
          <h2>Today's Plan</h2>

          <span>{tasks.length} tasks</span>
        </div>

        <button
          className="sort-button"
          onClick={handleSort}
        >
          Sort by Priority
          <ChevronDown size={13} />
        </button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div
            className={`task-row ${
              task.completed ? "task-completed" : ""
            }`}
            key={task.id}
          >
            <button
              className={`task-checkbox ${
                task.completed ? "completed" : ""
              }`}
              onClick={() => toggleTask(task.id)}
            >
              {task.completed && (
                <Check
                  size={11}
                  strokeWidth={3}
                />
              )}
            </button>

            <div className="task-main">
              <span className="task-title">
                {task.title}
              </span>
            </div>

            <span
              className={`task-category ${task.category
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {task.category}
            </span>

            <span className="task-time">
              {task.time}
            </span>

            <div className="task-avatar">
              C
            </div>
          </div>
        ))}
      </div>

      <div className="today-plan-footer">
        <span className="completed-count">
          {completedTasks} / {tasks.length} completed
        </span>

        <button className="view-tasks">
          View all tasks
          <ArrowRight size={13} />
        </button>
      </div>
    </section>
  );
}

export default TodayPlan;