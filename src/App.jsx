import { useState } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import FocusCard from "./components/FocusCard/FocusCard";
import QuickActions from "./components/QuickActions/QuickActions";
import ActiveProjects from "./components/ActiveProjects/ActiveProjects";
import TodayPlan from "./components/TodayPlan/TodayPlan";
import TodaySchedule from "./components/TodaySchedule/TodaySchedule";
import QuoteCard from "./components/QuoteCard/QuoteCard";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design landing page hero section",
      category: "Design",
      time: "09:00 AM",
      completed: true,
    },
    {
      id: 2,
      title: "Prepare project presentation",
      category: "Work",
      time: "11:00 AM",
      completed: false,
    },
    {
      id: 3,
      title: "Client meeting",
      category: "Meeting",
      time: "01:00 PM",
      completed: false,
    },
    {
      id: 4,
      title: "Fix navigation bug",
      category: "Development",
      time: "03:30 PM",
      completed: false,
    },
    {
      id: 5,
      title: "Write blog post",
      category: "Content",
      time: "05:00 PM",
      completed: false,
    },
  ]);

  const addTask = (newTask) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: Date.now(),
        title: newTask.title,
        category: newTask.category,
        time: newTask.time,
        completed: false,
      },
    ]);
  };

  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <div className="dashboard-top">
          <WelcomeSection />
          <FocusCard />
        </div>

        <QuickActions onAddTask={addTask} />

        <ActiveProjects />

        <div className="dashboard-bottom">
          <div className="dashboard-left">
            <TodayPlan
              tasks={tasks}
              setTasks={setTasks}
            />

            <QuoteCard />
          </div>

          <TodaySchedule />
        </div>
      </main>
    </div>
  );
}

export default App;