const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { DateTime } = require('luxon');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
    try {
        const payload = req.body;
        console.log('Received payload:', payload);
        
        const orderId = payload.queryResult.parameters['order-id'][0];
        console.log('Order ID:', orderId);

        const shipmentDate = await fetchShipmentDate(orderId);
        const response = `Your order with ID ${orderId} will be shipped on ${shipmentDate}`;
        
        console.log('Response to be sent:', response);
        res.json({ fulfillmentText: response });
    } catch (error) {
        console.error('An error occurred:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

async function fetchShipmentDate(orderId) {
    const url = "https://orderstatusapi-dot-organization-project-311520.uc.r.appspot.com/api/getOrderStatus";
    const payload = { orderId };
    console.log('Sending request to external API with payload:', payload);

    try {
        const response = await axios.post(url, payload);
        console.log('Received response from external API:', response.data);

        const shipmentDateStr = response.data.shipmentDate;
        const shipmentDate = DateTime.fromISO(shipmentDateStr).toFormat('EEEE, dd LLL yyyy');
        console.log('Formatted shipment date:', shipmentDate);

        return shipmentDate;
    } catch (error) {
        console.error('Failed to fetch shipment date:', error.message);
        throw new Error(`Failed to fetch shipment date: ${error.message}`);
    }
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
