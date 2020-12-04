// Variables for the elements on the page
const form = document.querySelector("#form"); // RS added #
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.getElementById("stacked-state");
const apiDataEl = document.getElementById("api-data-display");
var searchedStatesArray = [];
var searchedStatesEl = document.querySelector("#searched-states");
var clearButtonEl = document.querySelector("#clear-btn")

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

//   // create a span element to hold the state name
//   var stateName = document.createElement("span");
//   stateName.textContent = stateSearch;

//   // append to container
//   stateData.appendChild(stateName);

  // create a span element for the total positive cases
  //var positiveCases = document.createElement("span");



  // append conatiner to DOM
  apiDataEl.appendChild(stateData);
};

// function to display list of searched states from local storage
var printStateList = function() {
    var stateList = JSON.parse(localStorage.getItem("states"));
    if (stateList) {
        searchedStatesArray = stateList;
    }
    searchedStatesEl.textContent = "";
    for (i = 0; i < searchedStatesArray.length; i++) {
        var searchedState = $("<li>").text(searchedStatesArray[i]);
        $(searchedStatesEl).append(searchedState);
    }; 
}


var formSubmitHandler = function(event) {
  event.preventDefault(); // prevents default action of browser, we then can specify what to do
  console.log("function was called");

  var stateSearch = input.value.trim(); // this will get the user input from the form

  // save to local storage
  var stateList = JSON.parse(localStorage.getItem("states"));
    if (stateList) {
        searchedStatesArray = stateList;
        if (searchedStatesArray.includes(stateSearch)) {
        }
        else {
            searchedStatesArray.push(stateSearch);
        localStorage.setItem("states", JSON.stringify(searchedStatesArray));
        };
    }
    else {
        searchedStatesArray.push(stateSearch);
        localStorage.setItem("states", JSON.stringify(searchedStatesArray)); 
    };
    printStateList();

  // error handling and function pass through
  if (stateSearch) { // if a value is entered, continue
    getStateData(stateSearch); //function for API call here
    input.value = ""; // clears the field for the next search
  }
  else {
    alert("Please enter a State."); // this will eventually need to be a modal
  }
};

// call function to display list of searched states
printStateList();

// function to clear searched states
var clearStates = function () {
  localStorage.removeItem("states");
  searchedStatesArray = [];
  searchedStatesEl.textContent = "";
}

form.addEventListener("submit", formSubmitHandler);

// event listener for clear all button
$(clearButtonEl).on("click", function(event) {
  event.preventDefault();
  clearStates();
})