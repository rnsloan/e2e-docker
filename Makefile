## docker commands to be run in host OS

dockerSync:
	docker-osx-dev -e node_modules -e .git

dockerRun:
	#port 4444 is for the selenium container with the network mapped to this container
	docker run -it --name e2e-docker --net=container:seleniumff -v ${PWD}/:/usr/src/ -w /usr/src/ iojs:2.4.0 /bin/bash

dockerStart:
	docker start -ai e2e-docker

dockerAttach:
	docker exec -it e2e-docker bash

dockerSelenium:
	docker run --name seleniumff -d -p 3030:3030 -p 4444:4444 -p 5900:5900 selenium/standalone-firefox-debug