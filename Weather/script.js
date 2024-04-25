let apiKey = "6062d12abc846cba013eedb879596f84";
let apiUrl = "http://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    let response = await fetch(apiUrl + city +`&APPID=${apiKey}`);
    if(searchBox.value === ""){
        alert("You must write something");
    }
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        let data = await response.json();

        console.log(data);
        
        document.querySelector(".city-name").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp)  ;
        document.querySelector(".humidity").innerText = data.main.humidity;
        document.querySelector(".wind").innerText = data.wind.speed + " km/h";
    
        if(data.weather[0].main ==  "Clouds"){
            weatherIcon.src = "clouds.png";
        }else if( data.weather[0].main ==  "Clear"){
            weatherIcon.src = "clear.png";
    
        }else if( data.weather[0].main ==  "Rain"){
            weatherIcon.src = "rain.png";
        }else if( data.weather[0].main ==  "Drizzle"){
            weatherIcon.src = "drizzle.png";
        }else if( data.weather[0].main ==  "Mist"){
            weatherIcon.src = "Mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display ="none";
    }
    
    }

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
