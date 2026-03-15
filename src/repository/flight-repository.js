const {Flight} = require("../models");
const {Op} = require("sequelize");
const CrudRepositoty = require("./crud-repository");

class FlightRepository extends CrudRepositoty{

    constructor(){
        super(Flight);
    }

    #createFilter(data){
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
    async getAll(data){
        try {
            const filter = this.#createFilter(data);
            console.log(filter);
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
