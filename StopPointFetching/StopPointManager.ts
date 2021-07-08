import makeAPIRequest from "../FetchFromAPI";
import { PostcodeLL } from "../PostcodeFetching/Postcode";
import getPostcodeLL from "../PostCodeFetching/PostCodeManager";
import { StopPointsPOST } from "./StopPointPOST"

async function getStopPointFromLatLong(latlong: PostcodeLL):Promise<StopPoint[]>{
    return (makeStopPointRequest(latlong)).then((POST)=>{
        return POST.data.stopPoints;
    });
}

function makeStopPointRequest(latlong: PostcodeLL){
    return makeAPIRequest<StopPointsPOST>(`https://api.postcodes.io/postcodes/${postcode}`);
}

async function start() {
    console.log(await getStopPointFromLatLong(await getPostcodeLL("N2 9DU")));
}

start();