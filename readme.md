# 👥 Contacts Rest API


This project is a simple REST API for managing contacts. It allows you to create, read, update, and delete contacts using standard HTTP methods. Built using Node.js and Express, it provides a lightweight and efficient way to handle contact data.

## Features

- Create a new contact with a name, email, and phone number.
- Retrieve a list of all contacts.
- Retrieve a specific contact by ID.
- Update the information for an existing contact.
- Delete a contact by ID.

## User Authentication and Authorization

Users can register and log in to manage their contacts.
Token-based authentication using JWT (JSON Web Tokens).
Secure endpoints: Only authenticated users can create, update, and delete contacts.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- RESTful API principles

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/cutestsun/nodejs-contacts-rest-api.git
   ```

2. Install the required dependencies:

   ```bash
   cd nodejs-contacts-rest-api
   npm install
   ```

3. Set up a MongoDB database and configure the connection URL in `.env`.

4. Start the server:

   ```bash
   npm start
   ```

5. The API will be available at `http://localhost:3000`.

## API Endpoints

### Contacts
- `GET /api/contacts` - Get a list of all contacts.
- `GET /api/contacts/:contactId` - Get a specific contact by ID.
- `POST /api/contacts` - Create a new contact.
- `PUT /api/contacts/:contactId` - Update an existing contact by ID.
- `PATCH /api/contacts/:contactId/favorite` - Update favorite status of the contact by ID.
- `DELETE /api/contacts/:contactId` - Delete a contact by ID.

### Users
- `GET /users/current` - Get data of the current user.
- `GET /users/verify/:verificationToken` - Verify user.
- `POST /users/register` - Register a new user.
- `POST /users/login` - Login existing user.
- `POST /users/logout` - Logout existing user.
- `POST /users/verify` - Resend email confirmation.
- `PATCH /users` - Update the subscription of the user.
- `PATCH /users/avatars` - Update the avatar of the user.

## Usage

You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API.
