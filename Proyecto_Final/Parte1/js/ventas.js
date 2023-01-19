// Carga de Tipo de Cambio:
fetch("https://ha.edu.uy/api/rates")
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    document.querySelector("#rate span").textContent = data.uyu;
  });
