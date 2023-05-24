## **Crypto Monitor App**

This is an assignment Next.js application that allows users to select trading token pairs and view the current state of the order book for those pairs. The application utilizes the Orderbook API to fetch order book data and provides a real-time WebSocket subscription to receive updates.

To implement the application, we use **Next.js**, a React framework for server-side rendering and building web applications.

**Key Features:**

**Token Pair Selector:** Users can choose trading token pairs from a list similar to the user experience on matcha.xyz. This allows users to select their preferred pairs for viewing the order book.

**Order Book Display:** The application will fetch the current state of the order book using the 0x Orderbook API. The retrieved data will be displayed on the screen, similar to the order book view on bybit.com.

**Real-time Updates:** The application will subscribe to the WebSocket service provided by the 0x Orderbook API. This will enable the application to receive real-time updates to the order book and reflect those updates on the user interface. Users will see the order book dynamically updating as new data becomes available.

**Deployment:**
To deploy the application, we are using services like **Netlify**. These platforms offer easy deployment and hosting for Next.js applications.


## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm run dev`  

To Visit App:

`localhost:3000`

To Run Test Suite:  

`npx cypress open`  
