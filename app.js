"use strict";

window.addEventListener("load", initApp);

function initApp() {
  // Event Listeners
  document.querySelector("#form-create").addEventListener("submit", createUser);
}

function createUser(event) {
  event.preventDefault();

  const name = this.name.value;
  const title = this.title.value;
  const mail = this.mail.value;
  const image = this.image.value;
  const age = this.age.value;
  const username = this.username.value;

  console.log(name);
  console.log(title);
  console.log(mail);
  console.log(image);
  console.log(username);
  console.log(age);

  // validate user info
  validateUser(name, title, mail, image);
  function validateUser(name, title, mail, image) {
    if (name.length > 2 && title && (mail || username) && image && age >= 18) {
      document.querySelector("#is_valid").classList.remove("hidden");
      document.querySelector("#is_valid").classList.add("granted");
    } else {
      console.log("Not");
      document.querySelector("#not_valid").classList.remove("hidden");
      document.querySelector("#not_valid").classList.add("denied");
    }
  }
}
