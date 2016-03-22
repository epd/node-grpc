# node-grpc
Node 5.9 and gRPC 0.13 example repository

## Running the example
Once Docker is installed, build the image from the Dockerfile:

``` bash
docker build -t epd/node-grpc .
```

And run the server:

``` bash
docker run -it --rm \
  -v `pwd`/example:/usr/src/app \
  epd/node-grpc \
  node server
```

Use the client code to perform an example request:

``` bash
docker run -it --rm \
  -v `pwd`/example:/usr/src/app \
  --link `docker ps -q | tail -n1`:backend \
  epd/node-grpc \
  node client
```
