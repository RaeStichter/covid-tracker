// Variables for the elements on the page
const form = document.querySelector("#form"); // RS added #
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.getElementById("state-input");

// Create an li element
const liMaker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

// Event listener to listen for the submit on the form
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   liMaker(input.value);
//   input.value = "";
// });

// --------------------------------------------------RS Added ------------------------------------------------


var getStateData = function(stateSearch) {
  console.log("get state data was called, this is where APIS will be called.");

  var apiCovid = "https://api.covidtracking.com/v1/states/current.json";

  fetch(apiCovid).then(function(response) {
    response.json().then(function(data) {
      displayData(stateSearch, data);
      console.log(data);
    });
  });

};



var displayData = function(stateSearch, data) {
  console.log(stateSearch, data);

  // create a container for the state data
  var stateData = document.createElement("div");

  // create a span element to hold the state name
  var stateName = document.createElement("span");
  stateName.textContent = stateSearch;

  // append to container
  stateData.appendChild(stateName);

  // create a span element for the total positive cases
  //var positiveCases = document.createElement("span");



  // append conatiner to DOM
  form.appendChild(stateData);
};











var formSubmitHandler = function(event) {
  event.preventDefault(); // prevents default action of browser, we then can specify what to do
  console.log("function was called");

  var stateSearch = input.value.trim(); // this will get the user input from the form

  // error handling and function pass through
  if (stateSearch) { // if a value is entered, continue
    getStateData(stateSearch); //function for API call here
    input.value = ""; // clears the field for the next search
  }
  else {
    alert("Please enter a State."); // this will eventually need to be a modal
  }
};



form.addEventListener("submit", formSubmitHandler);