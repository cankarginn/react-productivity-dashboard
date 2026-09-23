import {
  ArrowRight,
  Plus,
} from "lucide-react";

import "./ActiveProjects.css";

function ActiveProjects() {
  const projects = [
    {
      name: "Mobile App Redesign",
      progress: 75,
      image: "mobile",
      avatars: ["C", "A", "M"],
      extra: 3,
    },
    {
      name: "E-commerce Platform",
      progress: 46,
      image: "ecommerce",
      avatars: ["R", "D"],
      extra: 2,
    },
    {
      name: "Marketing Campaign",
      progress: 60,
      image: "marketing",
      avatars: ["S", "C"],
      extra: 3,
    },
    {
      name: "Brand Identity",
      progress: 30,
      image: "brand",
      avatars: ["M", "A"],
      extra: 1,
    },
  ];

  return (
    <section className="active-projects">
      <div className="section-header">
        <h2>Active Projects</h2>

        <button className="view-projects">
          View all projects
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          return (
            <article className="project-card" key={project.name}>
              <div className={`project-image ${project.image}`}>
                <div className="project-shape project-shape-one"></div>
                <div className="project-shape project-shape-two"></div>

                {project.image === "mobile" && (
                  <div className="phone">
                    <div className="phone-screen"></div>
                  </div>
                )}

                {project.image === "ecommerce" && (
                  <div className="shopping-bag">
                    <div className="bag-handle"></div>
                  </div>
                )}

                {project.image === "marketing" && (
                  <div className="megaphone">
                    <div className="megaphone-body"></div>
                  </div>
                )}

                {project.image === "brand" && (
                  <div className="brand-shape"></div>
                )}
              </div>

              <div className="project-info">
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <span>{project.progress}%</span>
                </div>

                <div className="project-progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>

                <div className="project-footer">
                  <div className="project-avatars">
                    {project.avatars.map((avatar, index) => (
                      <span key={index}>{avatar}</span>
                    ))}

                    <small>+{project.extra}</small>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        <button className="new-project-card">
          <div className="new-project-icon">
            <Plus size={24} strokeWidth={1.7} />
          </div>

          <p>New Project</p>
        </button>
      </div>
    </section>
  );
}

export default ActiveProjects;