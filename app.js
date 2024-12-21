// const express = require("express");
// const bodyParser = require("body-parser");
// const axios = require("axios");

// const app = express();
// app.use(bodyParser.json());

// // Your Google Maps API key
// const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

// // POST endpoint to calculate route details
// app.post("/getDetails", async (req, res) => {
//     const { pickup, dropoff } = req.body;

//     // Validate input
//     if (!pickup || !dropoff) {
//         return res.status(400).json({ error: "Pickup and Dropoff locations are required." });
//     }

//     try {
//         // Call Google Maps Distance Matrix API
//         const response = await axios.get(
//             `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(
//                 pickup
//             )}&destinations=${encodeURIComponent(dropoff)}&key=${GOOGLE_MAPS_API_KEY}`
//         );

//         const data = response.data;

//         // Check for valid response
//         if (data.status !== "OK" || data.rows[0].elements[0].status !== "OK") {
//             return res.status(400).json({ error: "Unable to calculate route. Please check the locations." });
//         }

//         // Extract distance and duration
//         const distanceInMeters = data.rows[0].elements[0].distance.value; // in meters
//         const durationInSeconds = data.rows[0].elements[0].duration.value; // in seconds
//         const distanceInKm = (distanceInMeters / 1000).toFixed(2); // Convert meters to kilometers
//         const durationInMinutes = Math.ceil(durationInSeconds / 60); // Convert seconds to minutes

//         // Pricing logic: ₹22 per kilometer
//         const pricePerKm = 22;
//         const totalPrice = (distanceInKm * pricePerKm).toFixed(2);

//         // Send response
//         res.json({
//             distance: `${distanceInKm} km`,
//             duration: `${durationInMinutes} minutes`,
//             price: `₹${totalPrice}`,
//         });
//     } catch (error) {
//         console.error("Error fetching data from Google Maps API:", error.message);
//         res.status(500).json({ error: "Internal server error. Please try again later." });
//     }
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

