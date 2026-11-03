# amuro-product-management-api
GDG Backend Dev Assignment 2

A simple product management API built with Node.js, Express, MongoDB Atlas and Mongoose.

## Folder structure

```
├── index.js                          starts the server
├── config/db.js                      connects to MongoDB Atlas
├── models/productmodel.js            the shape of a product
├── services/productservice.js        business logic (talks to the database)
├── controllers/productcontroller.js  handles requests and responses
└── routes/productroutes.js           connects URLs to controllers
```

How a request travels: **route → controller → service → model → database**

## How to run

1. Install the packages:
   ```bash
   npm install
   ```
2. Copy `.env.example`, name the copy `.env`, and put in your MongoDB Atlas connection string.
3. Start the server:
   ```bash
   npm start
   ```

## Endpoints

Base URL: `http://localhost:3000/api/products`

| Method | Endpoint | What it does |
|---|---|---|
| GET | `/api/products` | Get all products |
| GET | `/api/products?manufacturer=Nike&size=42` | Filter by manufacturer and/or size |
| GET | `/api/products/:id` | Get one product |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Replace a whole product (send every field) |
| PATCH | `/api/products/:id` | Update only some fields |
| DELETE | `/api/products/:id` | Delete a product |

### Example product (JSON body)

```json
{
  "name": "Running Sneakers",
  "manufacturer": "Nike",
  "size": "42",
  "category": "shoes",
  "price": 45000
}
```

## Status codes used

| Code | Meaning |
|---|---|
| 200 | OK |
| 201 | Product created |
| 400 | Bad data or invalid id |
| 404 | Product not found |
| 500 | Server error |
