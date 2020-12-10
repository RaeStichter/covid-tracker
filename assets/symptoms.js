var symptomsEl = document.querySelector("#symptoms-container");
var clearSymptomsBtnEl = document.querySelector("#clear-symptoms-btn")


var displaySymptoms = function() {
    var symptomList = JSON.parse(localStorage.getItem("symptoms"));
    if (symptomList) {
        for (i = 0; i < symptomList.length; i++) {
        // for (i = symptomList.length; i >= 0; i--) {
            let symptomsArray = [];
            var div = document.createElement("div");
            div.classList.add("card-panel");
            div.classList.add("card-background");
            var date = document.createElement("p");
            date.classList.add("card-date");
            let temp = document.createElement("p");
            let symptoms = document.createElement("ul");
            
            for (j = 0; j < symptomList[i].length; j++) {
                console.log("working");
                if (j === 0) {
                    date.textContent = symptomList[i][j];
                    div.appendChild(date);
                }
                if (j === 1) {
                    temp.textContent = "Temperature (°F): " + symptomList[i][j];
                    div.appendChild(temp);
                }
                if (j > 1) {
                symptomsArray.push(symptomList[i][j]); 
                }     
            }
            console.log(symptomsArray);
            for (l = 0; l < symptomsArray.length; l++) {
                let li = document.createElement("li");
                // li.addClass = 
                li.textContent = symptomsArray[l];
                symptoms.appendChild(li);
            }     
            div.appendChild(symptoms);
            symptomsEl.appendChild(div);
        }
    }
    else {
        symptomsEl.classList.add("no-symptoms");
        symptomsEl.textContent = "     No symptoms tracked yet."
    }
}

displaySymptoms();

// function to clear all symptom data
var clearSymptoms = function () {
    localStorage.removeItem("symptoms");
    symptomList = [];
    symptomsEl.textContent= "";
  };

// event listener for clear all symptoms button

$(clearSymptomsBtnEl).on("click", function (event) {
    event.preventDefault();
    clearSymptoms();
  });