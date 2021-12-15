// Get DOM Elements

const clock = document.getElementById('time'),
greeting = document.getElementById('greeting'),
person = document.getElementById('name'),
focus = document.getElementById('focus'),
fullDate = document.getElementById('date'),
iconImage = document.getElementById('icon'),
weatherDesc = document.getElementById('weather'),
temperature = document.getElementById('temp'),
locate = document.getElementById('location'),

/* API key for getting current weather. DO NOT share it publicly.
Register for a Free Plan on https://openweathermap.org/api, and generate an API key.
Then replace the 'cfa756c7exxxxxxxxxxxxxxxxxxxxxx' string below with your generated key.
*/
api = 'cfa756c7exxxxxxxxxxxxxxxxxxxxxx';


// Get local time and set in HTML tag
function setTime(){
    const time = new Date();

    clock.innerText = time.toLocaleTimeString();

    // Check if time is either midnight, midday or dusk and reload page
    if (time.getHours() == 0 && time.getMinutes() == 0 && time.getSeconds() == 0) {
        location.reload();
    } else if (time.getHours() == 12 && time.getMinutes() == 0 && time.getSeconds() == 0) {
        location.reload();
    } else if (time.getHours() == 18 && time.getMinutes() == 0 && time.getSeconds() == 0) {
        location.reload();
    }
 
}

// Set greeting and appropriate background image
function greet(){
    
    const hours = new Date().getHours();

    if (hours < 12){
        greeting.innerText = "Good Morning, ";
        document.body.style.backgroundImage = "url('./images/morning.jpg')";
    } else if (hours < 18){
        greeting.innerText = "Good Afternoon, ";
        document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
    } else {
        greeting.innerText = "Good Evening, ";
        document.body.style.backgroundImage = "url('./images/night.jpg')";
    }
}

// Set name or 'Enter name'
function setName(){
    if (localStorage.getItem('name')){
        person.innerText = localStorage.getItem('name');
    } else {
        person.innerText = "[Enter Name]";
    }
}

// Add an array of event listeners to Name div
['blur', 'keydown'].forEach(evt => {
    person.addEventListener(evt, (event)=>{
        if (evt === 'keydown') {

            //For keyboard events, check to confirm key is the Enter Key
            if (event.key === 'Enter') {
                localStorage.setItem('name', event.target.innerText);

                // Remove keyboard focus from name element
                person.blur();
            }
        } else {
            localStorage.setItem('name', event.target.innerText);
        }
        
    })
});


// Set focus or 'Enter focus'
function setFocus(){
    if (localStorage.getItem('focus')){
        focus.innerText = localStorage.getItem('focus');
    } else {
        focus.innerText = "[Enter Focus]";
    }
}

// Add an array of event listeners to Focus div
['blur', 'keydown'].forEach(evt =>{
    focus.addEventListener(evt, (event) => {
        if (evt === 'keydown') {

            //For keyboard events, check to confirm key is the Enter Key
            if (event.key === 'Enter') {
                localStorage.setItem('focus', event.target.innerText);

                // Remove keyboard focus from name element
                focus.blur();
            }
        } else {
            localStorage.setItem('focus', event.target.innerText);
        }
    })

});

// Set Date
function setDate() {
    const date = new Date();

    let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
    "Saturday"];


    const dateString = dayNames[date.getDay()] + ', ' + monthNames[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();

    fullDate.innerText = dateString; 
}


function setWeather() {
    let long;
    let lat;

    //Get geographic location of User
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(location =>{
            //Update longitude and latitude records
            long = location.coords.longitude;
            lat = location.coords.latitude;

            const weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${api}`;

            // Fetch weather from api source
            fetch(weather)
                .then(response => {
                    // Convert result from Fetch to json format
                    return response.json();
                })
                .then(data => {
                    const place = data.name;
                    const { temp } = data.main;
                    const { description, icon } = data.weather[0];

                    const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                    iconImage.src = url;
                    weatherDesc.innerText = description;
                    locate.innerText = place;
                    temperature.innerText = temp;
                })
 


        });
    }

}

greet();
setName();
setFocus();
setDate();
setWeather();


// Call setTime function every 1 second
setInterval(() => {
    setTime()
}, 1000);