const {CityRepository} = require("../repository");
const CrudService = require("./crud-service");
const cityRepository = new CityRepository();

class CityService extends CrudService{
    constructor(){
        super(cityRepository);
    }
    async getAll(filter){
        try {
            const cities = await cityRepository.getAll({name:filter.name});
            return cities;
        } catch (error) {
            console.log("somthing went wrong at service layer");
            throw error;
        }
    }
}


module.exports = CityService;