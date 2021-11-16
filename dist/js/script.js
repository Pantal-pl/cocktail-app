const wantedDrink = document.querySelector("#wanted-drink");
const searchBtn = document.querySelector("#search-btn");
const alertBanner = document.querySelector(".banner");

function searchByName() {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${wantedDrink.value}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
searchBtn.addEventListener("click", () => {
  if (wantedDrink.value === "" || wantedDrink.value === null) {
        alertBanner.style = "top:0;";
    setTimeout(() => {
      alertBanner.style = "top:-5em";
    }, 1200);
  } else {
    searchByName();
    console.log("dsa");
  }
});
