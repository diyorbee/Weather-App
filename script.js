const api = {
    key: 'e4d66c877cf87e4e238970f48e2d4d3e',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
}

const searchBox = document.querySelector('.search-box')

searchBox.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        getResults(searchBox.value)
        console.log(searchBox.value);
    }
})

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
        return weather.json()
    })
    .then(displayResults)
}

function displayResults(weather) {
    let city = document.querySelector('.city')
    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    let now = new Date()
    let date = document.querySelector('.location .date')
    date.innerHTML = dataBuilder(now)
    
    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>` 

    let cloud = document.querySelector('.weather')
    cloud.innerHTML = `${weather.weather[0].main}`

    let hi_low = document.querySelector('.hi-low')
    hi_low.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`
}

function dataBuilder(s) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[s.getDay()]   
    let date = s.getDay()
    let month = months[s.getMonth()]
    let year = s.getFullYear()

    return `${day}, ${date}, ${month}, ${year}`
}

