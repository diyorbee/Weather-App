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
    let date = document.querySelector('.date')
    date.innerHTML = `${weather.name}, ${now}`
}