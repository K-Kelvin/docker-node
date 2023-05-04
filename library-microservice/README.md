# Library Microservice

This is a nodejs application for a simple library, with docker configurations
that can be build into a docker image.
<br>

The app has 4 endpoints.<br>
`/authors` <br>
`/authors/:id` <br>
`/authors/:id/books` <br>
`/authors/:id/books/:book_id` <br>

Examples: <br>
`/authors` <br>
`/authors/2` <br>
`/authors/2/books` <br>
`/authors/2/books/40` <br>

## Building and running container

To build, run

```
docker build -t library-microservice .
```

<br>
Run as a background service

```
docker run -dp 8000:8000 library-microservice
```
