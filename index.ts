import printAllArrivals from "./ArrivalsFetching/ArrivalPrinting";
import getSortedArrivals from "./ArrivalsFetching/TFLArrivalManager";
import getInput, { rl } from "./getInput";
import getPostcodeLL from "./PostCodeFetching/PostCodeManager";
import getStopPointsFromLatLongSorted from "./StopPointFetching/StopPointManager";



async function start() {
    const postcode = await getInput("Enter postcode: ");
    rl.close();
    const latlong = await getPostcodeLL(postcode);
    const stopPoints = (await getStopPointsFromLatLongSorted(latlong)).slice(0,2);
    for (var stopPoint of stopPoints) {
        let arrivals = await getSortedArrivals(stopPoint.naptanId);
        printAllArrivals(arrivals);
    }
}

start()