// -----------------------------------------Variables and setup arrrays -----------------------------------------
// Variables for the elements on the page to be used for DOM manipulation
const form = document.querySelector("#form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.getElementById("stacked-state");
const apiDataEl = document.getElementById("api-data-display");
var searchedStatesEl = document.querySelector("#searched-states");
var clearButtonEl = document.querySelector("#clear-btn");
var saveButtonEl = document.querySelector("#save-btn");
var clearButtonEl = document.querySelector("#clear-btn");

// Variables for empty arrays which will be populated
var searchedStatesArray = [];
var symptomsLogArray = [];
var apiOpenCovidData = []; // covid data called from the Open Covid Project API
var magnitudes = []; // magnitudes of state data

// Variable non array set
const maxMagnitude = 50; // set base value for the magnitude markers on Google maps

// Set the index of the states (array)
const stateCodeIndex = [
  "AK",
  "AL",
  "AR",
  "AS",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "GU",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MP",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VI",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];
// Latitude and Longitude of all states (array)
const latLngStates = [
  {
    state: "Alaska",
    latitude: 61.385,
    longitude: -152.2683,
  },
  {
    state: "Alabama",
    latitude: 32.799,
    longitude: -86.8073,
  },
  {
    state: "Arkansas",
    latitude: 34.9513,
    longitude: -92.3809,
  },
  {
    state: "AmericanSamoa",
    latitude: 14.271,
    longitude: 170.1322,
  },
  {
    state: "Arizona",
    latitude: 33.7712,
    longitude: -111.3877,
  },
  {
    state: "California",
    latitude: 36.17,
    longitude: -119.7462,
  },
  {
    state: "Colorado",
    latitude: 39.0646,
    longitude: -105.3272,
  },
  {
    state: "Connecticut",
    latitude: 41.5834,
    longitude: -72.7622,
  },
  {
    state: "DC",
    latitude: 38.9072,
    longitude: -77.0081,
  },
  {
    state: "Delaware",
    latitude: 39.3498,
    longitude: -75.5148,
  },
  {
    state: "Florida",
    latitude: 27.8333,
    longitude: -81.717,
  },
  {
    state: "Georgia",
    latitude: 32.9866,
    longitude: -83.6487,
  },
  {
    state: "Guam",
    latitude: 13.4443,
    longitude: 144.7606,
  },
  {
    state: "Hawaii",
    latitude: 21.1098,
    longitude: -157.5311,
  },
  {
    state: "Iowa",
    latitude: 42.0046,
    longitude: -93.214,
  },
  {
    state: "Idaho",
    latitude: 44.2394,
    longitude: -114.5103,
  },
  {
    state: "Illinois",
    latitude: 40.3363,
    longitude: -89.0022,
  },
  {
    state: "Indiana",
    latitude: 39.8647,
    longitude: -86.2604,
  },
  {
    state: "Kansas",
    latitude: 38.5111,
    longitude: -96.8005,
  },
  {
    state: "Kentucky",
    latitude: 37.669,
    longitude: -84.6514,
  },
  {
    state: "Louisiana",
    latitude: 31.1801,
    longitude: -91.8749,
  },
  {
    state: "Massachusetts",
    latitude: 42.2373,
    longitude: -71.5314,
  },
  {
    state: "Maryland",
    latitude: 39.0724,
    longitude: -76.7902,
  },
  {
    state: "Maine",
    latitude: 44.6074,
    longitude: -69.3977,
  },
  {
    state: "Michigan",
    latitude: 43.3504,
    longitude: -84.5603,
  },
  {
    state: "Minnesota",
    latitude: 45.7326,
    longitude: -93.9196,
  },
  {
    state: "Missouri",
    latitude: 38.4623,
    longitude: -92.302,
  },
  {
    state: "MarianaIslands",
    latitude: 15.1806286,
    longitude: 145.7291657,
  },
  {
    state: "Mississippi",
    latitude: 32.7673,
    longitude: -89.6812,
  },
  {
    state: "Montana",
    latitude: 46.9048,
    longitude: -110.3261,
  },
  {
    state: "North Carolina",
    latitude: 35.6411,
    longitude: -79.8431,
  },
  {
    state: "North Dakota",
    latitude: 47.5362,
    longitude: -99.793,
  },
  {
    state: "Nebraska",
    latitude: 41.1289,
    longitude: -98.2883,
  },
  {
    state: "New Hampshire",
    latitude: 43.4108,
    longitude: -71.5653,
  },
  {
    state: "New Jersey",
    latitude: 40.314,
    longitude: -74.5089,
  },
  {
    state: "New Mexico",
    latitude: 34.8375,
    longitude: -106.2371,
  },
  {
    state: "Nevada",
    latitude: 38.4199,
    longitude: -117.1219,
  },
  {
    state: "New York",
    latitude: 42.1497,
    longitude: -74.9384,
  },
  {
    state: "Ohio",
    latitude: 40.3736,
    longitude: -82.7755,
  },
  {
    state: "Oklahoma",
    latitude: 35.5376,
    longitude: -96.9247,
  },
  {
    state: "Oregon",
    latitude: 44.5672,
    longitude: -122.1269,
  },
  {
    state: "Pennsylvania",
    latitude: 40.5773,
    longitude: -77.264,
  },
  {
    state: "PuertoRico",
    latitude: 18.2438738,
    longitude: -66.4992349,
  },
  {
    state: "Rhode Island",
    latitude: 41.6772,
    longitude: -71.5101,
  },
  {
    state: "South Carolina",
    latitude: 33.8191,
    longitude: -80.9066,
  },
  {
    state: "South Dakota",
    latitude: 44.2853,
    longitude: -99.4632,
  },
  {
    state: "Tennessee",
    latitude: 35.7449,
    longitude: -86.7489,
  },
  {
    state: "Texas",
    latitude: 31.106,
    longitude: -97.6475,
  },
  {
    state: "Utah",
    latitude: 40.1135,
    longitude: -111.8535,
  },
  {
    state: "Virginia",
    latitude: 37.768,
    longitude: -78.2057,
  },
  {
    state: "VirginIslands",
    latitude: 18.0483293,
    longitude: -64.8076474,
  },
  {
    state: "Vermont",
    latitude: 44.0407,
    longitude: -72.7093,
  },
  {
    state: "Washington",
    latitude: 47.3917,
    longitude: -121.5708,
  },
  {
    state: "Wisconsin",
    latitude: 44.2563,
    longitude: -89.6385,
  },
  {
    state: "West Virginia",
    latitude: 38.468,
    longitude: -80.9696,
  },
  {
    state: "Wyoming",
    latitude: 42.7475,
    longitude: -107.2085,
  },
];

// ----------------------------------------- Initialize Google Maps -----------------------------------------
// loads map as the page loads
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3.8, 
    center: { lat: 39.829169, lng: -98.579908 }, //39.82916983397753, -98.57990885339983 geographic center of USA
    mapTypeId: "roadmap",
  });
  // Call function to get API data from Oen Covid
  getAPIData();
}

