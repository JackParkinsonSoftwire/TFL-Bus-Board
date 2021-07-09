//import getBusesFromPostcode from "../EndPoints/fetchBusesFromPostcode";

function callForDepartures(postcodeContainer) {
    var postcode = postcodeContainer.value;
    console.log("This is being entered.")
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', `http://localhost:3000/departureBoards/${postcode}`, true);

    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.onload = function() {
        if (xhttp.status < 200 || xhttp.status > 299) {
            var errorMessage = document.createElement("h2");
            errorMessage.innerHTML = "An error has occured. Please try again with a new postcode.";
            document.getElementById("results").appendChild(errorMessage);
        }
        var stopsArrivals = JSON.parse(xhttp.response);
        console.log(stopsArrivals);
        // Handle response here using e.g. xhttp.status, xhttp.response, xhttp.responseText
        
        if (stopsArrivals === [] || stopsArrivals === [[]]) {
            var errorMessage = document.createElement("h2");
            errorMessage.innerHTML = "An error has occured. Please try again with a new postcode.";
            document.getElementById("results").appendChild(errorMessage);
        } else {
            for (var stop of stopsArrivals) {
                if (stop.length === 0) {
                    continue;
                }
                var nameOfStop = document.createElement("h3");
                nameOfStop.innerHTML = "Arrivals for stop " + stop[0].stationName + ":";
                document.getElementById("results").appendChild(nameOfStop);

                var orderedListOfArrivals = document.createElement("ol");
                document.getElementById("results").appendChild(orderedListOfArrivals);

                for (var arrival of stop) {
                    var arrivalElem = document.createElement("li");
                    arrivalElem.innerHTML = "Bus on line " + arrival.lineName + " to " + arrival.destinationName + " arriving in " + Math.floor(arrival.timeToStation / 60)  + " minutes.";
                    document.getElementById("results").appendChild(arrivalElem);
                }
            }
        }
    }
    xhttp.send();
}