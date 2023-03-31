const bcrypt= require("bcrypt")
const USERDATA = require('../../model/userSchema')
const jwt = require('jsonwebtoken');

async function userLogin (req,res) {
    try{
        const createToken = (id) => {
            return jwt.sign({id} , 'magnus public library' )
        }
        const user =  await USERDATA.findOne({email:req.body.email})
        if(user){
            const checkPassword = await bcrypt.compare(req.body.password,user.password)
            console.log(checkPassword)
            if(checkPassword=== true){
                const token= createToken(user._id)
                res.cookie('token ', token);
                res.json({message:'login successful',token:token})
            }else{
                res.status(401).send({message:'invalid email or password'})
            }
        }else{
            res.status(401).send({message:'email not registered'})

        }
            
    }
    catch (err){
        console.log(err) 
        res.status(500).send("internal error")
    }
}
module.exports ={userLogin} 