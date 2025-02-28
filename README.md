# L1 Dry Cleaners

## Project Setup

### Prerequisites
- Node.js
- MongoDB

### Client Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the client:
   ```bash
   npm start
   ```

### Server Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following content:
   ```env
   MONGO_URI=mongodb://localhost:27017/l1drycleaners
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Features

### User Registration
- Register with mobile number and OTP verification.

### Delivery Tracking
- Track delivery status: Pickup, Under Process, Drop.

### Ratings and Reviews
- Customers can rate and review after receiving washed clothes.

### Payment
- UPI payment method integration.

### Admin Dashboard
- Admin login with ID: `admin123` and Password: `Admin@123` for testing.
