const inputCheck = document.querySelector('input');
const apiKey = "5e6959cd9138f96dfc7928f7220db482";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    var tempValue = data.main.temp;
    var ele = document.querySelector('img');
    if(tempValue<20){
        document.body.style.backgroundColor = "rgb(212 255 253)";
        document.querySelector('.weatherBody').style.background = "linear-gradient(142deg, rgb(110 247 255) 0%, rgb(235 178 255) 100%)";
        ele.setAttribute("src", "cold.png");
    }else{
        document.body.style.backgroundColor = "rgb(172, 255, 200)";
        document.querySelector('.weatherBody').style.background = "linear-gradient(142deg, #dbff6e 0%, #306d3a 100%)";
        ele.setAttribute("src", "sunny.png");
    }
    document.querySelector('#cityName').innerHTML = data.name;
    document.querySelector('#weatherValue').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidityValue').innerHTML = data.main.humidity + "%";
    document.querySelector('.windValue').innerHTML = data.wind.speed + " km/h";
}
document.querySelector('button').addEventListener('click', () => {
    if(inputCheck.value == ""){
        alert("Please type something");
    } else {
        document.querySelector('.weatherBody').classList.remove('hidden');
        document.querySelector('.weatherBody').classList.add('animate');
        checkWeather(inputCheck.value);
    }
});