const APIKey = "8c75321178d33243b4398a81c24940fe";

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 10000
};

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = data.name;
        const country =  data.sys.country;
        const temp = data.main.temp;
        const weatherMain = data.weather[0].main;
        weather.children[1].innerText = `${city}.${country}`
        weather.children[2].innerText = `${Math.round(temp)}º`
        weather.children[3].innerText = `${weatherMain}`
    })
}

function error() {
    weather.innerText = "Sorry, We can't find your location."
}

navigator.geolocation.getCurrentPosition(success, error, options);