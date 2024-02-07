const express = require("express");
const Register = require("../models/registration");
const router = express.Router();

router.post('/registerEvent',  async (request, response, next) => {
    try {
    const {email, eventName, paymentMode, paid} = request.body;
    console.log(request.body);
    const existingData = await Register.findOne({ Email: email });
    if (existingData) {
        const isRegisteredForEvent = existingData.EventsRegistered.some(event => event.eventName === eventName);
        if (isRegisteredForEvent) {
          response.status(200).json({
            "message": "Already Registered to this event"
          });
        } else {
          existingData.EventsRegistered.push({
            paymentMode: paymentMode,
            eventName: eventName,
            Paid: paid
          });
          await existingData.save();
      
          response.status(200).json({
            "message": "Registered Successfully"
          })
        }
      } else {
        const newRegistration = new Register({
          Email: email,
          EventsRegistered: [{
            paymentMode: paymentMode,
            eventName: eventName,
            Paid: paid
          }]
        });
        await newRegistration.save();
        response.status(200).json({
            "message": "Registered Successfully"
          })
      }
    }catch(error){
        response.status(400).json(
            {
                "error": error.message,
            }
        )
    }

})

module.exports = router;