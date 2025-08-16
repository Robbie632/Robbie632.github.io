const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");

const containerElement = document.getElementById("container");
const buttonElement = document.getElementById("button-1");
const buttonElementb = document.getElementById("button-1b");
const buttonElement2 = document.getElementById("button-2");
const buttonElement2b = document.getElementById("button-2b");

const buttons = [
  buttonElement,
  buttonElementb,
  buttonElement2,
  buttonElement2b,
];

const cardElement = document.getElementById("card");

color1.addEventListener("input", () => {
  const color = color1.value;
  containerElement.style.backgroundColor = color;
});

color3.addEventListener("input", () => {
  const color = color3.value;
  cardElement.style.backgroundColor = color;
});
color2.addEventListener("input", () => {
  const color = color2.value;
  buttons.forEach((button) => {
    button.style.backgroundColor = color;
  });
});
