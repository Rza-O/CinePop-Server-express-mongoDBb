# CinePop Server

The server-side backend for **CinePop**, a modern movie portal for exploring, managing, and reviewing movies. This server handles authentication, database operations, and API requests to provide seamless functionality for the CinePop platform.

## Purpose

To serve as the backend for the CinePop movie portal, providing secure and efficient data management and API endpoints for CRUD operations.

## Live URL

Live API: [https://cine-popcorn-server.vercel.app/]  
Client-side app: [https://github.com/programming-hero-web-course2/b10-a10-client-side-Rza-O]

## Key Features

- **User Authentication:** Secure authentication using Firebase and user session management.
- **Movie Management:** Add, update, delete, and retrieve movies from a MongoDB database.
- **Favorites:** Manage user-specific favorite movies.
- **Search Functionality:** Enable efficient movie searching by title.
- **Robust API:** RESTful APIs for handling client-side requests.
- **Environment Variables:** Secure sensitive credentials (Firebase, MongoDB) with `.env`.

## Technologies Used

### Core Dependencies

- **Express.js** – Framework for building the server and handling routing.
- **MongoDB** – NoSQL database for storing movie and user data.
- **Dotenv** – Secure management of environment variables.
- **CORS** – Middleware for handling Cross-Origin Resource Sharing.