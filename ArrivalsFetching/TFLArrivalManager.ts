import makeAPIRequest from "../FetchFromAPI";
import { ArrivalsPOST } from "./ArrivalPOST";
import printAllArrivals from "./ArrivalPrinting";
import {Arrival} from "./Arrivals"

export default async function getSortedArrivals(stopCode:string) {
    const arrivalList:Promise<Arrival[]> = fetchAllArrivals(stopCode);
    return arrivalList.then((arrivalPOST) => arrivalPOST
        .sort((arrivalA, arrivalB) => arrivalA.timeToStation - arrivalB.timeToStation))
}

async function fetchAllArrivals(stopCode:string):Promise<Arrival[]> {
    return makeTFLArrivalRequest(stopCode).then((arrivalPOST) => arrivalPOST.data);
}

function makeTFLArrivalRequest(stopCode: string){
    return makeAPIRequest<ArrivalsPOST>(`https://api.tfl.gov.uk/StopPoint/${stopCode}/Arrivals`);
}
async function start(){
    printAllArrivals(await getSortedArrivals("490008660N"));
}
start();