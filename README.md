# MOVIE CATALOG API REST

## Description

This application enables users to create, edit, and delete accounts. 
Upon logging in, users can add, list, find, edit, and delete films on the platform.


## Functionalities

* Create Account
* Login
* View Profile
* Edit Profile
* Delete Account
* Add a Movie
* Find a Movie
* Edit a Movie
* Delete a Movie
* List All Movies

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
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzAxNzA1MDEzLCJleHAiOjE3MDE3MzM4MTN9.kYF_AQW5-dc_ww44rgXI-cnqNYRzuiQ3bxyqTDysfys"
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
		"email": "johndoe@email.com"
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
		"id": 2,
		"title": "There Will be Blood",
		"release_year": 2007,
		"directed_by": "Paul Thomas Anderson"
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
		"id": 2,
		"title": "Atonement",
		"release_year": 2007,
		"directed_by": "Joe Wright",
		"synopsis": "N/A"
	},
	{
		"id": 1,
		"title": "There Will Be Blood",
		"release_year": 2007,
		"directed_by": "Paul Thomas Anderson",
		"synopsis": "Ruthless silver miner, turned oil prospector, Daniel Plainview moves to oil-rich California. Using his son to project a trustworthy, family-man image, Plainview cons local landowners into selling him their valuable properties for a pittance. However, local preacher Eli Sunday suspects Plainview’s motives and intentions, starting a slow-burning feud that threatens both their lives."
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