import { Arrival } from "./Arrivals";

export default function printAllArrivals(arrivals:Arrival[]) {
    let arrivalsTable:ArrivalOutput[] = arrivals.map((arrival)=>{
        return new ArrivalOutput(arrival)
    });
    console.log("BUS TIMETABLE: " + arrivals[0].stationName);
    console.table(arrivalsTable, ["lineName", "destinationName", "timeToStation"]);
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