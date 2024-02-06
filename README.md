
# User Guide: Interacting with the User Management API

This guide outlines the steps required to interact with the User Management API.

## 1. Download the Project

Clone the project repository from GitHub:

```bash
git clone https://github.com/DamianRavinduPeiris/DataIntimate-Assignment
```

## 2. Install Dependencies

Navigate to the project directory and install the required dependencies using npm:

```bash
cd your_project
npm install
```

## 3. Start the Server

Run the following command to start the server:

```bash
npm run dev
```

The server should now be running on `http://localhost:3000`.

## 4. Fill in Database Connection Details

When prompted in the command line interface (CLI), enter the following database connection details:
- Hostname.
- Username.
- Password.
- Database Name.

## 5. Interaction with the API.

### Sign Up - Returns a JWT Token when requested.

- **URL:** `POST http://localhost:3000/users/signup`
- **Description:** Registers a new user and generates a JWT token.
- **Authorization:** Not required.
- **Request Body:** Include user details (`id`, `name`, `username`, `password`).
- **Response:** Upon successful signup, a JWT token is generated.

### Log In - When requesting to this endpoint the JWT token obtained from signup is required.

- **URL:** `POST http://localhost:3000/users/login`
- **Description:** Logs in an existing user.
- **Authorization:** Requires JWT token obtained from signup.
- **Request Body:** Include user credentials (`username`, `password`).
- **Response:** Upon successful login, user data is returned along with a success message.

### Other Administrative Endpoints.

For administrative endpoints like save user, search user, update user, delete user, and get all users, JWT token is not required.

Make requests to the respective endpoints as follows:
  

### Save User
- **Endpoint:** `POST http://localhost:3000/users/saveUser`
- **Parameters:** None
- **Body:**
  ```json
  {
    "id": "user_id",
    "name": "user_name",
    "username": "user_username",
    "password": "user_password"
  }
  ```
- **Description:** Saves a new user with the provided details.

### Search User
- **Endpoint:** `GET http://localhost:3000/users/search?id=user_id`
- **Parameters:**
  - `id`: User ID to search for.
- **Body:** None
- **Description:** Searches for a user based on the provided user ID.

### Update User
- **Endpoint:** `PUT http://localhost:3000/users/update`
- **Parameters:** None
- **Body:**
  ```json
  {
    "id": "user_id",
    "name": "updated_user_name",
    "username": "updated_user_username",
    "password": "updated_user_password"
  }
  ```
- **Description:** Updates an existing user with the provided details.

### Delete User
- **Endpoint:** `DELETE http://localhost:3000/users/delete?id=user_id`
- **Parameters:**
  - `id`: User ID to delete.
- **Body:** None
- **Description:** Deletes the user corresponding to the provided user ID.

### Get All Users
- **Endpoint:** `GET http://localhost:3000/users/getAll`
- **Parameters:** None
- **Body:** None
- **Description:** Retrieves all users from the database.

Ensure you provide the required request parameters or body as specified in the API documentation.

## Additional Notes

- Ensure the server is running while making requests.
- Handle responses according to the expected format and status codes outlined in the API documentation.
- If encountering any issues, refer to the server logs or consult the API documentation for troubleshooting tips.
```

This guide outlines how to interact with the User Management API, specifying that a JWT token is generated upon signup and is required for login, while other administrative endpoints do not require a JWT token.
