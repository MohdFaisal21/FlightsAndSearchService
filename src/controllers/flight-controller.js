const {FlightService} = require("../services");

const flightService = new FlightService();

const create = async function(req, res){
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(200).json(
            {
            data : flight,
            succes:true,
            err : {},
            message : "Succesfully created a flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : "Not able to create a flight",
            error
        });
    }
}

const getAll = async function(req, res){
    try {
        const flights = await flightService.getAllFligths(req.query);
        return res.status(200).json(
            {
            data : flights,
            succes:true,
            err : {},
            message : "Succesfully created a flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : "Not able to fetch the flights",
            error
        });
    }
}



module.exports = {
    create,
    getAll
}