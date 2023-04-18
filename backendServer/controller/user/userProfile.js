const USER = require('../../model/userSchema')

async function userProfile (req,res) {
try {
    if(req.session.userID){

    
    console.log(req.session.userID)
    let userData = await USER.findOne({_id:req.session.userID},{password:0,_id:0})
    console.log(userData)
    res.json({user:userData})
    } else {
        res.status(440).send({message:"Session expired login to continue "})
    }
} catch (error) {  
    console.log(error);
    console.log("Internal server error")
    res.status(500).send({message: "Internal server error"}); 
  
}
}
module.exports ={
    userProfile
}