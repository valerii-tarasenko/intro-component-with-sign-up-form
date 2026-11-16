const form = document.querySelector(".card__form");
const inputs = document.querySelectorAll(".card__form input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  inputs.forEach(function (input) {
    const message = input.nextElementSibling;
    const value = input.value.trim();
    let isValid = value !== "";

    if (input.type === "email") {
      isValid = value.includes("@") && value.includes(".");
    }

    if (isValid) {
      input.classList.remove("card__input--error");
      message.classList.add("hidden");
    } else {
      input.classList.add("card__input--error");
      message.classList.remove("hidden");
    }
  });
});
