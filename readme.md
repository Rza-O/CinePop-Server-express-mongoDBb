# CinePop Server

The server-side backend for **CinePop**, a modern movie portal for exploring, managing, and reviewing movies. This server handles movie data, favorites, top picks, and user-specific functionalities, providing seamless backend operations for the CinePop platform.

## Live URL

Live API: [https://cine-popcorn-server.vercel.app/]  
Client-side app: [https://github.com/programming-hero-web-course2/b10-a10-client-side-Rza-O]

---

## Purpose

The CinePop server facilitates a seamless connection between the frontend and the database. It handles CRUD operations for movies, allows users to manage favorites, and supports search and filtering features for movie exploration.

---

## Key Features

### Movie Management
- **Add Movies**: Allows adding new movies to the database.
- **Get Movies**: Retrieve all movies with optional search by title and sort by rating.
- **Get Single Movie**: Retrieve detailed information about a specific movie.
- **Update Movies**: Update movie details (like title, rating, description).
- **Delete Movies**: Remove a movie from the database.

### Favorites Management
- **Add to Favorites**: Allows users to add movies to their favorites list.
- **Get Favorites**: Retrieve the list of favorite movies for a user.
- **Remove from Favorites**: Allows users to remove movies from their favorites list.

### Top Picks
- **Add Top Picks**: Allows adding top picks of movies to highlight for the users.
- **Get Top Picks**: Retrieve the top picks of movies to display on the homepage.

### Search & Sort
- **Search by Title**: Allows searching for movies based on title.
- **Sort by Rating**: Sort movies by their ratings to highlight top-rated films.

### Error Handling
- **Unauthorized Access**: Handles cases when a user tries to access restricted endpoints.
- **Bad Request**: Validates inputs and handles missing parameters.

---

## API Endpoints

### Movie Management
- **GET** `/movies`: Retrieves all movies with optional search by title and sort by rating.
- **POST** `/movies`: Adds a new movie to the database (Authenticated).
- **GET** `/movies/:id`: Retrieves detailed information about a single movie by ID.
- **PATCH** `/movies/:id`: Updates movie data by ID (Authenticated).
- **DELETE** `/movies/:id`: Deletes a movie by ID (Authenticated).

### Favorites Management
- **POST** `/favorites`: Adds a movie to the user's favorites (Authenticated).
- **GET** `/favorites`: Retrieves all favorite movies for a specific user.
- **DELETE** `/favorites/:id`: Removes a movie from the user's favorites by ID.

### Top Picks Management
- **POST** `/topPicks`: Adds top pick movies to highlight (Authenticated).
- **GET** `/topPicks`: Retrieves all top pick movies.

### Miscellaneous
- **GET** `/featured`: Retrieves the featured movies for homepage display.

---

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database (Atlas or Local)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/cinepop-server.git
   cd cinepop-server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure the following environment variables:
   ```env
   PORT=5000
   DB_USER=<your-mongodb-username>
   DB_PASS=<your-mongodb-password>
   NODE_ENV=development
   ```
4. Start the server:
   ```bash
   npm start
   ```

---

## Dependencies

- **[cors](https://www.npmjs.com/package/cors)**: Enable cross-origin resource sharing.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Manage environment variables securely.
- **[express](https://www.npmjs.com/package/express)**: Web framework for Node.js.
- **[mongodb](https://www.npmjs.com/package/mongodb)**: Connect and interact with MongoDB.

---

## Development
### Running in Development Mode
Start the server in development mode with:
```bash
npm run dev
```
The server will reload automatically on code changes.

---

## Contact
For questions or feedback, please reach out at [shahreza.dev@gmail.com](mailto:shahreza.dev@gmail.com).