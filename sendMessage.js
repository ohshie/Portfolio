const messageForm = document.getElementById("message-form");

async function sendMail() {
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

function serializeForm(form) {
  let formdata = new FormData(form);
  let formObject = {};
  formdata.forEach((value, key) => {
    formObject[key] = value;
  });

  let formSerialized = JSON.stringify(formObject);
  return formSerialized;
}

export default sendMail;