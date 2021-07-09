import getSortedArrivals from "../ArrivalsFetching/TFLArrivalManager";
import getPostcodeLL from "../PostCodeFetching/PostCodeManager";
import getStopPointsFromLatLongSorted from "../StopPointFetching/StopPointManager";


export default async function getBusesFromPostcode(postcode:string) {
    try{
        let latlong = await getPostcodeLL(postcode);
        const stopPoints = (await getStopPointsFromLatLongSorted(latlong));
        let arrivalsStops = []
        let arrivals;
        for (let stopPoint of stopPoints) {
            arrivals = await getSortedArrivals(stopPoint.naptanId);
            arrivalsStops.push(arrivals);
        }   
        return arrivals;
    }
    catch (Err){
        throw new Error(`The postcode ${postcode} is invalid.`);
    }
}