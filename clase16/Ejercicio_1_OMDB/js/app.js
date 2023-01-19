const btn = document.querySelector("button");
const title = document.querySelector("#title");
const year = document.querySelector("#year");
const poster = document.querySelector("#poster");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const inputSearchValue = document.querySelector("#search").value;

  fetch(`https://www.omdbapi.com/?apikey=5144f510&s=${inputSearchValue}`)
    .then(function (peliculas) {
      return peliculas.json();
    })
    .then(function (datos) {
      const res = datos.Search[0];
      title.textContent = `Titulo: ${res.Title}`;
      year.textContent = `Año: ${res.Year}`;
      poster.src = res.Poster;
    });
});
