Example application showing end-2-end browser tests with docker containers that can be viewable with a vnc client.

To run:

- start up the selenium container with `make dockerSelenium`
- start up the app container with `make dockerRun`
- inside the app container `npm install` then `npm start` to start the app on `http://0.0.0.0:3030` 

- in another terminal window attach inside the app container with `make dockerAttach`
- run the tests with `npm test`

If you are using boot2docker you can view the app at `<boot2docker ip>:3030`.

To watch selenium with a vnc client: `vnc://<boot2docker-ip>:5900` password `secret`.

HTML templates from: http://materializecss.com

![vnc-screenshot](https://cloud.githubusercontent.com/assets/2513462/9115433/606ec5dc-3ca2-11e5-8bad-e7aa92188df9.png)
