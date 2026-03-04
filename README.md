# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of the downloaded project
- create a `.env` file in the root directory and add the folllowing environment variable
    -`PORT=3000`
-Inside the `src/config` folder create a new file `config.json`and then add the following peice of json

```
{
  "development": {
    "username": <YOUR DB LOGIN NAME>,
    "password": <Your DB Password>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```