const skills = [
  "C#/.NET Core",
  "SQL, POSTGRE SQL and Entity Framework Core",
  "ASP.NET",
  "HTML/CSS/JS",
  "Git(hub)",
];
const education = [
  "Moscow State University of Economics Statistics And Computer Science",
];
const certifications = [
  "CS50 by Harvard University",
  "Microsoft C# Foundational certificate",
];

function aboutBuilder(selectedList) {
  let currentData = [];
  let listItems = [];

  if (selectedList === "skillsButton") {
    currentData = skills;
  } else if (selectedList === "eduButton") {
    currentData = education;
  } else {
    currentData = certifications;
  }

  currentData.forEach((line) => {
    listItems.push(`<li>${line}</li>`);
  });

  return listItems;
}

export default aboutBuilder;
