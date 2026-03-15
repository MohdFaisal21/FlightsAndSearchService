const CrudService = require("./crud-service");
const {AirplaneRepository} = require("../repository");
const airplaneRepository = new AirplaneRepository();

class AirplaneService extends CrudService{
    constructor(){
        super(airplaneRepository);
    }
}
module.exports = AirplaneService;
