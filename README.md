# Razorpay Integration Demo with React

This repository contains a demo for integrating Razorpay with a React application.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a Razorpay account.

## Setting Up and Running the Application

Follow these steps to get the application up and running:

1. **Clone the Repository**: Use the following command to clone this repository to your local machine:

    ```bash
    git clone <repository_url>
    ```

2. **Install Dependencies**: Navigate to both the client and server directories in separate terminal windows and install the necessary dependencies using npm:

    ```bash
    cd client
    npm install
    ```

    ```bash
    cd server
    npm install
    ```

3. **Set Up Razorpay**: Log in to your Razorpay account and retrieve your `RAZORPAY_KEY_ID` and `RAZORPAY_SECRET`.

4. **Configure Environment Variables**: Duplicate the `.env_example` file in both the client and server directories, rename it to `.env`, and replace the placeholders with your Razorpay credentials.

5. **Run the Application**: Finally, you can start both the client and server:

   ```bash
    cd client
    npm start
    ```

    ```bash
    cd server
    npm start
    ```

That's it! You should now have the Razorpay Integration Demo running on your local machine.
