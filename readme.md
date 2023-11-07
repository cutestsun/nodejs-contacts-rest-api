# 👥 Contacts Rest API


This project is a simple REST API for managing contacts. It allows you to create, read, update, and delete contacts using standard HTTP methods. Built using Node.js and Express, it provides a lightweight and efficient way to handle contact data.

## Features

- Create a new contact with a name, email, and phone number.
- Retrieve a list of all contacts.
- Retrieve a specific contact by ID.
- Update the information for an existing contact.
- Delete a contact by ID.

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

- `GET /api/contacts` - Get a list of all contacts.
- `GET /api/contacts/:contactId` - Get a specific contact by ID.
- `POST /api/contacts` - Create a new contact.
- `PUT /api/contacts/:contactId` - Update an existing contact by ID.
- `DELETE /api/contacts/:contactId` - Delete a contact by ID.

## Usage

You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API.
