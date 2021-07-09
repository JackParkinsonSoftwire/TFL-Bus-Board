import makeAPIRequest from "../FetchFromAPI";
import { PostcodeLL } from "../PostCodeFetching/Postcode";
import getPostcodeLL from "../PostCodeFetching/PostCodeManager";
import { StopPoint } from "./StopPoint";
import { StopPointsPOST } from "./StopPointPOST"

export default async function getStopPointsFromLatLongSorted(latlong: PostcodeLL):Promise<StopPoint[]>{
    return (makeStopPointRequest(latlong)).then((POST)=>{
        return POST.data.stopPoints.sort((sp1, sp2) => sp1.distance - sp2.distance);
    });
}

function makeStopPointRequest(latlong: PostcodeLL){
    const lat = latlong.latitude;
    const long = latlong.longitude;
    return makeAPIRequest<StopPointsPOST>(`https://api.tfl.gov.uk/StopPoint?stopTypes=NaptanPublicBusCoachTram&lat=${lat}&lon=${long}&radius=400`);
}

async function start() {
    console.log(await getStopPointsFromLatLongSorted(await getPostcodeLL("N2 9DU")));
}

//start();