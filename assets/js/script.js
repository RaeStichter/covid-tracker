// Variables for the elements on the page
const form = document.querySelector("#form"); // RS added #
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.getElementById("stacked-state");
const apiDataEl = document.getElementById("api-data-display");
var searchedStatesArray = [];
var searchedStatesEl = document.querySelector("#searched-states");

var clearButtonEl = document.querySelector("#clear-btn");

var stateCodeIndex = [
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

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 39.829169, lng: -98.579908 }, //39.82916983397753, -98.57990885339983 geographic center of USA
    mapTypeId: "roadmap",
  });
  // Create a <script> tag and set the USGS URL as the source.
  // const script = document.createElement("script");
  // // This example uses a local copy of the GeoJSON stored at
  // // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  // script.src =
  //   "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  // document.getElementsByTagName("head")[0].appendChild(script);
  eqfeed_callback(latLngStates);
}

// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function (latLngStates) {
  for (let i = 0; i < latLngStates.length; i++) {
    const lat = latLngStates[i].latitude;
    const lng = latLngStates[i].longitude;
    //console.log(lat, lng);
    const latLng = new google.maps.LatLng(lat, lng);
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
  }
};

const latLngCall = function (stateCodeIndex) {};

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

var getStateData = function (stateSearch) {
  console.log("get state data was called, this is where APIS will be called.");

  // get index of state to be used in DisplayData
  var stateIndex = stateCodeIndex.indexOf(stateSearch);
  console.log(stateIndex);

  var apiOpenCovid = "https://api.covidtracking.com/v1/states/current.json";

  fetch(apiOpenCovid).then(function (response) {
    response.json().then(function (data) {
      var apiCovid = "https://api.covid19api.com/summary";
      fetch(apiCovid).then(function (response) {
        response.json().then(function (info) {
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

var displayData = function (stateIndex, data) {
  console.log(stateIndex, data);

  // ------------ Variables for all of the state information
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

var printStateList = function () {
  var stateList = JSON.parse(localStorage.getItem("states"));
  if (stateList) {
    searchedStatesArray = stateList;
  }
  searchedStatesEl.textContent = "";
  for (i = 0; i < searchedStatesArray.length; i++) {
    var searchedState = $("<li>").text(searchedStatesArray[i]);
    $(searchedStatesEl).append(searchedState);
  }
};

var formSubmitHandler = function (event) {
  event.preventDefault(); // prevents default action of browser, we then can specify what to do
  console.log("function was called");

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

// function to clear searched states
var clearStates = function () {
  localStorage.removeItem("states");
  searchedStatesArray = [];
  searchedStatesEl.textContent = "";
};

form.addEventListener("submit", formSubmitHandler);

// event listener for clear all button

$(clearButtonEl).on("click", function (event) {
  event.preventDefault();
  clearStates();
});

// event listener for collapsible symptoms list

// var M = document.querySelector("collapsible-body");

// console.log(M);

// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelector(".collapsible-body");
//   var M = M.Collapsible.init(elems, options);
// });

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
