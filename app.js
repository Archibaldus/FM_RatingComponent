const roundElements = document.querySelectorAll(".round-element");
const selectedValueInput = document.querySelector("#selectedValue");
const ratingForm = document.querySelector("#rating-forn");
const containerEl = document.querySelector(".container");
const containerElTy = document.querySelector(".container-ty");
const selectionInfoParagraph = document.querySelector(".selection-info p");

roundElements.forEach((el) => {
  el.addEventListener("click", () => {
    roundElements.forEach((elem) => elem.classList.remove("selected"));
    el.classList.add("selected");
    selectedValueInput.value = el.dataset.value;
  });
});

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (selectedValueInput.value) {
    console.log(selectedValueInput.value);
    containerEl.classList.add("hide");
    containerElTy.classList.remove("hide");
    selectionInfoParagraph.textContent = `You selected ${selectedValueInput.value} out of 5`;
  }
});
