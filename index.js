const messageForm = document.getElementById("message-form");

document.addEventListener("DOMContentLoaded", function () {
  const aboutButtons = document.querySelectorAll("#about button");
  const aboutButtonBars = document.querySelectorAll("[id$='ButtonBar']");

  const projectButtons = document.querySelectorAll("#projects button");
  const projects = document.querySelectorAll(".filtered");

  projectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = button.value;

      // Hide all projects
      projects.forEach((project) => {
        project.style.opacity = 0;
        project.style.display = "none";
      });

      // If "ALL" button is clicked, show all projects
      if (filter === "All") {
        projects.forEach((project) => {
          project.style.opacity = 100;
          project.style.display = "block";
        });
      } else {
        // Otherwise, show only the projects that match the filter
        projects.forEach((project) => {
          if (project.classList.contains(filter)) {
            project.style.opacity = 100;
            project.style.display = "block";
          }
        });
      }
    });
  });

  aboutButtons.forEach((button) => {
    button.addEventListener("click", function () {
      aboutButtonBars.forEach((bar) => {
        bar.style.opacity = 0;
      });

      const buttonBarId = button.id + "Bar";
      const buttonBar = document.getElementById(buttonBarId);
      buttonBar.style.opacity = 100;
    });
  });
});

messageForm.addEventListener("submit", function submit(e) {
  e.preventDefault();
  sendMail();
  //messageForm.reset();
});

function serializeForm(form) {
  let formdata = new FormData(form);
  let formObject = {};
  formdata.forEach((value, key) => {
    formObject[key] = value;
  });

  let formSerialized = JSON.stringify(formObject);
  return formSerialized;
}

function sendMail() {
  fetch("https://ohshieemailer.azurewebsites.net/api/emailer", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: serializeForm(messageForm),
  }).then((response) => {
    console.log(response);
  });
}
