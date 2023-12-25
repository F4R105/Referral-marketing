# Referral-marketing

## Goals
- When a new user (referrer or referee) signs up, their account information is stored in the
database, and a unique user ID is assigned.

- When a referee signs up using a referral link or code, the system records the
relationship between the referrer and referee by associating their user IDs.

- When a referee makes a purchase using the referral link or code, the purchase
details are recorded, including the product(s) purchased and the purchase
amount.

- The system maintains a record of the referrer's earnings, which can be accessed
through the user's profile or a dedicated earnings dashboard.

- User Authentication: Implement API endpoints for user login and logout.

- Referral Program Settings: Allow administrators to configure program parameters, such as reward value, expiration dates, and eligibility criteria.

- The reward calculation logic is implemented in the backend.

## Tasks

### Client

#### Screens

Create screens or components for user registration, login, referral tracking, and viewing
rewards etc based on the api models and activities.
Ensure a responsive, visually appealing, and user-friendly interface.

### Server

#### API Endpoints

##### Admin endpoints
- POST /api/admin/referrals (Add a new referral)
- GET /api/admin/referrals (View all referrals - admin)
- PUT /api/admin/referrals/{id} (Update referral details - admin)
- POST /api/admin/products (Add a new product)

##### User endpoints

###### Auth
- POST /api/register (User Registration)
- POST /api/login (User Login)
- POST /api/logout (User Logout)

###### User
- GET /api/user/referrals (View user's referral history)
- POST /api/user/referrals/{id}/purchase (Simulate a referred user making a
purchase)
- GET /api/products (View all products)
- POST /api/user/orders (Create a new order)
- GET /api/user/orders (View user's order history)
- POST /api/user/orders/{id}/payment

#### Models
- Referrals
- Users
- Products
- Orders
- Order products
- Transactions

## Features

- Automated reward system
- Payment system