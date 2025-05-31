
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
    const inputCheck = document.querySelector('#cityInput');
    console.log("input value: ",inputCheck);
    if(inputCheck.value == ""){
        alert("Please type something");
    } else {
        document.querySelector('.weatherBody').classList.remove('hidden');
        document.querySelector('.weatherBody').classList.add('animate');
        checkWeather(inputCheck.value);
    }
});

const urlofphoto = 'https://jsonplaceholder.typicode.com/photos';
async function photoData(erl) {
    const response = await fetch(erl);
    const data = await response.json();
    //console.log(data[0].url);
    //console.log(data);
    const thumid = data.filter(el => el.albumId==1);
    console.log(thumid);
    const newimg = document.createElement('div');
    newimg.style.background = `url(${thumid[1].thumbnailUrl})`;
    newimg.style.width = `${150}px`;
    newimg.style.height = `${150}px`;
    console.log(newimg);
    document.body.append(newimg);
}

//photoData(urlofphoto);