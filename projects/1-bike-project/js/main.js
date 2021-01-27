let blueButton = document.querySelector("#blueBtn");
let jumbotronColor = document.querySelector(".jumbotron");
let donateABike = document.getElementsByClassName("btn btn-primary btn-lrg")[0];
let volunteerButton = document.getElementsByClassName(
  "btn btn-secondary btn-lrg"
)[0];

blueButton.addEventListener("click", bluBtnClicked);
function bluBtnClicked() {
  jumbotronColor.style.backgroundColor = "#588fbd";
  donateABike.style.backgroundColor = "#ffa500";
  volunteerButton.style.backgroundColor = "black";
  volunteerButton.style.color = "white";
}

let orangeButton = document.querySelector("#orangeBtn");
let jumbotronColorOrange = document.querySelector(".jumbotron");
let donateABikeOrange = document.getElementsByClassName(
  "btn btn-primary btn-lrg"
)[0];

let volunteerButtonOrange = document.getElementsByClassName(
  "btn btn-secondary btn-lrg"
)[0];
orangeButton.addEventListener("click", orangeBtnClicked);
function orangeBtnClicked() {
  jumbotronColorOrange.style.backgroundColor = "#f0ad4e";
  donateABikeOrange.style.backgroundColor = "#5751fd";
  volunteerButtonOrange.style.backgroundColor = "#31b0d5";
  volunteerButtonOrange.style.color = "white";
}

let greenButton = document.querySelector("#greenBtn");
let jumbotronColorGreen = document.querySelector(".jumbotron");
let donateABikeGreen = document.getElementsByClassName(
  "btn btn-primary btn-lrg"
)[0];
let volunteerButtonGreen = document.getElementsByClassName(
  "btn btn-secondary btn-lrg"
)[0];
greenButton.addEventListener("click", greenBtnClicked);
function greenBtnClicked() {
  jumbotronColorGreen.style.backgroundColor = "#87ca8a";
  donateABikeGreen.style.backgroundColor = "black";
  volunteerButtonGreen.style.backgroundColor = "#8c9c08";
  volunteerButtonGreen.style.color = "white";
}

let formFunc = document.querySelector(".form-group");
let submitBtn = document.getElementsByClassName("btn btn-primary")[5];
let yourNameField = document.querySelector("#example-text-input");
let emailField = document.querySelector("#exampleInputEmail1");
let describeYourselfField = document.querySelector("#exampleTextarea");
submitBtn.addEventListener("click", submitBtnClicked);
function submitBtnClicked(e) {
  e.preventDefault();
  let submit = true;
  if (yourNameField.value.length === 0) {
    yourNameField.style.backgroundColor = "red";
    submit = false;
  }
  if (emailField.value.length === 0 || !emailField.value.includes("@")) {
    emailField.style.backgroundColor = "red";
    submit = false;
  }
  if (describeYourselfField.value.length === 0) {
    describeYourselfField.style.backgroundColor = "red";
    submit = false;
  }

   if (submit) {
    yourNameField.value = "";
    emailField.value = "";
    describeYourselfField.value = "";
    alert("Thank you for filling out the form");
  }
}