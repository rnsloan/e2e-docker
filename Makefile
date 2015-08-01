## docker commands to be run in host OS

dockerSync:
	docker-osx-dev -e node_modules -e .git

dockerRun:
	#port 4444 is for the selenium container with the network mapped to this container
	docker run -it --name e2e-docker -v ${PWD}/:/usr/src/ -w /usr/src/ -p 4040:4040 -p 4444:4444 iojs:2.4.0 /bin/bash

dockerStart:
	docker start -ai e2e-docker

dockerAttach:
	docker exec -it e2e-docker bash

dockerSelenium:
	docker run --name seleniumff -d --net=container:e2e-docker selenium/standalone-firefox:2.46.0

## run inside container

start:
	iojs app/index.js

test:
	iojs test/test.js

.PHONY: test
