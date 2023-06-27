# server

this is a quick and dirty server application that simplifies and translates any text into any language. it provides an api, so it can be easily embedded into other (web) apps. 
currently it uses an in memory cache, which should be replaced by a persistent cache to save api costs.

## usage
* add an openai api key to .env file, have a look at the provided .env.example file
* install nodejs v18 or higher, e.g. via nvm on osx
* install dependencies: `npm install`
* start the server: `npm start`