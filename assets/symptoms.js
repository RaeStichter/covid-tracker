var symptomsEl = document.querySelector("#symptoms-container");


var displaySymptoms = function() {
    var symptomList = JSON.parse(localStorage.getItem("symptoms"));
    console.log(symptomList);
    for (i = 0; i < symptomList.length; i++) {
        let symptomsArray = [];
        var div = document.createElement("div");
        var date = document.createElement("p");
        let temp = document.createElement("p");
        let symptoms = document.createElement("ul");
        for (j = 0; j < symptomList[i].length; j++) {
            console.log("working");
            if (j === 0) {
                date.textContent = symptomList[i][j];
                div.appendChild(date);
            }
            if (j === 1) {
                temp.textContent = symptomList[i][j];
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

displaySymptoms();