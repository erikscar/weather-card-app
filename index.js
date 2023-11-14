const apiKey = "32b9cb288f5aecbe984be2cefd48f508"
const input = document.querySelector('#locationInput')
const searchBtn = document.querySelector('#searchBtn')
const root = document.querySelector(':root')


async function fetchWheather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=en`).then(result => result.json())
  return response
}
const switchBackground = (weatherDescription, iconUrl) => {

  if ((weatherDescription === "clear sky") && (iconUrl.match(/[0-9]{2}d/))) {
    root.style.setProperty('--background-image', ("url(./src/img/clearskyD.jpg)"))
    root.style.setProperty('--primary-color', "#000")
  }
  else if ((weatherDescription === "clear sky") && (iconUrl.match(/[0-9]{2}n/))) {
    root.style.setProperty('--background-image', "url(./src/img/clearskyN.jpg)")
    root.style.setProperty('--primary-color', "#fff")
  }
  if ((weatherDescription === "few clouds") && (iconUrl.match(/[0-9]{2}d/))) {
    root.style.setProperty('--background-image', "url(./src/img/fewcloudsD.jpg)")
    root.style.setProperty('--primary-color', "#000")
  }
  else if ((weatherDescription === "few clouds") && (iconUrl.match(/[0-9]{2}n/))) {
    root.style.setProperty('--background-image', "url(./src/img/fewcloudsN.jpg)")
    root.style.setProperty('--primary-color', "#fff")
  }
  if ((weatherDescription === "scattered clouds") && (iconUrl.match(/[0-9]{2}d/))) {
    root.style.setProperty('--background-image', "url(./src/img/scatteredcloudsD.jpg)")
    root.style.setProperty('--primary-color', "#000")
  }
  else if (weatherDescription === "scattered clouds" && (iconUrl.match(/[0-9]{2}n/))) {
    root.style.setProperty('--background-image', "url(./src/img/scatteredcloudsN.jpg)")
    root.style.setProperty('--primary-color', "#fff")
  }
  if ((weatherDescription === "broken clouds") || (weatherDescription === "overcast clouds") || (weatherDescription === "squalls") && (iconUrl.match(/[0-9]{2}d/))) {
    root.style.setProperty('--background-image', "url(./src/img/brokencloudsD.jpg)")
    root.style.setProperty('--primary-color', "#000")
  }
  else if ((weatherDescription === "broken clouds") || (weatherDescription === "overcast clouds") || (weatherDescription === "squalls") && (iconUrl.match(/[0-9]{2}n/))) {
    root.style.setProperty('--background-image', "url(./src/img/brokencloudsN.jpg)")
    root.style.setProperty('--primary-color', "#fff")
  }
  if ((weatherDescription === "shower rain") && (iconUrl.match(/[0-9]{2}d/))) {
    root.style.setProperty('--background-image', "url(./src/img/showerrainD.jpg)")
    root.style.setProperty('--primary-color', "#000")
  }
  else if ((weatherDescription === "shower rain") && (iconUrl.match(/[0-9]{2}n/))) {
    root.style.setProperty('--background-image', "url(./src/img/showerrainN.jpg)")
    root.style.setProperty('--primary-color', "#fff")
  }

  if ((weatherDescription.match(/rain/)) || (weatherDescription.match(/drizzle/)) && (iconUrl.match(/[0-9]{2}d/))) {
    root.style.setProperty('--background-image', "url(./src/img/rainD.jpg)")
    root.style.setProperty('--primary-color', "#000")
  }
  else if ((weatherDescription.match(/rain/)) || (weatherDescription.match(/drizzle/)) && (iconUrl.match(/[0-9]{2}n/))) {
    root.style.setProperty('--background-image', "url(./src/img/rainN.jpg)")
    root.style.setProperty('--primary-color', "#fff")
  }

  if ((weatherDescription.match(/thunderstorm/)) && (iconUrl.match(/[0-9]{2}d/))) {
    root.style.setProperty('--background-image', "url(./src/img/thunderstormD.jpg)")
    root.style.setProperty('--primary-color', "#000")
  }
  else if ((weatherDescription.match(/thunderstorm/)) && (iconUrl.match(/[0-9]{2}n/))) {
    root.style.setProperty('--background-image', "url(./src/img/thunderstormN.jpg)")
    root.style.setProperty('--primary-color', "#fff")
  }

  if ((weatherDescription === "snow") && (iconUrl.match(/[0-9]{2}d/))) {
    root.style.setProperty('--background-image', "url(./src/img/snowD.jpg)")
    root.style.setProperty('--primary-color', "#000")
  }
  else if ((weatherDescription === "snow") && (iconUrl.match(/[0-9]{2}n/))) {
    root.style.setProperty('--background-image', "url(./src/img/snowN.jpg)")
    root.style.setProperty('--primary-color', "#fff")
  }

  if ((weatherDescription === "mist") || (weatherDescription === "haze") || (weatherDescription === "smoke") || (weatherDescription === "fog") && (iconUrl.match(/[0-9]{2}d/))) {
    root.style.setProperty('--primary-color', "#000")
    root.style.setProperty('--background-image', "url(./src/img/mistD.jpg)")
  }
  else if ((weatherDescription === "mist") && (iconUrl.match(/[0-9]{2}n/))) {
    root.style.setProperty('--background-image', "url(./src/img/mistN.jpg)")
    root.style.setProperty('--primary-color', "#fff")
  }

  if ((weatherDescription === "sand/dust whirls") || (weatherDescription === "sand") || (weatherDescription === "dust") && (iconUrl.match(/[0-9]{2}d/))) {
    root.style.setProperty('--primary-color', "#000")
    root.style.setProperty('--background-image', "url(./src/img/sandD.jpg)")
  }
  else if ((weatherDescription === "sand/dust whirls") || (weatherDescription === "sand") || (weatherDescription === "dust") && (iconUrl.match(/[0-9]{2}n/))) {
    root.style.setProperty('--background-image', "url(./src/img/sandN.jpg)")
    root.style.setProperty('--primary-color', "#fff")
  }
  if (weatherDescription === "volcanic ash") {
    root.style.setProperty('--primary-color', "#fff")
    root.style.setProperty('--background-image', "url(./src/img/volcanic.jpg)")
  }
  if (weatherDescription === "tornado") {
    root.style.setProperty('--primary-color', "#000")
    root.style.setProperty('--background-image', "url(./src/img/tornado.jpg)")
  }
}

const showData = async (city) => {
  const data = await fetchWheather(city)
  document.querySelector('.temperature').textContent = parseInt(data.main.temp)
  document.querySelector('#locationName').textContent = data.name
  document.querySelector('#windSpeed').textContent = `${data.wind.speed} m/s`
  document.querySelector('#humidity').textContent = `${data.main.humidity}%`
  document.querySelector('.weather_icon').src = (`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
  document.querySelector('.weather_description').textContent = data.weather[0].description
  document.querySelector('.country_flag').src = `https://flagsapi.com/${data.sys.country}/shiny/64.png`
  document.getElementById('celsius').classList.remove('hidden')
  document.querySelectorAll('.misc_information_wrapper').forEach(wrapper => wrapper.classList.remove('hidden'))
  input.value = ''
  switchBackground(data.weather[0].description, data.weather[0].icon)
}

searchBtn.addEventListener("click", (ev) => {
  ev.preventDefault()
  const city = input.value
  showData(city)
})
