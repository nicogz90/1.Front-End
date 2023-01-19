document.querySelector("h1").textContent =
  person.firstname + " " + person.lastname;

document.querySelector(".img-profile").setAttribute("src", person.image);
document.querySelector(".img-profile").setAttribute("alt", person.firstname);

document.querySelector("#address").textContent = person.address;
document.querySelector("#phone").textContent = person.phone;
document.querySelector("#email").setAttribute("href", person.email);
document.querySelector("#email").textContent = person.email;

document.querySelector("#linkedin").setAttribute("href", person.linkedin);
document.querySelector("#facebook").setAttribute("href", person.facebook);
document.querySelector("#twitter").setAttribute("href", person.twitter);
document.querySelector("#github").setAttribute("href", person.github);

for (var job of person.jobs) {
  /**
   * En la siguiente variable se creó un string usando back-ticks
   * (acentos graves) en lugar de comillas simples o dobles.
   *
   * Esto permite crear un string con varios saltos de línea (enters)
   * y además permite concatenar varibles sin necesidad de usar
   * los símbolos de más (+).
   *
   * Esto es lo que se llama Template Literals.
   * Documentación: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   */
  var job_container = `
    <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div class="resume-content">
        <h3 class="mb-0">${job.title}</h3>
        <div class="subheading mb-3">${job.company}</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit et corporis eveniet eius.</p>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">${job.year_from} – ${job.year_to}</span>
      </div>
    </div>
`;

  document
    .querySelector("#jobs-container")
    .insertAdjacentHTML("beforeend", job_container);
}

for (var edu of person.education) {
  var education_container = `
    <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div class="resume-content">
        <h3 class="mb-0">${edu.institution}</h3>
        <div class="subheading mb-3">${edu.course}</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit et corporis eveniet eius.</p>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">${edu.year}</span>
      </div>
    </div>`;
  document
    .querySelector("#educations-container")
    .insertAdjacentHTML("beforeend", education_container);
}
