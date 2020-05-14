# binge-watched

Clone the entire project. This is split into a client, and a server. The client
handles the front end (website) in React, using a MobX-State-Tree as a state
management system. The server is a RESTFUL API in python that connects
to a SQLite DB, which houses information for the website.

If on a mac, it is highly recommended to install homebrew. Directions on how to
install homebrew can be found here:

https://treehouse.github.io/installation-guides/mac/homebrew

Once homebrew is installed, make sure npm is installed:

`brew install npm`


## client
To install all dependencies for the client, enter the command:

`npm install`

To start the app, make sure you're in the 'client' directory, and run the command:

`npm start`

The app will start in your default browser.

The app will not function properly without the server running alongside it.

## server
First, make sure you have docker installed. Installation instructions are here (Mac):

https://docs.docker.com/docker-for-mac/install/

Once installed, start docker up.

In another terminal window, navigate to the server directory, and enter the command:

`./deleteAndCreateContainer 1`

This will run a custom script to start up a docker container which hosts the python
flask API. If you want to make changes to the server code, you will need to update
the docker container with the new code. To do so, simply enter the command again,
but increment the number. For example, if you ran

`./deleteAndCreateContainer 1`

made changes, and want to update the container, run the command

`./deleteAndCreateContainer 2`

and so on.
