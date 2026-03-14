const CrudService = require("./crud-service");

const {AirportRepository} = require("../repository");
const airportRepository = new AirportRepository();
class AirportService extends CrudService{
    constructor(){
        super(airportRepository);
    }
}

module.exports = AirportService;