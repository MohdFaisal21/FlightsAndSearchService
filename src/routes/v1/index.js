const express = require("express");

const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");
const AirplaneController = require("../../controllers/airplane-controller");
const {FlightMiddlewares} = require("../../middlewares");
const router = express.Router();

// city
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);

// Flight
router.post("/flights", FlightMiddlewares.validateCreateFlight, FlightController.create);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
router.patch("/flights/:id", FlightController.update);
router.delete("/flights/:id", FlightController.destroy);


// Airport
router.post("/airports", AirportController.create);
router.delete("/airports/:id", AirportController.destroy);
router.get("/airports/:id", AirportController.get);
router.get("/airports", AirportController.getAll);
router.patch("/airports/:id", AirportController.update);

// Airplane
router.post("/airplanes", AirplaneController.create);
router.get("/airplanes/:id", AirplaneController.get);
router.get("/airplanes", AirplaneController.getAll);
router.patch("/airplanes/:id", AirplaneController.update);
router.delete("/airplanes/:id", AirplaneController.destroy);



module.exports = router;
