document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  // Get the input values
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value; // Month is 0-indexed
  const year = document.getElementById("year").value;
  const errorMessageD = document.getElementById("errorD");
  const errorMessageY = document.getElementById("errorY");
  const errorMessageM = document.getElementById("errorM");
  const inputD = document.getElementById("day");
  const inputY = document.getElementById("year");
  const inputM = document.getElementById("month");
  const label = document.querySelectorAll("label");

  // Clear any previous error messages and styles
  errorMessageD.innerHTML = "";
  errorMessageM.innerHTML = "";
  errorMessageY.innerHTML = "";
  inputD.style.border = "";
  inputM.style.border = "";
  inputY.style.border = "";
  label.forEach((l) => (l.style.color = ""));

  console.log(day, month, year);
  let flag = 0;
  // Validate the input values
  if (day === "") {
    errorMessageD.innerHTML = "This field is required.";
    inputD.style.border = "1px solid hsl(0, 100%, 67%)";
    label[0].style.color = "hsl(0, 100%, 67%)";
    flag = 1;
  } else if (day < 1 || day > 31) {
    errorMessageD.innerText = "Must be a valid day.";
    inputD.style.border = "1px solid red";
    label[0].style.color = "hsl(0, 100%, 67%)";
    flag = 1;
  }

  if (month === "") {
    errorMessageM.innerText = "This field is required.";
    inputM.style.border = "1px solid red";
    label[1].style.color = "hsl(0, 100%, 67%)";
    flag = 1;
  } else if (month < 1 || month > 12) {
    errorMessageM.innerText = "Must be a valid month.";
    inputM.style.border = "1px solid red";
    label[1].style.color = "hsl(0, 100%, 67%)";
    flag = 1;
  }

  if (year === "") {
    errorMessageY.innerHTML = "This field is required.";
    inputY.style.border = "1px solid red";
    label[2].style.color = "hsl(0, 100%, 67%)";
    flag = 1;
  } else if (year > new Date().getFullYear()) {
    errorMessageY.innerText = "Must be a valid year.";
    inputY.style.border = "1px solid red";
    label[2].style.color = "hsl(0, 100%, 67%)";
    flag = 1;
  }
  if (flag === 1) {
    return;
  }
  // Create a date object from the input values
  const inputDate = new Date(year, month - 1, day);
  if (
    inputDate.getDate() !== parseInt(day) ||
    inputDate.getMonth() !== parseInt(month) - 1 ||
    inputDate.getFullYear() !== parseInt(year)
  ) {
    errorMessageD.innerText = "Must be a valid date.";
    label.forEach((l) => (l.style.color = "hsl(0, 100%, 67%)"));
    inputM.style.border = "1px solid red";
    inputD.style.border = "1px solid red";
    inputY.style.border = "1px solid red";
    return;
  }
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diffTime = Math.abs(currentDate - inputDate);

  // Convert milliseconds to days, months, and years
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);
  const diffMonths = Math.floor((diffDays % 365) / 30);
  const remainingDays = diffDays - diffYears * 365 - diffMonths * 30;

  const y = document.getElementById("yearR");
  y.innerText = diffYears;
  const m = document.getElementById("monthR");
  m.innerText = diffMonths;
  const d = document.getElementById("dayR");
  d.innerText = remainingDays;

  return;
});
