
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04e6a998fbmshc95e1c4760e3f9dp197f86jsn0d8ec07ef716',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city , options)
.then(response => response.json())
.then(response => {
    console.log(response)
    cloud_pct.innerHTML =response.cloud_pct
    temp.innerHTML =response.temp
    temp12.innerHTML =response.temp
    feels_like.innerHTML =response.feels_like
    humidity.innerHTML =response.humidity
    humidity12.innerHTML =response.humidity
    min_temp.innerHTML =response.min_temp
    max_temp.innerHTML =response.max_temp
    wind_speed.innerHTML =response.wind_speed
    wind_speed12.innerHTML =response.wind_speed
    wind_degrees.innerHTML =response.wind_degrees
    sunrise.innerHTML =response.sunrise
    sunset.innerHTML =response.sunset
   
})
.catch(err => console.error(err))
}


const getWeather1 = (city) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city , options)
.then(response => response.json())
.then(response => {
    console.log(response)
    cloud_pct1.innerHTML =response.cloud_pct
    temp1.innerHTML =response.temp
    feels_like1.innerHTML =response.feels_like
    humidity1.innerHTML =response.humidity
    min_temp1.innerHTML =response.min_temp
    max_temp1.innerHTML =response.max_temp
    wind_speed1.innerHTML =response.wind_speed
    wind_degrees1.innerHTML =response.wind_degrees
    sunrise1.innerHTML =response.sunrise
    sunset1.innerHTML =response.sunset
   
})
.catch(err => console.error(err))
}

const getWeather2 = (city) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city , options)
.then(response => response.json())
.then(response => {
    console.log(response)
    cloud_pct2.innerHTML =response.cloud_pct
    temp2.innerHTML =response.temp
    feels_like2.innerHTML =response.feels_like
    humidity2.innerHTML =response.humidity
    min_temp2.innerHTML =response.min_temp
    max_temp2.innerHTML =response.max_temp
    wind_speed2.innerHTML =response.wind_speed
    wind_degrees2.innerHTML =response.wind_degrees
    sunrise2.innerHTML =response.sunrise
    sunset2.innerHTML =response.sunset
   
})
.catch(err => console.error(err))
}

const getWeather3 = (city) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city , options)
.then(response => response.json())
.then(response => {
    console.log(response)
    cloud_pct3.innerHTML =response.cloud_pct
    temp3.innerHTML =response.temp
    feels_like3.innerHTML =response.feels_like
    humidity3.innerHTML =response.humidity
    min_temp3.innerHTML =response.min_temp
    max_temp3.innerHTML =response.max_temp
    wind_speed3.innerHTML =response.wind_speed
    wind_degrees3.innerHTML =response.wind_degrees
    sunrise3.innerHTML =response.sunrise
    sunset3.innerHTML =response.sunset
   
})
.catch(err => console.error(err))
}

const getWeather4 = (city) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city , options)
.then(response => response.json())
.then(response => {
    console.log(response)
    cloud_pct4.innerHTML =response.cloud_pct
    temp4.innerHTML =response.temp
    feels_like4.innerHTML =response.feels_like
    humidity4.innerHTML =response.humidity
    min_temp4.innerHTML =response.min_temp
    max_temp4.innerHTML =response.max_temp
    wind_speed4.innerHTML =response.wind_speed
    wind_degrees4.innerHTML =response.wind_degrees
    sunrise4.innerHTML =response.sunrise
    sunset4.innerHTML =response.sunset
   
})
.catch(err => console.error(err))
}

getWeather1(document.querySelector('#common_city1').innerText)
getWeather2(document.querySelector('#common_city2').innerText)
getWeather3(document.querySelector('#common_city3').innerText)
getWeather4(document.querySelector('#common_city4').innerText)

submit.addEventListener('click' , function(e){
    e.preventDefault()
    getWeather(city.value)
})
getWeather('Pune')