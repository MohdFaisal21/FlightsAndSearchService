const {FlightRepository, AirplaneRepository} = require("../repository");


class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.fligtRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.fligtRepository.createFlight(
                {
                    ...data, 
                    totalSeats:airplane.capacity
                });
            return flight;
        } catch (error){
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async getAllFligths(data){
        try {
            const flights = this.fligtRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

}

module.exports = FlightService;

/*
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    arrivalTime,
    departureTime,
    price
*/