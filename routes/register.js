const express = require("express");
const Register = require("../models/registration");
const router = express.Router();

router.post('/registerEvent', async (request, response, next) => {
  try {
    const { email, eventName, paymentMode, paid } = request.body;
    console.log(request.body);

    // Check if the email already exists in the database
    const existingData = await Register.findOne({ Email: email });

    if (existingData) {
      // Check if the user is already registered for this event
      const isRegisteredForEvent = existingData.EventsRegistered.some(event => event.eventName === eventName);

      if (isRegisteredForEvent) {
        // User is already registered for the event
        return response.status(200).json({
          message: "Already Registered to this event"
        });
      }

      // User is not registered for the event, add the registration
      existingData.EventsRegistered.push({
        paymentMode: paymentMode,
        eventName: eventName,
        Paid: paid
      });

      await existingData.save();

      return response.status(200).json({
        message: "Registered Successfully"
      });
    } else {
      // User does not exist, create a new registration
      const newRegistration = new Register({
        Email: email,
        EventsRegistered: [{
          paymentMode: paymentMode,
          eventName: eventName,
          Paid: paid
        }]
      });

      await newRegistration.save();

      return response.status(200).json({
        message: "Registered Successfully"
      });
    }
  } catch (error) {
    // Handle unexpected errors
    console.error(error);

    return response.status(500).json({
      error: "Internal Server Error"
    });
  }
});

module.exports = router;
