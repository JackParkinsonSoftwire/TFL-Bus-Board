import { Arrival } from "./Arrivals";

export default function printAllArrivals(arrivals:Arrival[]) {
    let arrivalsTable:ArrivalOutput[] = arrivals.map((arrival)=>{
        return new ArrivalOutput(arrival)
    });
    if (arrivals.length !== 0){
        console.log("BUS TIMETABLE: " + arrivals[0].stationName);
        console.table(arrivalsTable, ["lineName", "destinationName", "timeToStation"]);
    } else {
        console.log("No arrivals available.");
    }
}


class ArrivalOutput{
    lineName: string;
    destinationName: string;
    timeToStation: number;
    constructor(arrival:Arrival){
        this.lineName=arrival.lineName;
        this.destinationName=arrival.destinationName;
        this.timeToStation=arrival.timeToStation;
    }
}