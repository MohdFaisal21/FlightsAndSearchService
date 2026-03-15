const {FlightService} = require("../services");
const {SuccessCodes, ServerErrorCodes} = require("../utils/error-codes");
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
        const flight = await flightService.create(data);
        return res.status(SuccessCodes.CREATED).json(
            {
            data : flight,
            succes:true,
            err : {},
            message : "Succesfully created a flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message : "Not able to create a flight",
            error
        });
    }
}

const getAll = async function(req, res){
    try {
        const flights = await flightService.getAll(req.query);
        return res.status(SuccessCodes.OK).json(
            {
            data : flights,
            succes:true,
            err : {},
            message : "Succesfully created a flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message : "Not able to fetch the flights",
            error
        });
    }
}


const get = async function(req, res){
    try {
        let {id} = req.params;
        const flights = await flightService.get(id);
        return res.status(SuccessCodes.OK).json(
            {
            data : flights,
            succes:true,
            err : {},
            message : "Succesfully fetched a flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message : "Not able to fetch a flight",
            error
        });
    }
}


const update = async function(req, res){
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
        const response = await flightService.update(req.params.id, data);
        return res.status(SuccessCodes.OK).json(
            {
            data : response,
            succes:true,
            err : {},
            message : "Succesfully updated a flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message : "Not able to update a flight",
            error
        });
    }
}



const destroy = async function(req, res){
    try {
        let {id} = req.params;
        const response = await flightService.destroy(id);
        return res.status(SuccessCodes.OK).json(
            {
            data : response,
            succes:true,
            err : {},
            message : "Succesfully deleted a flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message : "Not able to delete a flight",
            error
        });
    }
}

module.exports = {
    create,
    getAll,
    get,
    update,
    destroy
}