// ----------------------------------------- Call API -----------------------------------------
// Fetch the Open Covid Data from the API and store in a global function
var getAPIData = function() {
  
  var apiOpenCovid = "https://api.covidtracking.com/v1/states/current.json";

  fetch(apiOpenCovid).then(function (response) {
  response.json().then(function (data) {
    apiOpenCovidData = data;
   
    // Call function to get magnitude for the data points for Google Maps
    getMagnitude(apiOpenCovidData);
  });
});
};

// ----------------------------------------- Get Magnetude Function -----------------------------------------
// Create value to send to call back function to display a magnitude for positive cases
var getMagnitude = function(data) {
  // Find the positive case values for covid for each state
  var stateMagnitude = [];
  for (i = 0; i < data.length; i++) {
    var positive = data[i].positive;
    stateMagnitude[i] = positive;
  }
  // Find the highest of the positive cases
  var highestCovidPositive = Math.max.apply(null, stateMagnitude);
  
  // Loop through the positve cases and find a percentage of the max magnitude (to be used for display)
  var stateMagnitudUpdates = [];
  for (i = 0; i < stateMagnitude.length; i++) {
    var mag = stateMagnitude[i];
    // Current array value, divided by the highest value, multiplied by the max magnetude variable
    stateMagnitudUpdates[i] = (mag / highestCovidPositive) * maxMagnitude;
  };
  
  // update gloabl variable 
  magnitudes = stateMagnitudUpdates;

  // Call the call back function to populate the map with the magnitudes
  eqfeed_callback(latLngStates, stateMagnitudUpdates);
};

