# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Links

- Solution URL: [GitHub repository](https://github.com/valerii-tarasenko/intro-component-with-sign-up-form)
- Live Site URL: [Live site](https://valerii-tarasenko.github.io/intro-component-with-sign-up-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

This project was about validating a form with several fields. The main thing I learned is how to check all inputs in one place instead of writing the same code four times. I used `querySelectorAll` with `forEach`, and `nextElementSibling` to find the error message that belongs to each input:

```js
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
```

I also learned that:

- The error icon and red border can be controlled only by a CSS class, so JavaScript only adds or removes the class.
- I can hide the placeholder in the error state with only CSS:

```css
.card__form input.card__input--error::placeholder {
  color: transparent;
}
```

- If the live site does not show my latest changes, I should do a hard refresh (Ctrl + Shift + R) before looking for a bug.

### Continued development

- Making the form accessible: real labels for inputs and `aria-live` for error messages.
- Working with data from the internet (`fetch` and `async/await`).
- Writing more code without looking at my old projects.

## Author

- Frontend Mentor - [@valerii-tarasenko](https://www.frontendmentor.io/profile/valerii-tarasenko)
- GitHub - [valerii-tarasenko](https://github.com/valerii-tarasenko)
