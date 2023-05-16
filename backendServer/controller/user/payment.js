const instance = require('../../config/razorpay')


async function payment(req,res){
try {
    console.log(req.body)
    const options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        // receipt: "order_rcptid_11"
      };
      const order = await instance.orders.create(options)
      console.log(order)
} catch (error) {
    
}
}



module.exports ={
    payment
}