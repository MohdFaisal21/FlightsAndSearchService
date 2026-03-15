const {CityService} = require('../services');
const {SuccessCodes, ServerErrorCodes} = require("../utils/error-codes");

const cityService = new CityService();

const create = async function(req, res){
    try {
        const city = await cityService.create(req.body);
        return res.status(SuccessCodes.OK).json({
            data : city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success : false,
            message: "Not able to create a city",
            err : error
        })
    }
}

const destroy = async function(req, res){
    try {
        console.log(req.params.id);
        const response = await cityService.destroy(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data : response,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success : false,
            message: "Not able to delete a city",
            err : error
        })
    }
}

const get = async function(req, res){
    try {
        const response = await cityService.get(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data : response,
            success: true,
            message: "Successfully fetched a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success : false,
            message: "Not able to get a city",
            err : error
        })
    }
}

const update = async function(req, res){
    try {
        const city = await cityService.update(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data : city,
            success: true,
            message: "Successfully updated a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success : false,
            message: "Not able to update a city",
            err : error
        })
    }
}
const getAll = async function(req, res){
    try {
        const city = await cityService.getAll(req.query);
        return res.status(SuccessCodes.OK).json({
            data : city,
            success: true,
            message: "Successfully fetched all cities",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success : false,
            message: "Not able to fetch the cities",
            err : error
        });
    }
}
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}