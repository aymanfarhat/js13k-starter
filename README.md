# JS13K Starter

## Introduction

A project starter template and build process for getting up and running with your JS13K game faster.

Includes:

- Game project structure and example modules
- Example game loop with render and update
- Basic canvas animation example
- Gulp web server for running your project in development mode
- Gulp based build process: concatenate, minify, compile and replace into 1 minified HTML file then zip it
- Watch files for changes and run the build
- For each new build and zip, shows the file size of the current zipped project on the CLI

## Instructions

Install npm dependencies via `npm install`

You can either run the tasks individually or just run `gulp` which will `build -> zip -> serve -> watch`. After the watch is triggered, any changes will trigger this process to run again.

Description on the project structure and some notes on the gulp build script are available in this [post](http://thecodeship.com/web-development/bootstrap-vanilla-js-game-gulp-build-project-setup/).

## About JS13K

Js13kGames is a JavaScript coding competition for HTML5 game developers. The fun part of the compo is the file size limit set to 13 kilobytes. 

Every year carries a new theme for the challenge. The competition starts at 13:00 CEST, 13th August and ends at 13:00 CEST, 13th September.

## MIT License

Copyright (c) 2015 Ayman Farhat

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
