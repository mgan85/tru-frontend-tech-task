This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [Intro](#intro)
- [Running your app](#running-your-app)
    - [npm run server](#npm-run-server)
    - [npm run client](#npm-run-client)
    - [npm run test](#npm-run-test)
- [Background](#background)
- [Task](#task)

## Intro

This is the TruRating frontend test. The aim of this test is seeing how re-usable and tested your code is.
Before starting, make sure you are running the following:
- node: v6
- npm: v3
After cloning this repo locally, run `npm install`. This repo contains a very simple express server and a very simple skeleton for a React app (created using `create-react-app`). In this test you are asked to use React. It's completely up to you if you want to use Redux to help you managing the state of your application.
Your code will need to be contained into the client folder. Feel free to structure the client folder as you like, but please do not change anything in the server folder.

You can find all the designs you need in the "designs" folder.

## Running your app

### `npm run server`

Runs your express server.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The server will just be returning you a json file based on the query parameters you are passing through. This will be your main route:`/measures`. Make sure you always pass the following query parameter: `?shoppingChannel=online` or `?shoppingChannel=instore`. If no query parameter is set, the route will throw a 400 error code.


### `npm run client`

Launches the client of the application in interactive watch mode.<br> Open [http://localhost:3000](http://localhost:3000). This is where you will be working adding your components.

### `npm run test`

Runs your client tests.


## Background
The API is returning what we call TruMetrics. These are categories in which we group the questions our merchants ask to their customers (i.e a question like “Please rate our staff from 1 to 9?” will fall into our “Service” category). Every metric has it's own colour you will need to use when displaying the response.
- Service (Ease of use): #AD63FF;
- Product: #FB004A;
- Value: #FD7E09;
- Recommend: #20F3B5;
- Experience: #FFDC28;

All the metrics have a min value of 1 and a max value of 9. If the a measure has a value between 1 and 5 we consider that "negative", if between 6 and 7 we consider that "neutral" whilst between 8 and 9 is considered "positive". This also reflects on how we show our customers their metrics scores (see [Task](#task) for more info).

## Task

Your task is developing an app that:
- Implement the "loading state" of the app. I need to be able to see a loading spinner whilst the API call is happening. Extra point if you show some placeholders when the app is in the loading state.
- Show the metrics returned by the API. Do not show the "Calculation - Real Value" object as that is just an indication for the frontend about the kind of data that is returned.
- Shows a header and a footer as per design. You are not expected to have the icons in the footer and header to be interactive, they are there just to complete the look and feel of the app. The background colour for the footer and header is #2bb5fd; You can find all the assets you need in ```designs/assets```.
- Shows the data following the designs attached (please try to make is as responsive as possible and feel free to use either CSS or a library for the progress bar) with the following criteria:
    - If the metric value is:
        - between 1 and 5 the bar should be red (#FF5C5C)
        - between 6 and 7 the bar should be amber (#F5B31F)
        - between 8 and 9 the bar should be green (#62DDA9)
    - In case of no value for a specific metric, shows the name of the metric, with an empty bar and the following text: "No data for [your measure name] yet"
- Allows you to toggle between online and instore data

It would also be great to see some tests as part of your task :) but don't worry if you are running out of time.

If you are running out of time, concentrate on loading data from the API and handle the app loading state and coloring the progress bar based on the value returned rather than making the design looks perfect.




