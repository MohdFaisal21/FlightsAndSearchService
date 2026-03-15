const {City} = require("../models");
const CrudRepository = require("./crud-repository");
const {Op, where} = require("sequelize");
class CityRepository extends CrudRepository{
    constructor(){
        super(City);
    }
    async getAll(filter){
        try {
            if(filter.name){
                const cities = await City.findAll(
                    {
                        where:{
                            name:{
                                [Op.startsWith]: filter.name
                            }
                        }
                    }
                );
                return cities;
            }else{
                const cities = await City.findAll();
                return cities;
            }
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
}
module.exports = CityRepository;