import getBusesFromPostcode from "./fetchBusesFromPostcode"

import express from "express";
const app = express();
const port = 3000;

async function getArrivalData(req: express.Request, res: express.Response){
  console.log("Request made.");
  try{
    let stopsArrivals = await getBusesFromPostcode(req.params.postCode);
    console.log(stopsArrivals);
    res.send(stopsArrivals);
  }
  catch(Err){
    console.log(Err.message);
    throw Error;
  }
}

app.get('/departureBoards/:postCode', getArrivalData);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

