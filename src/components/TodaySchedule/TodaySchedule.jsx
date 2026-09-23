import {
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import "./TodaySchedule.css";

function TodaySchedule() {
  const events = [
    {
      time: "09:00 AM",
      title: "Design Focus Time",
      duration: "09:00 AM - 10:30 AM",
      type: "Focus",
      color: "purple",
    },
    {
      time: "11:00 AM",
      title: "Team Stand-up",
      duration: "11:00 AM - 11:30 AM",
      type: "Meeting",
      color: "pink",
    },
    {
      time: "01:00 PM",
      title: "Client Meeting",
      duration: "01:00 PM - 02:00 PM",
      type: "Meeting",
      color: "pink",
    },
    {
      time: "03:30 PM",
      title: "Development Time",
      duration: "03:30 PM - 05:00 PM",
      type: "Work",
      color: "blue",
    },
    {
      time: "06:00 PM",
      title: "Gym & Fitness",
      duration: "06:00 PM - 07:00 PM",
      type: "Personal",
      color: "green",
    },
  ];

  return (
    <section className="today-schedule">
      <div className="schedule-header">
        <h2>Today's Schedule</h2>

        <button className="schedule-date">
          May 20, Tuesday
          <ChevronDown size={13} />
        </button>
      </div>

      <div className="schedule-list">
        {events.map((event) => (
          <div className="schedule-row" key={event.title}>
            <div className="schedule-time">
              {event.time}
            </div>

            <div className="schedule-line">
              <span></span>
            </div>

            <div className="schedule-event">
              <div className="event-content">
                <h3>{event.title}</h3>
                <p>{event.duration}</p>
              </div>

              <span
                className={`event-tag ${event.color}`}
              >
                {event.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="view-calendar">
        View full calendar
        <ArrowRight size={13} />
      </button>
    </section>
  );
}

export default TodaySchedule;