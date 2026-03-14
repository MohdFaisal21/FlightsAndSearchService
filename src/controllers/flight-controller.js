const {FlightService} = require("../services");

const flightService = new FlightService();

const create = async function(req, res){
    try {
        let data = {
            flightNumber:req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price,
            boardingGate : req.body.boardingGate,
            totalSeats : req.body.totalSeats
        }
        const flight = await flightService.createFlight(data);
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