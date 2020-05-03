# Kafka Sample App

Dockerized Kafka and Zookeeper with KafkaJS client sample application.

## System requirements
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/) >= 12.16.0
- [npm](https://www.npmjs.com/) >= 6.14.0


## Setup
Install packages
```
npm install
```

## Run
Run docker containers
```bash
docker-compose up -d
```
Start producer
```bash
npm run producer
```
Start consumer
```bash
npm run consumer
```


## License

This software released under the terms of the [MIT license](./LICENSE).
