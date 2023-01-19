const list = document.querySelector("ul");
list.style.fontFamily = "Arial, Helvetica, sans-serif";

fetch(`https://www.omdbapi.com/?apikey=5144f510&s=avatar`)
  .then(function (peliculas) {
    return peliculas.json();
  })
  .then(function (datos) {
    for (var i = 0; i < datos.Search.length; i++) {
      list.insertAdjacentHTML(
        "beforeend",
        `<li> ${datos.Search[i].Title} </li>`
      );
      console.log(datos.Search[i].Title);
    }
  });
