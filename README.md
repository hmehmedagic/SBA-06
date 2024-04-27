# PerScholas - SBA-06: MongoDB Database Application
The purpose of this project is to display my understanding of MongoDB, and my capability to implement it's features in a practical manner.

## Table of Contents

- [Objectives](#objectives)
- [Dependencies](#Dependencies)
- [Usage](#usage)

## Objectives

- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.

## Dependencies

- First init:

    npm init

- Install Nodemon:

    npm i nodemon

- Install Express:

    npm i express

- Install Mongoose:

    npm i mongoose
  
- Install Cors
  
  npm i cors

- Call npm start to start the server

    "start": "nodemon index.js"

    Start script in package.json


## Usage

### Get
Performing a GET request on an entire directory is straightforward. Users simply need to add the directory at the end of their url:

- landing page: localhost:3000/
- fruits: fruits
- pokemon cards: pokemon_cards
- games: games

To perform a get request on a single entry within a directory, users must add a / and the _id at the end of their url(e.g., localhost:3000/fruits/662d4dd7f0ec467c2c0ff7d3. This will retrieve apple.)

### Post
- Required Key:Value Pairs
#### Fruit
- name: String
- color: String
- ready_to_eat: Boolean
#### Game
- title: String
- genre: [String]
- release_date: Date
- developer: String
- publisher: String
- platform: [String]
- mode: [String]
- description: String
#### Pokemon Card
- name: String
- element: String
- height: (Object)
        - feet: Number
        - inches: Number
- weight: Number
- set: String
- set_number: String
- hp: Number
- attacks: (Array of Object)
        - name: String
        - damage: Number
        - cost: (Array of Object)
            - element: String
            - num_of_energy: Number
        - description: String
    - pokemon_power: (Object)
        - name: String
        - description: String
    - weakness: String
    - resistance: String
    - retreat_cost: (Object)
        - element: String
        - num_of_energy: Number
    - description: String
    - holographic: Boolean

To perform a POST request, users can utilize a tool like Postman. They only need to input the URL corresponding to the item they want to add (e.g., for a fruit: localhost:3000/fruits) and provide the necessary key-value pairs. 

### Patch
To perform a PUT request, users can use Postman to enter the URL of the specific item they want to update (e.g., localhost:3000/fruits/662d4dd7f0ec467c2c0ff7d3). Users should then specify the key or keys they wish to modify.

### Delete
To perform a DELETE request, users can utilize Postman to input the URL of the specific item they wish to remove, following the same format as described for the PUT operation. No keys are necessary, as the selected item will be deleted.
