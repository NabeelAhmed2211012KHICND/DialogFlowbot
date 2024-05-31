
# DialogFlow ES Bot and REST API for Order Status

## Overview

This project contains a DialogFlow ES bot designed to handle order status inquiries and a REST API to process webhook requests from the bot. The bot interacts with users to fetch the shipment date for a given order ID by querying an external API.

## Project Structure

- **DialogFlow ES Agent**: The conversational agent setup in DialogFlow ES.
- **REST API**: A backend service to handle webhook requests from the DialogFlow agent and fetch shipment dates from an external API.

## Setup

### Prerequisites

- Node.js and npm (for running the REST API)
- Ngrok (for exposing the local server to the internet)
- A DialogFlow ES account

### DialogFlow ES Agent

1. **Import Agent**:
   - Download the provided zip file containing the DialogFlow ES agent.
   - Go to the DialogFlow ES console.
   - Click on the settings gear icon next to your agent's name, and select the `Export and Import` tab.
   - Choose `IMPORT FROM ZIP` and upload the provided zip file.

### REST API

1. **Clone the Repository**:
 
   git clone https://github.com/yourusername/rest-api-order-status.git(https://github.com/NabeelAhmed2211012KHICND/DialogFlowbot.git)
   cd rest-api-order-status


2. **Install Dependencies**:

   npm install
"{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "body-parser": "^1.19.0",
    "axios": "^0.21.1",
    "luxon": "^2.0.2"
  }
}
"


3. **Run the Server**:
 "npm start"

4. **Expose the Server using Ngrok**:
 
   ngrok http 5000
   
   Note the forwarding URL provided by ngrok  https://1de7-202-47-45-125.ngrok-free.app`

### Configuration in DialogFlow


## API Details

### Request

**Endpoint**: `https://orderstatusapi-dot-organization-project-311520.uc.r.appspot.com/api/getOrderStatus`

**Method**: `POST`

**Request Body**:
{
    "queryResult": {
        "parameters": {
            "order-id": ["123213"]
        }
    }
}


### Response

**Response Body**:
{
  "fulfillmentText": "Your order with ID 123213 will be shipped on Saturday, 01 Jun 2024"
}
