# Docker Node App
This is a nodejs application, with docker configurations
that can be build into a docker image. 
<br>

The app has 4 endpoints.<br>
`/users` <br>
`/users/:id` <br>
`/users/:id/orders` <br>
`/users/:id/orders/:order_id` <br>

Examples: <br>
`/users` <br>
`/users/2` <br>
`/users/2/orders` <br>
`/users/2/orders/40` <br>

## Building and running image
Build image
```
docker build -t my-app .
```
<br>

Run image as a background service
```
docker run -dp 8000:8000 my-app
```
