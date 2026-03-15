const {FlightRepository, AirplaneRepository} = require("../repository");
const CrudService = require("./crud-service");

const flightRepository = new FlightRepository();

class FlightService extends CrudService{
    constructor(){
        super(flightRepository);
        this.airplaneRepository = new AirplaneRepository();
    }
    async create(data){
        try {
            const airplane = await this.airplaneRepository.get(data.airplaneId);
            const flight = await flightRepository.create(
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

    async getAll(data){
        try {
            const flights = flightRepository.getAll(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async update(id, data){
        try {
            const airplane = await this.airplaneRepository.get(data.airplaneId);
            const flightData = {
                    ...data, 
                    totalSeats:airplane.capacity
                };
            const flight = await flightRepository.update(id, flightData);
            return true;
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