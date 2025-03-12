document.addEventListener("DOMContentLoaded", () => {
  // Renderização da Educação
  const educationContent = document.querySelector(".education-content");
  education.forEach((edu) => {
    const card = document.createElement("div");
    card.classList.add("education-card");

    card.innerHTML = `
          <img src="${edu.image}" alt="Logo da ${edu.institution}" />
          <div class="education-info">
            <h2>${edu.institution}</h2>
            <h3>${edu.deegre}</h3>
            <span>${edu.period}</span>
            <p>${edu.description}</p>
          </div>
        `;

    educationContent.appendChild(card);
  });

  // Renderização dos Cursos
  const coursesContent = document.querySelector(".courses-content");
  courses.forEach((course) => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    card.innerHTML = `
          <div class="course-info">
            <h2>${course.institution}</h2>
            <h3>${course.deegre}</h3>
            <span>${course.period} - ${course.hours}</span>
          </div>
        `;

    coursesContent.appendChild(card);
  });

  // Renderização da Experiência
  const experienceContent = document.querySelector(".experience-content");
  experience.forEach((ex) => {
    const card = document.createElement("div");
    card.classList.add("experience-card");

    card.innerHTML = `
            <img src="${ex.image}" alt="Logo da ${ex.interprise}" />
            <div class="experience-info">
              <h2>${ex.interprise}</h2>
              <h3>${ex.role} - ${ex.position}</h3>
              <span>${ex.period}</span>
              <p>${ex.description}</p>
            </div>
          `;

    experienceContent.appendChild(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const eventsContent = document.querySelector(".events-content");

  events.forEach((institution) => {
    const institutionCard = document.createElement("div");
    institutionCard.classList.add("institution-card");

    institutionCard.innerHTML = `
        <div class="institution-header">
          <img src="${institution.image}" alt="Logo da ${
      institution.institution
    }" />
          <h2>${institution.institution}</h2>
        </div>
        <div class="events-list">
          ${institution.events
            .map(
              (event) => `
            <div class="event-card">
              <div class="event-info">
                <h2>• ${event.name}</h2>
                <h3>${event.hours} Horas - ${event.period}</h3>
                <ul>
                  ${event.req.map((req) => `<li>${req}</li>`).join("")}
                </ul>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      `;

    eventsContent.appendChild(institutionCard);
  });
});
