var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var weatherIcon = document.querySelector('#weather-icon');
var images = document.querySelector('#images');
var apik = "486b60030c5576be3482ca81f94180b3";

function convertion(val) {
    return (val - 273.15).toFixed(1);
}

function getWeatherIcon(description) {
    switch(description) {
        case 'clear sky':
            return 'pictures/clear sky.png';
        case 'few clouds':
            return 'pictures/few cloud.png';
        case 'scattered clouds':
            return 'pictures/scattered clouds.png';
        case 'broken clouds':
            return 'pictures/broken cloud.png';
        case 'shower rain':
            return 'pictures/shower rain.png';
        case 'rain':
            return 'pictures/rain.png';
        case 'thunderstorm':
            return 'pictures/thunderstorm.png';
        case 'snow':
            return 'pictures/snow.png';
        case 'mist':
            return 'pictures/mist.png';
        case 'overcast clouds':
        return 'pictures/overcast cloud.png';
        case 'haze':
        return 'pictures/haze.png';
        default:
            return 'pictures/default.png';
    }
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var tempature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = 'Weather of <span>' + nameval + '<span>';
            temp.innerHTML = 'Temperature: <span>' + convertion(tempature) + '°C</span>';
            description.innerHTML = 'Sky Conditions: <span>' + descrip + '<span>';
            wind.innerHTML = 'Wind Speed: <span>' + wndspeed + ' km/h<span>';
            weatherIcon.src = getWeatherIcon(descrip);

            weatherIcon.style.display = 'block';
            images.style.display = 'flex';
        })
        .catch(err => alert('You entered Wrong city name'));
});