// ----------------------------------------- Populate Magnitude -----------------------------------------
// Loop through the magnitude array and place a marker for each based on the coordinates for the state/territory
const eqfeed_callback = function (latLngStates, stateMagnitudUpdates) {
  for (let i = 0; i < latLngStates.length; i++) {
    // get latitude and longitude data from the array
    const lat = latLngStates[i].latitude;
    const lng = latLngStates[i].longitude;
    
    // locate on the map
    const latLng = new google.maps.LatLng(lat, lng);
    // add markers (magnitude to the map)
    new google.maps.Marker({
      position: latLng,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "red",
        fillOpacity: 0.2,
        scale: stateMagnitudUpdates[i],
        strokeColor: "white",
        strokeWeight: 0.5
      },
      map: map,
    });
  }
};

// Create an li element
const liMaker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

// ----------------------------------------- Get State Data -----------------------------------------
// get searched state, find the index of the state in the list and send information to various functions
var getStateData = function (stateSearch) {

  // get index of state to be used in DisplayData
  var stateIndex = stateCodeIndex.indexOf(stateSearch);

  // Call the function to display the state data in the DOM
  displayData(stateIndex, apiOpenCovidData);

  // call function to zoom in on the state selected
  zoomState(stateIndex, latLngStates);
};

// ----------------------------------------- Display State Data -----------------------------------------
// take the API mass of data, parse out needed information and populate the DOM
var displayData = function (stateIndex, data) {
  // initial clear if there is anything present in the states space
  apiDataEl.textContent = "";

  //  Variables for all of the state information we want contained in an array of objects
  var stateInfo = [
    {
      stat: "State: ",
      data: data[stateIndex].state,
    },
    {
      stat: "Probable Cases: ",
      data: data[stateIndex].probableCases,
    },
    {
      stat: "Positive Cases: ",
      data: data[stateIndex].positive,
    },
    {
      stat: "Hospitalized Currently: ",
      data: data[stateIndex].hospitalizedCurrently,
    },
    {
      stat: "Deaths: ",
      data: data[stateIndex].death,
    },
    {
      stat: "Negative Cases: ",
      data: data[stateIndex].negative,
    },
    {
      stat: "Recovered Cases: ",
      data: data[stateIndex].recovered,
    },
    {
      stat: "Total Cases: ",
      data: data[stateIndex].total,
    },
  ];

  // create a container for the state data
  var stateData = document.createElement("div");

  // loop through the API data contained in stateInfo
  for (i = 0; i < stateInfo.length; i++) {
    // create a span element to hold the data
    var stateNameEl = document.createElement("div");

    // populate the state name and the data
    stateNameEl.textContent = stateInfo[i].stat + stateInfo[i].data;

    // append to container
    stateData.appendChild(stateNameEl);
  }
  // append conatiner to DOM
  apiDataEl.appendChild(stateData);
};

