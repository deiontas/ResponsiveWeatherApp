const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click',() => {
    navbarLinks.classList.toggle('active')
})




const apiKey="d7223861177b1e40324caa1418ec4c63";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

        const searchBox= document.querySelector(".search input");
        const searchBtn= document.querySelector(".search button");
        const weatherIcons= document.querySelector(".weather-icons");
        
        

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else {
                let data = await response.json();

             document.querySelector(".city").innerHTML = data.name;
             document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
             document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
             document.querySelector(".wind").innerHTML = data.wind.speed + "MPH";

             if(data.weather[0].main == "Clouds"){
                weatherIcons.src = "weather-icons/clouds.png";
            }
              else if(data.weather[0].main == "Clear"){
                weatherIcons.src = "weather-icons/clear.png";
            }
                else if(data.weather[0].main == "Rain"){
                    weatherIcons.src = "weather-icons/rain/png";
            }
               
                else if(data.weather[0].main == "snow"){
                    weatherIcons.src = "weather-icons/snow.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }

            
            let data = await response.json();

             document.querySelector(".city").innerHTML = data.name;
             document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
             document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
             document.querySelector(".wind").innerHTML = data.wind.speed + "MPH";

             if(data.weather[0].main == "Clouds"){
                weatherIcons.src = "weather-icons/clouds.png";
            }
              else if(data.weather[0].main == "Clear"){
                weatherIcons.src = "weather-icons/clear.png";
            }
                else if(data.weather[0].main == "Rain"){
                    weatherIcons.src = "weather-icons/rain/png";
            }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcons.src = "weather-icons/drizzle.png";
            }
                else if(data.weather[0].main == "Mist"){
                    weatherIcons.src = "weather-icons/mist.png";
            }
                else if(data.weather[0].main == "snow"){
                    weatherIcons.src = "weather-icons/snow.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }


        searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
        })