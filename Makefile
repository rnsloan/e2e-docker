## docker commands to be run in host OS

dockerSync:
	docker-osx-dev -e node_modules -e .git

dockerRun:
	docker run -it --name e2e-docker -v ${PWD}/:/usr/src/ -w /usr/src/ -p 4040:4040 iojs:2.4.0 /bin/bash

dockerStart:
	docker start -ai e2e-docker

dockerAttach:
	docker exec -it e2e-docker bash

## run inside container

start:
	iojs index.js