const {Flight} = require("../models");
const {Op} = require("sequelize");

class FlightRepository{#createFilter(data){
    const filter = {};

    if(data.arrivalAirportId){
        filter.arrivalAirportId = data.arrivalAirportId;
    }

    if(data.departureAirportId){
        filter.departureAirportId = data.departureAirportId;
    }

    if(data.minPrice && data.maxPrice){
        filter.price = {
            [Op.between]: [data.minPrice, data.maxPrice]
        };
    } 
    else if(data.minPrice){
        filter.price = {
            [Op.gte]: data.minPrice
        };
    } 
    else if(data.maxPrice){
        filter.price = {
            [Op.lte]: data.maxPrice
        };
    }
    return filter;
    }
    async createFlight(data){
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async getFlight(flightId){
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
           console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    
    async getAllFlights(data){
        try {
            const filter = this.#createFilter(data);
            const flights = await Flight.findAll({
                where:filter
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

}

module.exports = FlightRepository;