// ----------------------------------------- Zoom Function -----------------------------------------
// Zoom in on the state that the user selected
const zoomState = function(stateIndex, latLngStates) {
  var lat = latLngStates[stateIndex].latitude;
  var lng = latLngStates[stateIndex].longitude;
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6.5,
    center: { lat: lat, lng: lng }, //39.82916983397753, -98.57990885339983 geographic center of USA
    mapTypeId: "roadmap",
  });
  
  // callback to ensure that the magnetudes are reloaded on the map
  eqfeed_callback(latLngStates, magnitudes);
};

// ----------------------------------------- Load Local Storage -----------------------------------------
// function to display list of searched states from local storage
var printStateList = function () {
  var stateList = JSON.parse(localStorage.getItem("states"));
  if (stateList) {
    searchedStatesArray = stateList;
  }
  searchedStatesEl.textContent = "";
  for (i = 0; i < searchedStatesArray.length; i++) {
    var searchedState = $("<li>").text(searchedStatesArray[i]);
    searchedState.addClass("state-click");
    $(searchedStatesEl).append(searchedState);
  }
};

// ----------------------------------------- Submit Handler -----------------------------------------
var formSubmitHandler = function (event) {
  event.preventDefault(); // prevents default action of browser, we then can specify what to do
  
  var stateSearch = input.value.trim(); // this will get the user input from the form

  // save to local storage
  var stateList = JSON.parse(localStorage.getItem("states"));

  if (stateList) {
    searchedStatesArray = stateList;
    if (searchedStatesArray.includes(stateSearch)) {
    } else {
      searchedStatesArray.push(stateSearch);
      localStorage.setItem("states", JSON.stringify(searchedStatesArray));
    }
  } else {
    searchedStatesArray.push(stateSearch);
    localStorage.setItem("states", JSON.stringify(searchedStatesArray));
  }
  printStateList();

  // error handling and function pass through
  if (stateSearch) {
    // if a value is entered, continue
    getStateData(stateSearch); //function for API call here
    input.value = ""; // clears the field for the next search
  } else {
    alert("Please enter a State."); // this will eventually need to be a modal
  }
};

// call function to display list of searched states
printStateList();

// -----------------------------------------Clear Searched States -----------------------------------------
// function to clear searched states
var clearStates = function () {
  localStorage.removeItem("states");
  searchedStatesArray = [];
  searchedStatesEl.textContent = "";
};

// ----------------------------------------- Save Symptoms to Local Storage -----------------------------------------
// function to save symptoms to local storage
var saveSymptoms = function () {
  var symptomList = JSON.parse(localStorage.getItem("symptoms"));
  if (symptomList) {
    symptomsLogArray = symptomList;
  }

  var symptomsArray = [];
  var symptomDate = document.getElementById("dateofsymptoms").value;
  symptomsArray.push(symptomDate);
  var symptomTemp = document.getElementById("aligned-temp").value;
  symptomsArray.push(symptomTemp);

  if ($("#checkbox-radio-chills-yes").is(":checked")) {
    symptomsArray.push("Chills");
  } else {
  }

  if ($("#checkbox-radio-cough-yes").is(":checked")) {
    symptomsArray.push("Cough");
  } else {
  }

  if ($("#checkbox-radio-shortness-yes").is(":checked")) {
    symptomsArray.push("Shortness of Breath or Difficulty Breathing");
  } else {
  }

  if ($("#checkbox-radio-fatigue-yes").is(":checked")) {
    symptomsArray.push("Fatigue");
  } else {
  }

  if ($("#checkbox-radio-aches-yes").is(":checked")) {
    symptomsArray.push("Muscle or Body Aches");
  } else {
  }

  if ($("#checkbox-radio-headache-yes").is(":checked")) {
    symptomsArray.push("Headache");
  } else {
  }

  if ($("#checkbox-radio-loss-yes").is(":checked")) {
    symptomsArray.push("New Loss of Taste or Smell");
  } else {
  }

  if ($("#checkbox-radio-throat-yes").is(":checked")) {
    symptomsArray.push("Sore Throat");
  } else {
  }

  if ($("#checkbox-radio-congestion-yes").is(":checked")) {
    symptomsArray.push("Congestion or Runny Nose");
  } else {
  }

  if ($("#checkbox-radio-nausea-yes").is(":checked")) {
    symptomsArray.push("Nausea or Vommiting");
  } else {
  }

  if ($("#checkbox-radio-diarrhea-yes").is(":checked")) {
    symptomsArray.push("Diarrhea");
  } else {
  }

  symptomsLogArray.push(symptomsArray);

  // save symptoms to local storage
  localStorage.setItem("symptoms", JSON.stringify(symptomsLogArray));
};

