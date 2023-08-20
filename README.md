# Urlik 

Url shortener service with advanced statistics.

## Applications

- [Frontend](/apps/web) - next.js web application and administration communicating with backend
- [Backend](/apps/server) - nodejs backend server storing data to mongo and sending events through redis to the worker
- [Puppet](/apps/worker) - nodejs worker processing events through redis and storing statistics

## External

- [Authority](https://github.com/prixladi/shamyr-cloud-authority) - identity provider
- [MongoDB](https://www.mongodb.com/) - main database
- [Redis](https://redis.io/) - cache and event emitter

## Application images

![index](assets/index.png)
