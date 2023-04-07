const USERDATA =  require('../../model/userSchema')
const bcrypt = require('bcrypt')
  
async function userSignup (req,res) {
    console.log( req.body)
let checkUser= await USERDATA.findOne({email:req.body.email})
console.log(checkUser)
if (!checkUser) {
    res.status(401).send({message: "Email not found"});
} else {
if( checkUser && req.body.email === checkUser.email){
    res.json({message:"email already taken"})
}else{
    const user = new USERDATA({
        name: req.body.name,
        phone:req.body.phone,
        email:req.body.email, 
        password:await bcrypt.hash(req.body.password, 10),
        address:[{
            address1:req.body.address1,
            address2:req.body.address2,
            city:req.body.city,
            state:req.body.state,
            country:req.body.country,
            pincode:req.body.pincode,    
        }]
    })
    await user.save()
    res.json('successfully registered')
} 
}

}
module.exports ={userSignup}