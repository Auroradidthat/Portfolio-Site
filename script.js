const projects = [
  {
    title: "Grocery List Web App",
    status: "In Progress",
    description: "The Grocery List Web App is a mobile-friendly app where users build and manage a personal list of food items with quantities, and the list is saved so a user can return on any device. I built the interface with plain HTML/CSS/JavaScript/SQL, and connected it on Cloudflare which stores each user's data in a database and keeps it private behind a secure login. A public demo version with sample data has been deployed, so anyone can try the app without signing in.",
    technologies: [
      { icon: "images/html-5.svg", label: "HTML 5" },
      { icon: "images/javascript.svg", label: "Javascript" },
      { icon: "images/css-3.svg", label: "CSS 3" },
      { icon: "images/sql-icon.svg", label: "SQL"},
      { icon: "images/json-icon.svg", label: "JSON"}
    ],
    url: "https://nutrition-demo.rodesignedthat.workers.dev/"
  }
];

const container = document.getElementById("projects-list");

const html = projects.map(function(project) {
  const techTags = project.technologies.map(function(tech) {
    return `
      <div class="tools" role="listitem">
        <img class="icons" src="${tech.icon}" alt="" />
        <p>${tech.label}</p>
      </div>
    `;
  }).join("");

  return `
    <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="card-link" aria-label="${project.title}, opens in new tab">
      <article class="card">
        <div class="card-title">
          <h3>${project.title} - ${project.status}</h3>
        </div>
        <div>
          <div class="card-description-stack">
            <div>
              <p>${project.description}</p>
            </div>
            <div class="tool-container" role="list">${techTags}</div>
          </div>
        </div>
      </article>
    </a>
  `;
}).join("");

container.innerHTML = html;