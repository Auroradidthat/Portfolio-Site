const projects = [
  {
    title: "Restaurant Review Site",
    status: "In Progress",
    description: "A restaurant review website that emphasizes how well the restaurant delivers on presence, emotional safety, trust, sensory alignment, and connection. The technologies that will be used are HTML, CSS, and JavaScript. As always, accessibility will be baked into the cake.",
    technologies: [
      { icon: "images/html-5.svg", label: "HTML 5" },
      { icon: "images/javascript.svg", label: "Javascript" },
      { icon: "images/css-3.svg", label: "CSS 3" }
    ],
    url: "https://auroradidthat.github.io/restaurantReviewSite/"
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