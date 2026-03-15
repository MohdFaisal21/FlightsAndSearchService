const {Airplane} = require("../models");
const CrudRepositoty = require("./crud-repository");

class AirplaneRepository extends CrudRepositoty{
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepository;