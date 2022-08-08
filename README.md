# Relearning stuff
This project is for me only, to test my knowledge, particullary `docker` and `react`.

## Depencencies used
`node` - just for starting dev server</br>
`npx` - for creation of base project</br>
`docker` - containers support</br>
`nginx` - webserver for production flow testing

## Running

Go to the project directory. If you are using Windows, use WSL and use linux console instead of Powershell/CommandLine, it speeds up the setup.

Executute regular docker build image as in here

    docker build .

And then do whatever you like with it. Server for production is running on port 80.

For development and startup you can build it using following command:

    docker build -f Dockerfile.dev -t <YOURIMAGETAGGING> .


I was mostly following stuff from udemy course.