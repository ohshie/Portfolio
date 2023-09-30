import aboutBuilder from "./about.js";
import sendMail from "./sendMessage.js";

const messageForm = document.getElementById("message-form");
const skillsUl = document.getElementById("skills-ul");
const formButton = document.getElementById("form-btn")

const aboutButtons = document.querySelectorAll("#about button");
const aboutButtonBars = document.querySelectorAll("[id$='ButtonBar']");

const projectButtons = document.querySelectorAll("#projects button");
const projects = document.querySelectorAll(".filtered");

// buttons to show/hide projects
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

// buttons to switch between about sections
aboutButtons.forEach((button) => {
  button.addEventListener("click", function () {
    aboutButtonBars.forEach((bar) => {
      bar.style.opacity = 0;
    });

    const buttonBarId = button.id + "Bar";
    const buttonBar = document.getElementById(buttonBarId);
    buttonBar.style.opacity = 1;

    skillsUl.innerHTML = aboutBuilder(button.id).join("");
  });
});

// send message event
messageForm.addEventListener("submit", async function submit(e) {
  e.preventDefault();
  //await sendMail();
  messageForm.reset();
  formButton.disabled = true;
  formButton.classList.remove("hover:bg-[hsl(182,53%,27%)]");
  formButton.classList.add("hover:bg-[#104547]")
  formButton.innerHTML = "Message sent!"
});
