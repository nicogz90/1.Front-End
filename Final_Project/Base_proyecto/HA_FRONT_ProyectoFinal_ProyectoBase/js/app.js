/* SALES */

/* Vue */
var salesApp = new Vue({
  el: "#sales",
  data: {
    cars: [],
    currency: "USD",
    exchangeRate: "",
    years: [],
    yearSelected: "",
    brands: [],
    brandSelected: "",
    models: [],
    modelSelected: "",
    statusSelected: "",
    filtering: false,
  },
  methods: {
    brandModels,
    loadCars,
    changeCurrency,
  },
  filters: {
    // thousands separator point filter
    thousands: function (value) {
      return parseInt(value).toLocaleString("es-UY");
    },
  },
});

/* Currency rate */
const ratesUrl = "https://ha-front-api-proyecto-final.vercel.app/rates";
fetch(ratesUrl)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    /* document.querySelector("#rate").textContent = data.uyu; */
    salesApp.exchangeRate = data.uyu;
  })
  .catch((error) => {
    console.log(error);
  });

/* Years */
/* const yearSelect = document.querySelector("#select-year");
for (let i = 2022; i >= 1900; i--) {
  yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
} */
for (let i = 2022; i >= 1900; i--) {
  salesApp.years.push(i);
}

/* Brands */
const brandsUrl = "https://ha-front-api-proyecto-final.vercel.app/brands";
fetch(brandsUrl)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    salesApp.brands = data;
  })
  .catch((error) => {
    console.log(error);
  });

/* Models (of the selected brand) */
function brandModels() {
  const modelsUrl =
    "https://ha-front-api-proyecto-final.vercel.app/models?brand=" +
    salesApp.brandSelected;
  fetch(modelsUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      salesApp.models = data;
      salesApp.modelSelected = "";
    })
    .catch((error) => {
      console.log(error);
    });
}

/* Cars */
function loadCars() {
  salesApp.filtering = true;

  const year = salesApp.yearSelected;
  const brand = salesApp.brandSelected;
  const model = salesApp.modelSelected;
  const status = salesApp.statusSelected;

  const carsUrl = `https://ha-front-api-proyecto-final.vercel.app/cars?year=${year}&brand=${brand}&model=${model}&status=${status}`;
  fetch(carsUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      salesApp.cars = data;
      salesApp.filtering = false;
    })
    .catch((error) => {
      console.log(error);
    });
}

loadCars(); // Initial car load

/* Change currency */
function changeCurrency() {
  if (salesApp.currency === "USD") {
    salesApp.currency = "UYU";
  } else {
    salesApp.currency = "USD";
  }
}
