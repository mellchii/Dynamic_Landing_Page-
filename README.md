# Dynamic_Landing_Page-

Vanilla JavaScript Project. A dynamic landing Web page

## Introduction
![Alt text](images/snapshot.PNG "Optional Snapshot") 

I decided on this project to help me hone my JavaScript skillset. Working with DOM manipulation and use of API's without the help of any Frameworks.

The idea is to create a landing web page that shows the current time and updates it every second. The page also displays the current weather based on the geolocation of the client.
Other features include being able to Edit a couple of information on the DOM and have it saved into the local Storage of the client.

## Description
- The user is able to edit or enter a name on Screen which persists and remains after refreshing because the data is saved in Local Storage.
- The use is able to enter their focus for the day as well.
- The greeting and background image changes dynamically depending on the time of day for Morning, Afternoon or Evening.
- Whenever the page loads, it makes an API call to `https://openweathermap.org/api` to retrieve and display the Weather Condition of the client based on their geolocation.
This requires the application to have access to the user's location.

## Contents of Files created
  - `index.html` - landing page HTML template.
  - `main.js` - script run in `index.html` template.
  - `styles.css` - hosts CSS for html template.
  - `images` this directory contains images for setting the background for morning, afternoon or night/evening times.

## How to run app
Open the `index.html` file in any preferred web browser

## Additional Information
In order to get weather updates, the user would have to use their own personal API key in the `main.js` file.
- Register for a Free Plan on `https://openweathermap.org/api`, and generate an API key.
- Then replace the 'cfa756c7exxxxxxxxxxxxxxxxxxxxxx' string in the `main.js` file (line 17) with your generated key.
