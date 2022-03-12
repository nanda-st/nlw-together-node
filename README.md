## NLW Together: Node

### Valoriza
Valoriza is an amazing app for sharing compliments between colleagues and workmates!\
It was developed on Next Level Week – Node, an event by [Rocketseat](https://www.rocketseat.com.br/).

### Dependencies
+ Node
+ Express
+ TypeORM
+ SQLite
+ JSONWebToken

### How to Run
1. Clone this repo.
2. Run `npm i` to install dependencies.
3. Run `npm run dev`.

### Endpoints
|    |                                                |                            |
|----|------------------------------------------------|----------------------------|
|GET |http://localhost:5000/users/compliments/received|List received compliments   |
|GET |http://localhost:5000/users/compliments/sent    |List compliments you've sent|
|GET |http://localhost:5000/tags                      |List available tags         |
|GET |http://localhost:5000/users                     |List users                  |
|POST|http://localhost:5000/users                     |Create new user             |
|POST|http://localhost:5000/session                   |Authenticate user           |
|POST|http://localhost:5000/tags                      |Create new tag (admin only) |
|POST|http://localhost:5000/compliments               |Create new compliment       |
|    |                                                |                            |