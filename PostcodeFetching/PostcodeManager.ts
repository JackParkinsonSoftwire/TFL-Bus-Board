import makeAPIRequest from "../FetchFromAPI";
import { PostcodeLL } from "./Postcode";
import { PostcodePOST } from "./PostcodePOST";


export default async function getPostcodeLL(postcode: string):Promise<PostcodeLL>{
    return (makePostcodeRequest(postcode)).then((POST)=>{
        return POST.data.result;
    });
}

function makePostcodeRequest(postcode: string){
    return makeAPIRequest<PostcodePOST>(`https://api.postcodes.io/postcodes/${postcode}`);
}

async function start() {
    console.log(await getPostcodeLL("N2 9DU"));
}

// start();