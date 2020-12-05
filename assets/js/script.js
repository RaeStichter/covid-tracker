// Variables for the elements on the page
const form = document.querySelector("#form"); // RS added #
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.getElementById("stacked-state");
const apiDataEl = document.getElementById("api-data-display");
var searchedStatesArray = [];
var searchedStatesEl = document.querySelector("#searched-states");
var clearButtonEl = document.querySelector("#clear-btn")

var stateCodeIndex = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC","DE", "FL", "GA", "GU",
"HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS",
"MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC",
"SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

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

  // get index of state to be used in DisplayData
  var stateIndex = stateCodeIndex.indexOf(stateSearch);
  console.log(stateIndex);

  var apiOpenCovid = "https://api.covidtracking.com/v1/states/current.json";

  fetch(apiOpenCovid).then(function(response) {
    response.json().then(function(data) {
      var apiCovid = "https://api.covid19api.com/summary";
      fetch(apiCovid).then(function(response) {
        response.json().then(function(info) {
          console.log(info);
          console.log(data);
          displayData(stateIndex, data);
        });
      });
      // displayData(stateSearch, data);
      // console.log(data);
    });
  });

};



var displayData = function(stateIndex, data) {
  console.log(stateIndex, data);

  // ------------ Variables for all of the state information
  var stateInfo = [
    {
      stat: "State: ",
      data: data[stateIndex].state
    },
    {
      stat: "Probable Cases: ",
      data: data[stateIndex].probableCases
    },
    {
      stat: "Positive Cases: ",
      data: data[stateIndex].positive
    },
    {
      stat: "Hospitalized Currently: ",
      data: data[stateIndex].hospitalizedCurrently
    },
    {
      stat: "Deaths: ",
      data: data[stateIndex].death
    },
    {
      stat: "Negative Cases: ",
      data: data[stateIndex].negative
    },
    {
      stat: "Recovered Cases: ",
      data: data[stateIndex].recovered
    },
    {
      stat: "Total Cases: ",
      data: data[stateIndex].total
    }
  ];
  // var state = data[stateIndex].state;
  // var positiveCases = data[stateIndex].positive;
  // var deaths = data[stateIndex].death;
  // var hospitalCurrent = data[stateIndex].hospitalizedCurrently;
  // var caseTotal = data[stateIndex].total;
  // var negativeTest = data[stateIndex].negative;
  // var probableCases = data[stateIndex].probableCases;
  // var recoveredCases = data[stateIndex].recovered;
  
  console.log(stateInfo);
  
  
  //console.log(state, positiveCases, deaths,hospitalCurrent, caseTotal, negativeTest, probableCases, recoveredCases);
  

  // create a container for the state data
  var stateData = document.createElement("div");


  // loop through the API data contained in stateInfo
  for (i = 0; i < stateInfo.length; i++) {
   
    // create a span element to hold the data
    var stateNameEl = document.createElement("div");
    
    stateNameEl.textContent = stateInfo[i].stat + stateInfo[i].data;
    //console.log(stateNameEl);

    // append to container
    stateData.appendChild(stateNameEl);
  }

  


  // create a span element for the total positive cases
  //var positiveCasesEl = document.createElement("span");




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