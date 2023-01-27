
const form = document.getElementById("login_form");
form.addEventListener("submit", function(event) {

  event.preventDefault();


  const formData = new FormData(form);


  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  const dataString = JSON.stringify(data);
  localStorage.setItem("loginData", dataString);

  console.log("Credentials saved to localStorage");
});


const dataString = localStorage.getItem("loginData");
const data = JSON.parse(dataString);
console.log("Username: " + data.username);
console.log("Password: " + data.password);
