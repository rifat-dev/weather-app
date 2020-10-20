const weather = document.getElementById('condation')
const country = document.getElementById('country')
const city = document.getElementById('city')
const main = document.getElementById('main')
const description = document.getElementById('description')
const temp = document.getElementById('temp')
const pressure = document.getElementById('pressur')
const humidity = document.getElementById('huminity')

const input = document.getElementById('input')
const history = document.getElementById('history')


const API_KEY = 'd30524ed959c2cfd5158ed9165159628'
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

const ICON = 'http://openweathermap.org/img/wn/'
const city_name = 'Dhaka,BD'

window.onload = function () {
    navigator.geolocation.getCurrentPosition(
        s => {
            getWeatherData(null, s.coords)
        },
        e => {
            getWeatherData()
        }
    )

    input.addEventListener('keypress',function(e){
        if(e.key==='Enter'){
            if(e.target.value){
                  getWeatherData(e.target.value)
                  e.target.value=''
            }else{
                alert('Enter city name')
            }
        }
    })
}

function getWeatherData(city=city_name , coords) {
    let url = URL

    city === null ?
        url = `${url}&lat=${coords.latitude}&lon=${coords.longitude}`
        :
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`


    axios.get(url)
        .then(({ data }) => {
            let obj = {
                icon: data.weather[0].icon,
                name: data.name,
                country: data.sys.country,
                main: data.weather[0].main,
                description: data.weather[0].description,
                temp: data.main.temp,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
            }

            setWeather(obj)
        })
        .catch(e => {
            console.log(e);
        })
}


function setWeather(obj) {
    weather.src = `${ICON}${obj.icon}.png`
    city.innerHTML = obj.name
    country.innerHTML = obj.country
    main.innerHTML = obj.main
    description.innerHTML = obj.description
    temp.innerHTML = obj.temp
    pressure.innerHTML = obj.pressure
    humidity.innerHTML = obj.humidity

}
