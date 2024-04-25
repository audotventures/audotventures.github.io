# GO-ReactJs-POSTgres

This is a basic example of a go web server with a react frontend.
It uses the [go fiber](https://github.com/gofiber/fiber) framework

## Getting started

### Running locally

Clone this repository
Download and install [golang](https://golang.org)
Download and install [postgres](https://www.postgresql.org/download/)
Setup your postgres database, env secrets can be changed in the [.env](./server/.env) file

Ensure you have `make` installed.

```bash
make run
```

This will start the go server & the react frontend.

### Using docker

Ensure you have `docker` installed

```bash
make docker-build
make docker-run
```

Server is live on `:8081` and UI is on `:3000`

## Endpoints

| endpoint      | method | body                                           | description       |
|---------------|--------|------------------------------------------------|-------------------|
| /api/session  | GET    |                                                | GET user session  |
| /api/login    | POST   | { email String, password String }              | login user      |
| /api/register | POST   | { email String, password String, name String } | register new user |
|               |        |                                                |                   |

## License

[MIT](https://choosealicense.com/licenses/mit/)
