<p align="center">
  <img src="https://user-images.githubusercontent.com/117425361/230538817-4ef0c8c2-320e-4acf-953c-9e2553544cbd.png"/>
</p>

# 🚗 Grid Motors API

Welcome to my programming challenge project! 👋

I created this project as the final task requested by [Compass UOL](https://compass.uol/en/home/) for their scholarship program. The main goal of this project is to simulate a client request for a REST API in a leasing vehicles application. This includes handling authentication, security, validations, and CRUD operations for users, cars, and reserves.

Through this project, I have honed my skills in programming and web development, and I am excited to showcase my ability to create efficient and effective solutions to real-world problems.

Thank you for taking the time to check out my project!

![divBar](https://user-images.githubusercontent.com/117425361/220209151-a5c53a41-c9b0-4fa7-a358-f430571ed026.png)

## 🔖 Table of Contents

- [Mandatory requirements](#-mandatory-requirements)
- [Business Logic](#-business-logic)
- [Usage](#-usage)
- [Technologies](#-technologies)
- [Project Architecture](#-project-architecture)
- [Endpoints](#-endpoints)
- [Schemas](#-schemas)

![divBar](https://user-images.githubusercontent.com/117425361/220209151-a5c53a41-c9b0-4fa7-a358-f430571ed026.png)

## 🚀 Mandatory requirements

- [X] Readability
- [X] Small commits
- [X] README documentation
- [X] Swagger documentation (Conflicts with deploy, so it need to be open locally)
- [X] ESLint
- [X] API deploy
- [X] JWT
- [X] Authentication route
- [X] Protected routes (token bearer with 12h deadline)
- [ ] Unit tests (70% test coverage) - Achieved 60%

![divBar](https://user-images.githubusercontent.com/117425361/220209151-a5c53a41-c9b0-4fa7-a358-f430571ed026.png)

## 🌟 Business Logic

### Users
- [X] The CEP must be sent as a request to an external API ([viacep](https://viacep.com.br/ws/01001000/json)) in order to get the full adress.
- [X] The user must be at least 18 years old.
- [X] CPF must be unique in the base.
- [X] Must have password with at least 6 digits.
- [X] Must have a valid Email.

### Cars
- [X] The car's fabrication year must be between 1950 and 2023.
- [X] Can't have repeated accessories.
- [X] Cars must be listed with pagination and can be searched by query params (like model or color).
- [X] Cars can be searched individually by id.

### Reserves
- [X] User must have a driver's license in order to make a reservation.
- [X] The same car cannot be reserved in the same period of time.
- [X] The user cannot have more than one reservation in the same period of time.
- [X] Start date cannot be greater than the end date.

![divBar](https://user-images.githubusercontent.com/117425361/220209151-a5c53a41-c9b0-4fa7-a358-f430571ed026.png)

## 💻 Usage

### Test it right away

You can test the API without running locally, using the [application deployment](https://grid-motors-api.vercel.app/) using [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/download)..

### Local hosting

#### Pre-requisites

- 📜 [**Node.JS**](https://nodejs.org/en)
- 🍃 [**MongoDB**](https://www.mongodb.com/)

You will need to have [Node.JS](https://nodejs.org/en) installed on your machine, as well as a [MongoDB Atlas database collection](https://www.mongodb.com/basics/mongodb-atlas-tutorial).

#### Step by step

1. Check if you have the listed pre-requisites.
2. Clone the repository to your local machine with the command:
```bash
$ git clone https://github.com/flaviojrdev/grid-motors-api.git
```
3. Install project dependencies with the command:
```bash
$ npm install
```
4. Create a `.env` file at the project root (use the `.env.example` file as a template).
5. Start the server with the command:
```bash
$ npm run dev
```
6. The server will be running at `localhost:port`.

### How to run with Docker

1. Make sure you have Docker and Docker Compose installed on your machine.
2. Clone the repository to your local machine with the command:
```bash
$ git clone https://github.com/flaviojrdev/grid-motors-api.git
```
3. Navigate to the project root directory.
4. Create a .env file at the project root (use the .env.example file as a template).
5. Start the application using Docker Compose with the command:
```bash
docker-compose up -d
```
6. Docker Compose will download the necessary images and start the services defined in the docker-compose.yml file.
The API will be accessible at http://localhost:<PORT>, where <PORT> is the port defined in the .env file.

![divBar](https://user-images.githubusercontent.com/117425361/220209151-a5c53a41-c9b0-4fa7-a358-f430571ed026.png)

## 🧰 Technologies

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,ts,mongodb)](https://skillicons.dev)

### Main Stack

- [Node.JS](https://nodejs.org/en/): JavaScript development platform.
- [Express](https://expressjs.com/pt-br/): Web application framework.
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript.
- [MongoDB](https://www.mongodb.com/): Document-oriented NoSQL database.

### Security and authentication
- [Cors](https://www.npmjs.com/package/cors): Middleware to enable CORS (Cross-Origin Resource Sharing) on a Node.js server.
- [Helmet](https://www.npmjs.com/package/helmet): Middleware to improve Node.js security with HTTP headers.
- [JsonWebToken](https://jwt.io/): Library for generating JSON web tokens for authentication and authorization.
- [Bcrypt](https://www.npmjs.com/package/bcrypt): Hashing library for password encryption.

### Tests
- [Jest](https://jestjs.io/): JavaScript testing framework.
- [Supertest](https://www.npmjs.com/package/supertest): HTTP endpoint testing library.

### Code formatting
- [ESlint](https://eslint.org/): Code analysis tool.
- [Prettier](https://prettier.io/): Code formatter.

### Loggers
- [Morgan](https://www.npmjs.com/package/morgan): A logger middleware for Node.js that logs HTTP requests to the console or a file.
- [Winston](https://www.npmjs.com/package/winston): Logging library for Node.js.

### Utilitary and Middleware
- [Mongoose](https://mongoosejs.com/): MongoDB library with high-level API for defining and querying data models.
- [Dotenv](https://www.npmjs.com/package/dotenv): Library to load env variables from .env file for easier environment configuration.
- [Nodemon](https://www.npmjs.com/package/nodemon): Utility that monitors code changes and auto-restarts the server.
- [Moment](https://momentjs.com/): Library for working with dates and times with easy parsing, manipulation, and display.
- [Joi](https://joi.dev/): Library for validating and sanitizing data with simple yet powerful API.
- [Axios](https://axios-http.com/docs/intro): Library for making HTTP requests with easy-to-use API for data transfer.
- [Swagger](https://swagger.io/): Tool for documenting and testing RESTful APIs with machine-readable format.

![divBar](https://user-images.githubusercontent.com/117425361/220209151-a5c53a41-c9b0-4fa7-a358-f430571ed026.png)

## 🧩 Project Architecture

The project follows the SOLID principles. The `src/api` folder contains all the application's source code and is organized as follows:

- 📂 **entities**: Contains the domain entities used by the application, such as Car, User and Reserve.
- 📂 **errors**: Contains custom error classes used by the application.
- 📂 **interfaces**: Contains interfaces used by the application.
- 📂 **middlewares**: Contains middleware functions used by the application, such as authentication.
- 📂 **routes**: Contains the API routes and their respective controllers.
- 📂 **useCases**: Contains the business logic of the application, organized by domain entities.
- 📂 **utils**: Contains utility functions used by the application, such as formatting and validations.
- 📄 **app.ts**: Main file that configures the server, sets up middleware and connects to the database.
- 📄 **server.ts**: Instantiates the server and listens for HTTP requests.

Aswell as a 📂 **data** folder in `src/data` which contains the database class file.

![divBar](https://user-images.githubusercontent.com/117425361/220209151-a5c53a41-c9b0-4fa7-a358-f430571ed026.png)

## 🛣 Endpoints

- Main Route: `/api/v1`

### Authentication Routes

| Method | Endpoint | Protected | Description |
|--------|----------|-----------|-------------|
| **`POST`**   | /auth    | false     | Authenticate a user |

> **Note**
> This route is for generating or renewing the authentication token.

### Example

<details>
<summary><h4>Generate Token (POST)</h4></summary>
  
  <h4>Request</h4>
  
  ```json
  {
    "email": "joazinho@email.com",
    "password": "123456"
  }
  ```
  
  <h4>Response</h4>
  
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzMxMjk2MDM5ZDk2MDg1NmQxZDZkYSIsImlhdCI6MTY4MTA2ODkwMiwiZXhwIjoxNjgxMTEyMTAyfQ.D5zEzXoHSvQZNKdW48Ip_HVq0jlVo9Wxuf_Rf4AhFdg"
  }
  ```
  
</details>

---

### User Routes

| Method | Endpoint | Protected | Description |
|--------|----------|-----------|-------------|
| **`GET`**    | /user   | true      | List all users |
| **`POST`**   | /user   | false     | Register a new user |
| **`DELETE`** | /user/:id | true     | Remove a user by ID |
| **`PUT`**    | /user/:id | true     | Update a user by ID |

### Examples

<details>
<summary><h4>Create (POST)</h4></summary>
  
  <h4>Request</h4>
  
  ```json
  {
    "name": "Joãozinho Ciclano",
    "cpf": "131.147.860-49",
    "birth": "03/03/2000",
    "email": "joazinho@email.com",
    "password": "123456",
    "cep": "01001000",
    "qualified": "yes"
  }
  ```
  
  <h4>Response</h4>
  
  ```json
  {
    "_id": "64331296039d960856d1d6da",
    "name": "Joãozinho Ciclano",
    "cpf": "131.147.860-49",
    "birth": "03/03/2000",
    "email": "joazinho@email.com",
    "password": "$2b$10$LatAA.HtTongQlvUbHBEkuEYmGOlzdH01WwHwzNscPxcUrwlrosIS",
    "cep": "01001000",
    "qualified": "yes",
    "patio": "Praça da Sé",
    "complement": "lado ímpar",
    "neighborhood": "Sé",
    "locality": "São Paulo",
    "uf": "SP"
  }
  ```
  
</details>

<details>
<summary><h4>Read (GET)</h4></summary>
  
  <h4>Response</h4>
  
  ```json
  {
    "users": [
        {
            "_id": "64331296039d960856d1d6da",
            "name": "Joãozinho Ciclano",
            "cpf": "131.147.860-49",
            "birth": "03/03/2000",
            "email": "joazinho@email.com",
            "password": "$2b$10$LatAA.HtTongQlvUbHBEkuEYmGOlzdH01WwHwzNscPxcUrwlrosIS",
            "cep": "01001000",
            "qualified": "yes",
            "patio": "Praça da Sé",
            "complement": "lado ímpar",
            "neighborhood": "Sé",
            "locality": "São Paulo",
            "uf": "SP"
        },
        {
            "_id": "64332347bf729514ccb4d316",
            "name": "Julio Cesar",
            "cpf": "390.442.050-05",
            "birth": "03/03/2000",
            "email": "Jcesar@email.com",
            "password": "$2b$10$bB2PwqH55JHPA4UEAbsXPeu8c6XinCrgDeWMWK1ndcFWQwQF8HJd6",
            "cep": "67020695",
            "qualified": "no",
            "patio": "Passagem São Pedro",
            "complement": "not provided",
            "neighborhood": "Águas Lindas",
            "locality": "Ananindeua",
            "uf": "PA"
        },
        {
            "_id": "643323e36d85f20f99bbac18",
            "name": "Bruce Wayne",
            "cpf": "234.980.290-61",
            "birth": "03/03/2000",
            "email": "batman@email.com",
            "password": "$2b$10$tBMtW1EIWmK/CLCnUSnKcetaFIjp9/fIdWPY8k8S8sn8/JbgVXT7C",
            "cep": "58058260",
            "qualified": "yes",
            "patio": "Rua Sargento Adahylton Pontes de Lima",
            "complement": "not provided",
            "neighborhood": "Mangabeira",
            "locality": "João Pessoa",
            "uf": "PB"
        }
    ],
    "total": 3,
    "limit": 100,
    "offset": 1,
    "offsets": 100
  }
  ```
  
</details>

<details>
<summary><h4>Update (PUT)</h4></summary>

  <h4>Response</h4>
  
  ```json
  {
    "name": "Joãozinho Ciclano",
    "cpf": "131.147.860-49",
    "birth": "03/03/2000",
    "email": "joazinho@email.com",
    "password": "1234567",
    "cep": "01001000",
    "qualified": "yes",
    "patio": "Praça da Sé",
    "complement": "lado ímpar",
    "neighborhood": "Sé",
    "locality": "São Paulo",
    "uf": "SP"
  }
  ```
  
  <h4>Response</h4>
  
  ```json
  {
    "_id": "64331296039d960856d1d6da",
    "name": "Joãozinho Ciclano",
    "cpf": "131.147.860-49",
    "birth": "03/03/2000",
    "email": "joazinho@email.com",
    "password": "$2b$10$o/GOIcUvTTwD33Mlc20tIeXPOc7jxkbGJqoqyKeDQ453z6pBpcX2W",
    "cep": "01001000",
    "qualified": "yes",
    "patio": "Praça da Sé",
    "complement": "lado ímpar",
    "neighborhood": "Sé",
    "locality": "São Paulo",
    "uf": "SP"
  }
  ```
  
</details>

<details>
<summary><h4>Delete (DELETE)</h4></summary>
  
  <h4>Response</h4> 
  
  ```json
  
  ```
  
  > **Note**
  > Deletion returns an empty response with status 204.
  
</details>

---

### Car Routes

| Method | Endpoint | Protected | Description |
|--------|----------|-----------|-------------|
| **`GET`**    | /car    | true      | List all cars |
| **`GET`**    | /car/:id | true     | List a car by ID |
| **`POST`**   | /car    | true      | Register a new car |
| **`DELETE`** | /car/:id | true     | Remove a car by ID |
| **`PUT`**    | /car/:id | true     | Update a car by ID |
| **`PATCH`**  | /car/:carId/accessories/:accessoryId | true | Update or remove an accessory by ID |

> **Note**
> If the accessory descriptions matches, it will be treated as a removal, otherwise its an update.

### Examples

<details>
<summary><h4>Create (POST)</h4></summary>
  
  <h4>Request</h4>
  
  ```json
  {
    "model": "GM S10 2.8",
    "color": "White",
    "year": 2021,
    "values_per_day": 50,
    "accessories": [
        {
            "description": "air conditioner"
        },
        {
            "description": "4x4 traction"
        },
        {
            "description": "4 ports"
        }
    ],
    "number_of_passengers": 5
  }
  ```
  
  <h4>Response</h4>
  
  ```json
  {
    "_id": "64331385039d960856d1d6df",
    "model": "GM S10 2.8",
    "color": "White",
    "year": 2021,
    "values_per_day": 50,
    "accessories": [
        {
            "description": "air conditioner",
            "_id": "64331385039d960856d1d6e0"
        },
        {
            "description": "4x4 traction",
            "_id": "64331385039d960856d1d6e1"
        },
        {
            "description": "4 ports",
            "_id": "64331385039d960856d1d6e2"
        }
    ],
    "number_of_passengers": 5
  }
  ```
  
</details>

<details>
<summary><h4>Read (GET)</h4></summary>
  
  <h4>Response</h4>
  
  ```json
  {
    "cars": [
        {
            "_id": "64331385039d960856d1d6df",
            "model": "GM S10 2.8",
            "color": "White",
            "year": 2021,
            "values_per_day": 50,
            "accessories": [
                {
                    "description": "air conditioner",
                    "_id": "64331385039d960856d1d6e0"
                },
                {
                    "description": "4x4 traction",
                    "_id": "64331385039d960856d1d6e1"
                },
                {
                    "description": "4 ports",
                    "_id": "64331385039d960856d1d6e2"
                }
            ],
            "number_of_passengers": 5
        },
        {
            "_id": "643324406d85f20f99bbac23",
            "model": "Ferrari",
            "color": "Red",
            "year": 2017,
            "values_per_day": 1500,
            "accessories": [
                {
                    "description": "leather seats",
                    "_id": "643324406d85f20f99bbac24"
                }
            ],
            "number_of_passengers": 2
        },
        {
            "_id": "6433249a6d85f20f99bbac27",
            "model": "Batmobile",
            "color": "Black",
            "year": 1966,
            "values_per_day": 200,
            "accessories": [
                {
                    "description": "rocket engine",
                    "_id": "6433249a6d85f20f99bbac28"
                }
            ],
            "number_of_passengers": 1
        }
    ],
    "total": 3,
    "limit": 100,
    "offset": 1,
    "offsets": 100
  }
  ```
  
</details>

<details>
<summary><h4>Update (PUT / PATCH)</h4></summary>
  
  <h4>Request (PUT car)</h4>
  
  ```json
  {
    "model": "Ferrari",
    "color": "Red",
    "year": 2017,
    "values_per_day": 2000,
    "accessories": [
        {
            "description": "leather seats"
        }
    ],
    "number_of_passengers": 2
  }
  ```
  
  <h4>Response (PUT car)</h4>
  
  ```json
  {
    "_id": "643324406d85f20f99bbac23",
    "model": "Ferrari",
    "color": "Red",
    "year": 2017,
    "values_per_day": 2000,
    "accessories": [
        {
            "description": "leather seats",
            "_id": "64338fc5db2e9b24b0e63d97"
        }
    ],
    "number_of_passengers": 2
  }
  ```
  
  <h4>Request (PATCH accessory)</h4>
  
  ```json    
  {
    "description": "back camera"
  }
  ```
  
  <h4>Response (PATCH accesory)</h4>
  
  ```json
  {
    "_id": "64331385039d960856d1d6df",
    "model": "GM S10 2.8",
    "color": "White",
    "year": 2021,
    "values_per_day": 50,
    "accessories": [
        {
            "description": "back camera",
            "_id": "6433906adb2e9b24b0e63da6"
        },
        {
            "description": "4x4 traction",
            "_id": "64331385039d960856d1d6e1"
        },
        {
            "description": "4 ports",
            "_id": "64331385039d960856d1d6e2"
        }
    ],
    "number_of_passengers": 5
  }
  ```
  
</details>

<details>
<summary><h4>Delete (DELETE / PATCH)</h4></summary>
  
  <h4>Response (DELETE car)</h4> 
  
  ```json
  
  ```
  
  > **Note**
  > Deletion returns an empty response with status 204.
  
  <h4>Response (PATCH accessory)</h4> 
  
  ```json
  {
    "description": "back camera"
  }
  ```  
  
  <h4>Response (PATCH accessory)</h4> 
  
  ```json
  {
    "message": "Accessory deleted",
    "car": {
        "_id": "64331385039d960856d1d6df",
        "model": "GM S10 2.8",
        "color": "White",
        "year": 2021,
        "values_per_day": 50,
        "accessories": [
            {
                "description": "4x4 traction",
                "_id": "64331385039d960856d1d6e1"
            },
            {
                "description": "4 ports",
                "_id": "64331385039d960856d1d6e2"
            }
        ],
        "number_of_passengers": 5
    }
  }
  ```
  
</details>

---

### Reservation Routes

| Method | Endpoint | Protected | Description |
|--------|----------|-----------|-------------|
| **`POST`**   | /reserve | true  | Register a new reservation |
| **`GET`**    | /reserve | true  | List all reservations |
| **`DELETE`** | /reserve/:id | true | Remove a reservation by ID |
| **`PUT`**    | /reserve/:id | true | Update a reservation by ID |

### Examples

<details>
<summary><h4>Create (POST)</h4></summary>
  
  <h4>Request</h4>
  
  ```json
  {
    "start_date": "20/05/2023",
    "end_date": "30/05/2023",
    "id_car": "643324406d85f20f99bbac23"
  }
  ```
  
  <h4>Response</h4>
  
  ```json
  {
    "_id": "64332be36d85f20f99bbac6a",
    "start_date": "20/05/2023",
    "end_date": "30/05/2023",
    "final_value": 15000,
    "id_car": "643324406d85f20f99bbac23",
    "id_user": "643323e36d85f20f99bbac18"
  }
  ```
  
</details>

<details>
<summary><h4>Read (GET)</h4></summary>
  
  <h4>Response</h4>
  
  ```json
  {
    "reserves": [
        {
            "_id": "643326f16d85f20f99bbac4e",
            "start_date": "20/04/2023",
            "end_date": "30/04/2023",
            "final_value": 500,
            "id_car": "64331385039d960856d1d6df",
            "id_user": "64331296039d960856d1d6da"
        },
        {
            "_id": "64332bc26d85f20f99bbac63",
            "start_date": "10/05/2023",
            "end_date": "15/05/2023",
            "final_value": 1000,
            "id_car": "6433249a6d85f20f99bbac27",
            "id_user": "643323e36d85f20f99bbac18"
        },
        {
            "_id": "64332be36d85f20f99bbac6a",
            "start_date": "20/05/2023",
            "end_date": "30/05/2023",
            "final_value": 15000,
            "id_car": "643324406d85f20f99bbac23",
            "id_user": "643323e36d85f20f99bbac18"
        }
    ],
    "total": 3,
    "limit": 100,
    "offset": 1,
    "offsets": 100
  }
  ```
  
</details>

<details>
<summary><h4>Update (PUT)</h4></summary>

  <h4>Request</h4>
  
  ```json
  {
    "start_date": "21/04/2023",
    "end_date": "30/04/2023",
    "final_value": 1000,
    "id_car": "64331385039d960856d1d6df",
    "id_user": "64331296039d960856d1d6da"
  }
  ```
  
  <h4>Response</h4>
  
  ```json
  {
    "_id": "643326f16d85f20f99bbac4e",
    "start_date": "21/04/2023",
    "end_date": "30/04/2023",
    "final_value": 1000,
    "id_car": "64331385039d960856d1d6df",
    "id_user": "64331296039d960856d1d6da"
  }
  ```
  
</details>

<details>
<summary><h4>Delete (DELETE)</h4></summary>
  
  <h4>Response</h4> 
  
  ```json
  
  ```
  
  > **Note**
  > Deletion returns an empty response with status 204.
  
</details>

![divBar](https://user-images.githubusercontent.com/117425361/220209151-a5c53a41-c9b0-4fa7-a358-f430571ed026.png)

## 📋 Schemas

### User

| Field      | Type   | Required | Unique |
| ---------- | ------ | -------- | ------ |
| name       | String | Yes      | No     |
| cpf        | String | Yes      | Yes    |
| birth      | String | Yes      | No     |
| email      | String | Yes      | Yes    |
| password   | String | Yes      | No     |
| cep        | String | Yes      | No     |
| qualified  | String | Yes      | No     |
| patio      | String | Yes      | No     |
| complement | String | Yes      | No     |
| neighborhood | String | Yes    | No     |
| locality   | String | Yes      | No     |
| uf         | String | Yes      | No     |

> **Note**
> `patio`, `complement`, `neighborhood`, `locality` and `uf` are not passed in the POST request (only in PUT requests). They are filled in the payload via a external API requisition using the `cep`.

---

### Accessory

| Field       | Type     | Required | Unique |
| ----------- | -------- | -------- | ------ |
| description | String   | Yes      | No     |

### Car

| Field                | Type              | Required | Unique |
| --------------------| ----------------- | -------- | ------ |
| model                | String            | Yes      | No     |
| color                | String            | Yes      | No     |
| year                 | Number            | Yes      | No     |
| values_per_day       | Number            | Yes      | No     |
| accessories          | [AccessorySchema] | Yes      | No     |
| number_of_passengers | Number            | Yes      | No     |

---

### Reserve

| Field       | Type               | Required | Unique |
| ----------- | ------------------ | -------- | ------ |
| start_date  | String             | Yes      | No     |
| end_date    | String             | Yes      | No     |
| final_value | Number             | Yes      | No     |
| id_car      | ObjectId (Car)     | Yes      | No     |
| id_user     | ObjectId (User)    | Yes      | No     |


![divBar](https://user-images.githubusercontent.com/117425361/220209151-a5c53a41-c9b0-4fa7-a358-f430571ed026.png)

## 👤 Author

| <img src="https://avatars.githubusercontent.com/u/117425361?v=4" width=115> |
| :-------------------------------------------------------------------------: |
|              [Flavio Henrique](https://github.com/flaviojrdev)              |
