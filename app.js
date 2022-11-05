// dom element
let text = document.querySelector(".text");
let errorSet = document.querySelector("#percentage");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

// condition check user input current value
text.addEventListener("keypress", function (e) {
  let userTextValue = Number(e.target.value);

  if (userTextValue || e.code.slice(0, 5) === "Digit") {
    errorSet.textContent = "";
  } else {
    text.value = "";
    errorSet.innerHTML = "<h3>❌ Please enter only number</h3>";
  }
});

// fill error part
function setValue(text) {
  document.querySelector("#percentage").innerHTML = text;
}

// condition check user value
function conditionCheck() {
  let grade = +document.querySelector("#grade").value;

  if (grade > 100) {
    setValue("<h3>❌Invalid Percentage, Please Enter Valid Percentage</h3>");
  } else if (grade <= 100 && grade >= 80) {
    setValue("<h3 style='color: #ffc400;'>Grade A+ 🤩</h3>");
  } else if (grade < 80 && grade >= 70) {
    setValue("<h3 style='color: #ffc400;'>Grade A 😀</h3>");
  } else if (grade < 70 && grade >= 60) {
    setValue("<h3 style='color: #ffc400;'>Grade B 😊</h3>");
  } else if (grade < 60 && grade >= 50) {
    setValue("<h3 style='color: #ffc400;'>Grade C 😯</h3>");
  } else if (grade < 50 && grade >= 0) {
    setValue("<h3>You are Fail 😭</h3>");
  } else {
    setValue("<h3>❌Invalid Percentage, Please Enter Valid Percentage</h3>");
  }
}

// Dark and Ligh mode function
toggleBtn.onclick = function () {
  toggleBtn.innerHTML = "";
  body.classList.toggle("dark");

  if (body.className === "dark") {
    toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
};











// document.querySelector("#percentage").innerHTML =
//   "<h3>You are Fail 😭</h3>";
// document.querySelector("#percentage").innerHTML =
//   "<h3 style='color: #ffc400;'>Grade C 😯</h3>";
// document.querySelector("#percentage").innerHTML =
//   "<h3 style='color: #ffc400;'>Grade B 😊</h3>";

// document.querySelector("#percentage").innerHTML =
//   "<h3>❌Invalid Percentage, Please Enter Valid Percentage</h3>";
// document.querySelector("#percentage").innerHTML =
//   "<h3 style='color: #ffc400;'>Grade A 😀</h3>";
// document.querySelector("#percentage").innerHTML =
//   "<h3 style='color: #ffc400;'>Grade A+ 🤩</h3>";
// document.querySelector("#percentage").innerHTML =
//   "<h3>❌Invalid Percentage, Please Enter Valid Percentage</h3>";
