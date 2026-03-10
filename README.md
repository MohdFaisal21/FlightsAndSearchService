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
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequilize db:create`
and then execute 
`npx sequelize db:migrate`
```

## DB Design
  - Airplane Table
  - Flight Table
  - Airport Table
  - City Table

  - A flight belongs to an airplane but one airplane can be used in multiple flights 

  - A city has many airports but one airport belogns to a city 

  - One airport can have many flights, but a flight belongs to one airport at a time.

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
 Relationship -> City has many airports and Airport belongs to a city (one to Many)