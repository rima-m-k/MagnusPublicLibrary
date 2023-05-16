const EVENT = require("../../model/eventDataschema")
async function allEvents(req,res){
    try{
        const eventData = await EVENT.find({},{guests:0,Images:0})
        res.json(eventData)
    }catch(error){
        console.log(error)
        console.log("Internal server error")
        res.status(500).send({message: "Internal server error"});
      
    }
}

async function fetchSingleEvent (req,res){
    try{
        const singleEventData = await EVENT.findById({_id:req.params.id},{guests:0})
        res.json(singleEventData)
    }catch(error){
        console.log(error)
        console.log("Internal server error")
        res.status(500).send({message: "Internal server error"});
      
    }
}
 module.exports ={allEvents,fetchSingleEvent}