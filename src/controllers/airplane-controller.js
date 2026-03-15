const {AirplaneService} = require("../services");
const {SuccessCodes, ServerErrorCodes} = require("../utils/error-codes")
const airplaneService = new AirplaneService();

const create = async function(req, res){
    try {
        let data = {
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        }
        const response = await airplaneService.create(data);
        res.status(SuccessCodes.CREATED).json({
            message : "Successfully created an airplane",
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
            message : "cannot create a new airplane"
        })
    }
}


const destroy = async function(req, res){
    try {
        let {id} = req.params;
        const response = await airplaneService.destroy(id);
        res.status(SuccessCodes.OK).json({
            message : "Successfully deleted an airplane",
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
            message : "cannot delete an airplane"
        })
    }
}


const getAll = async function(req, res){
    try {
        const response = await airplaneService.getAll();
        res.status(SuccessCodes.OK).json({
            message : "Successfully fetched all the aeroplanes",
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
            message : "cannot fetch all the aeroplanes"
        })
    }
}


const get = async function(req, res){
    try {
        let {id} = req.params;
        const response = await airplaneService.get(id);
        res.status(SuccessCodes.OK).json({
            message : "Successfully fetched airplane",
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
            message : "cannot fetched an airplane"
        })
    }
}



const update = async function(req, res){
    try {
        let {id} = req.params;
        let data = {
            modelNumber  : req.body.modelNumber,
            capacity : req.body.capacity
        }
        const response = await airplaneService.update(id, data);
        res.status(SuccessCodes.OK).json({
            message : "Successfully updated an airplane",
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
            message : "cannot update an airplane"
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    getAll,
    update
}