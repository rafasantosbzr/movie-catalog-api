<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=C0C0C0&height=120&section=header"/>

# `MOVIE CATALOG API REST`

## Description

This application allows for the user to create, edit and delete an account. Once logged in, the user can add, find, edit and delete films onto the platform.

## Functionalities

* `Create Account`
* `Login`
* `View Profile`
* `Edit Profile`
* `Delete Account`
* `Add a Movie`
* `Find a Movie`
* `Edit a Movie`
* `Delete a Movie`
* `List All Movies`

## Executing the Project

* Clone the project
    * `git@github.com:rafasantosbzr/movie-catalog-api.git`

* Install the dependencies 
    * `npm i`

* Start the server
    * `npm run dev`


## Endpoints

**CREATE ACCOUNT**

#### `POST /user`

**Description:** Creates a new account.

Request body:
```JSON
{
  "username": "John Doe",
  "email": "johndoe@email.com",
  "password": "jd123"
}
```
Response body:

```JSON
{
  "id": 1,
  "username": "John Doe",
  "email": "johndoe@email.com"
}
```
--- 
**LOGIN**

#### `POST` `/login`

**Description:** Attempts to log in a user.

Request body:
```JSON
{
    "email": "johndoe@email.com",
    "password": "jd123"
}
```  
Response body:
```JSON
{
	"user": {
		"id": 1,
		"username": "John Doe",
		"email": "johndoe@email.com"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzAxMTI2Njk2LCJleHAiOjE3MDExNTU0OTZ9.tQzFmIWY29M5MBC7EspGDC1LCMZQZNyOZuOL36k8jDU"
}
``` 
---
**VIEW PROFILE**

#### `GET /user`

**Description:** Retrieves the logged user's profile. 

Response body:

```JSON
{
	"user": {
		"id": 1,
		"username": "John Doe",
		"email": "johdoe@email.com"
	}
}
```
--- 
**EDIT PROFILE**

#### `PUT /user`

**Description:** Updates the logged user's profile.

Request body:
```JSON
{
  "username": "Jane Doe",
  "email": "janedoe@email.com",
  "password": "jd123"
}
```
--- 
**DELETE ACCOUNT**

#### `DELETE /user`

**Description:** Deletes the logged user's profile.
___
**ADD MOVIE**

#### `POST /movie`

**Description:** Creates a new movie.

Request body:
```JSON
{
  "title": "Titanic",
  "release_year": 1997,
  "directed_by": "James Cameron"
}
```
Response body:

```JSON
{
  "id": 1,
  "title": "Titanic",
  "release_year": 1997,
  "directed_by": "James Cameron",
  "synopsis": "N/A"
}
```
--- 
**FIND MOVIE**

#### `GET /movie/:id`

**Description:** Retrieves a specific movie by ID. 

Response body:

```JSON
{
	"movie": {
		"id": 1,
		"title": "Titanic",
		"release_year": 1997,
		"directed_by": "James Cameron"
	},
	"synopsis": "N/A"
}
```
--- 
**EDIT MOVIE**

#### `PUT /movie:/id`

**Description:** Updates an existing movie.

Request body:
```JSON
{
  "title": "Titanic",
  "release_year": 1997,
  "directed_by": "Jimmy Cameron",
  "synopsis": "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic’s departure through to its death—on its first and last voyage—on April 15, 1912."
}
```
--- 
**DELETE MOVIE**

#### `DELETE /movie/:id`

**Description:** Deletes an existing movie.
___
**LIST MOVIES**

#### `GET /movies`

**Description:**  Retrieves a list of all existing movies.

Response body:

```JSON
[
  {
		"id": 3,
		"title": "Atonement",
		"release_year": 2007,
		"directed_by": "Joe Wright",
		"synopsis": "As a 13-year-old, fledgling writer Briony Tallis irrevocably changes the course of several lives when she accuses her older sister’s lover of a crime he did not commit."
	},
	{
		"id": 2,
		"title": "There Will Be Blood",
		"release_year": 2007,
		"directed_by": "Paul Thomas Anderson",
		"synopsis": "N/A"
	},
    {
        "id": 1,
        "title": "Titanic",
        "release_year": 1997,
        "directed_by": "Jimmy Cameron",
        "synopsis": "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic’s departure through to its death—on its first and last voyage—on April 15, 1912."
    }
]
```
## Technologies & Libraries

* Node.js
* Express
* JavaScript
* PostgreSQL
* Knex
* JWT 
* Bcrypt
* Joi

## Author

[Rafael Santos](https://github.com/rafasantosbzr)

