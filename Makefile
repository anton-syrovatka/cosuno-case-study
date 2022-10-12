install:
	npm i && cd client && npm i

build-client:
	cd client && npm run build && cp -r ./build ../api/client

.PHONY: client
client:
	cd client && npm run start

backend:
	docker-compose -f docker-compose.yaml up --build

clear:
	rm -rf ./node_modules && rm -rf ./api/client && rm -rf ./client/node_modules && rm -rf ./client/build