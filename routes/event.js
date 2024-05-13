const express = require("express");
const { getEvents, createEvent } = require("../controller/event");

const router = express.Router();

router.get("/event",getEvents);
router.post("/event/new", createEvent);

module.exports = router;
