const apiKey = "32b9cb288f5aecbe984be2cefd48f508"
const input = document.querySelector('#locationInput')
const searchBtn = document.querySelector('#searchBtn')
const root = document.querySelector(':root')


async function fetchWheather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=en`).then(result => result.json())
  return response
}
const switchBackground = (weatherDescription, iconName) => {
  const convert = weatherDescription.replace(/\s/, "")
  root.style.setProperty('--background-image', (`url(./src/img/${convert}${iconName}.jpg)`))


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
  // const teste = 'mist'
  // const teste1 = '50n'
  // switchBackground(teste, teste1)
  switchBackground(data.weather[0].description, data.weather[0].icon)
}

searchBtn.addEventListener("click", (ev) => {
  ev.preventDefault()
  const city = input.value
  showData(city)
})

