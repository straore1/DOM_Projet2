document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeColorButton = document.getElementById("change-color-btn");

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, "0")}`;
  }

  changeColorButton.addEventListener("click", () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
