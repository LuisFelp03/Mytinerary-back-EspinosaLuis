# Mytinerary-back-EspinosaLuis

GET http://localhost:8080/api/users/all
GET http://localhost:8080/api/users/:id
POST http://localhost:8080/api/users/register
PUT http://localhost:8080/api/users/update/:id
DEDLETE http://localhost:8080/api/users/delete/:id


GET http://localhost:8080/api/cities/all
GET http://localhost:8080/api/cities/city/:id
POST http://localhost:8080/api/cities/create
PUT http://localhost:8080/api/cities/update/:id
DELETE http://localhost:8080/api/cities/delete/:id


GET http://localhost:8080/api/itineraries/all
GET http://localhost:8080/api/itineraries/:id
GET http://localhost:8080/api/itineraries/city/:cityId
POST http://localhost:8080/api/itineraries/create
PUT http://localhost:8080/api/itineraries/update/:id
DELETE http://localhost:8080/api/itineraries/delete/:id



POST http://localhost:8080/api/auth/signIn
