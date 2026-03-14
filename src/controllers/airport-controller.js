const {AirportService} = require("../services");

const airportService = new AirportService();
const create = async function(req, res){
    try {
        const response = await airportService.create(req.body);
        res.status(201).json({
            message : "Successfully created the airport",
            err : {},
            data : response,
            success:true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
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