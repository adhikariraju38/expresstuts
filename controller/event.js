const Event = require("../models/event");

exports.getEvents = async (req,res) =>{
    Event.find().then((events)=>{
        res.status(200).json({
            events,
        })
    })
}

exports.createEvent = async (req,res) =>{
    try{
        const{
            title,
            type,
            description,
        } = req.body;

        const event = new Event({
            title,
            type,
            description,
        });

        const savedEvent = await event.save();
        res.json(savedEvent);

    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error occured")
    }
};