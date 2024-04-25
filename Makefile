build:
	cd ./backend && make build && cd ../ui && yarn build

run: build
	cd backend/cmd && ./main && cd ../../ui/ && yarn && yarn start

install:
	go install github.com/google/yamlfmt/cmd/yamlfmt@0.11.0

clean:
	cd ./backend && make clean && cd ../ui && yarn clean

docker:
	docker-compose build 

dev:
	docker-compose --env-file .env-sparky up --remove-orphans --force-recreate --build

list:
	@grep '^[^#[:space:]].*:' Makefile | cut -d ':' -f 1