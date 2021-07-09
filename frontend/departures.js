//import getBusesFromPostcode from "../EndPoints/fetchBusesFromPostcode";

function respondToFormWithDepartures(postcode) {
    console.log("Received postcode: " + postcode.value);
    callForDepartures(postcode.value)
}

function callForDepartures(postcode) {
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', `http://localhost:3000/departureBoards/${postcode}`, true);

    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.onload = function() {
        if (xhttp.status < 200 || xhttp.status > 299) {
            var errorMessage = document.createElement("h2");
            errorMessage.innerHTML = "An error has occured. Please try again with a new postcode.";
            document.getElementById("results").appendChild(errorMessage);
        }
        // Handle response here using e.g. xhttp.status, xhttp.response, xhttp.responseText
    }

    xhttp.send();
}