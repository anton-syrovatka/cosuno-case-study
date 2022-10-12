# Construction companies API with client

## How to run

- `make install`
- `make build-client`
- `make backend`
- go to `localhost:3001`

## How to run client in dev mode

- `make client` starts client on port 3000
- go to `localhost:3000`

## Requirements

- `node v16`
- `docker`

# Things to improve

- implement shared folder with types and interfaces for `client` and `api`
- improve docker to be able to install modules inside container
- enhance api with `payload`, `params` and `query params` schema validation
- enhance api with `error handling` and various types of `errors` support
