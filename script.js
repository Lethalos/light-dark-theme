const sunMoonContainer = document.querySelector(".sun-moon-container");
const title = document.querySelector(".title");

console.log(getComputedStyle(sunMoonContainer).getPropertyValue("--rotation"));

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    title.innerText = "Dark Theme";
  } else {
    title.innerText = "Light Theme";
  }

  const currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")
  );
  sunMoonContainer.style.setProperty("--rotation", currentRotation + 180);
});
