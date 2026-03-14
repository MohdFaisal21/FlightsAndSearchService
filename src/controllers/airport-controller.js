const {AirportService} = require("../services");
const {SuccessCodes, ServerErrorCodes} = require("../utils/error-codes");
const airportService = new AirportService();
const create = async function(req, res){
    try {
        const response = await airportService.create(req.body);
        res.status(SuccessCodes.OK).json({
            message : "Successfully created the airport",
            err : {},
            data : response,
            success:true
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success : false,
            err: error,
            message : "cannot create a new Airport"
        })
    }
}

module.exports = {
    create,
}