// ----------------------------------------- Submit Button -----------------------------------------
form.addEventListener("submit", formSubmitHandler);

// -----------------------------------------Clear All Button -----------------------------------------
// event listener for clear all button
$(clearButtonEl).on("click", function (event) {
  event.preventDefault();
  clearStates();
});

// -----------------------------------------Symptoms List -----------------------------------------
// event listener for collapsible symptoms list
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// ----------------------------------------- State History Clicked On -----------------------------------------
$(searchedStatesEl).on("click", function(event) {
  if (event.target.classList.contains("state-click")) {
    var currentStateClick = event.target.innerHTML;
  }
  else {
    return
  }
  getStateData(currentStateClick);
});

// ----------------------------------------- Save Button for symptoms -----------------------------------------
// event listener for save symptoms button
$(saveButtonEl).on("click", function (event) {
  // if no input for date, alert
  var symptomDate = document.getElementById("dateofsymptoms").value;
  var symptomTemp = document.getElementById("aligned-temp").value;
  if (!symptomDate) {
    alert("Please enter the date.");
  } else if (!symptomTemp) {
    alert("Please enter your temperature.");
  } else if (symptomTemp > 110 || symptomTemp < 95) {
    alert("Please enter a temperature between 95-110 (°F)");
  } else if (
    (!$("#checkbox-radio-chills-yes").is(":checked") &&
      !$("#checkbox-radio-chills-no").is(":checked")) ||
    (!$("#checkbox-radio-cough-yes").is(":checked") &&
      !$("#checkbox-radio-cough-no").is(":checked")) ||
    (!$("#checkbox-radio-shortness-yes").is(":checked") &&
      !$("#checkbox-radio-shortness-no").is(":checked")) ||
    (!$("#checkbox-radio-fatigue-yes").is(":checked") &&
      !$("#checkbox-radio-fatigue-no").is(":checked")) ||
    (!$("#checkbox-radio-aches-yes").is(":checked") &&
      !$("#checkbox-radio-aches-no").is(":checked")) ||
    (!$("#checkbox-radio-headache-yes").is(":checked") &&
      !$("#checkbox-radio-headache-no").is(":checked")) ||
    (!$("#checkbox-radio-loss-yes").is(":checked") &&
      !$("#checkbox-radio-loss-no").is(":checked")) ||
    (!$("#checkbox-radio-throat-yes").is(":checked") &&
      !$("#checkbox-radio-throat-no").is(":checked")) ||
    (!$("#checkbox-radio-congestion-yes").is(":checked") &&
      !$("#checkbox-radio-congestion-no").is(":checked")) ||
    (!$("#checkbox-radio-nausea-yes").is(":checked") &&
      !$("#checkbox-radio-nausea-no").is(":checked")) ||
    (!$("#checkbox-radio-diarrhea-yes").is(":checked") &&
      !$("#checkbox-radio-diarrhea-no").is(":checked"))
  ) {
    alert("Please provide Yes/No response to each symptom.");
  } else {
    saveSymptoms();
  }
});

$("#dateofsymptoms").datepicker({
  maxDate: 0,
});

// Testing Modal
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems, options);
// });

// Or with jQuery