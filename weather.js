let form = document.querySelector("form")
let input = document.querySelector("input")
let h2 = document.querySelector("h2")
h2.style.color = "white"
let h3 = document.querySelector("h3")
h3.style.color = "white"


form.addEventListener("submit", getData)


    async function getData(e){
        e.preventDefault()
    try{
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=abfd9f70f4c74fe895182754220912&q=${input.value}&days=10&aqi=yes&alerts=yes`)
        let data = await response.json()
        let cityName = data.location.name
        let region = data.location.region
        let tempreture = data.current.temp_c
        h2.innerText =`${cityName}, ${region} `
        h3.innerText = `${tempreture}°C`
        let icon = data.current.condition.icon
        let text = data.current.condition.text
        // console.log(time)        
        let img = document.querySelector("img")
        img.setAttribute('src',`https:${icon}`)
        let h4 = document.querySelector("h4")
        let time = data.location.localtime
        h4.innerText = time
        h4.style.color = "yellow"
        let div = document.getElementById("background")
         div.style.backgroundImage = `URL(https://source.unsplash.com/random/?${input.value})`
         div.style.backgroundSize = "cover"
         div.style.backgroundPosition = "center"
         
 //  second day forecast starts
        let secondDay = document.querySelector(".second-date")
        let secondDate = data.forecast.forecastday[1].date
        secondDay.innerText = secondDate
        let secondSunrise = document.querySelector(".second-sunrise")
        let sunrise1 = data.forecast.forecastday[1].astro.sunrise
        secondSunrise.innerText = `sunrise ${sunrise1}` 
        let secondSunset = document.querySelector(".second-sunset")
        let sunset1 = data.forecast.forecastday[1].astro.sunset
        secondSunset.innerText = `sunset ${sunset1}`
        let secondTmp = document.querySelector(".second-tempreture")
        let secondTempreture = data.forecast.forecastday[1].day.avgtemp_c
        secondTmp.innerText = `Avg ${secondTempreture} °C`

// third day forecast starts
        let thirdDay = document.querySelector(".third-date")
        let thirdDate = data.forecast.forecastday[2].date
        thirdDay.innerText = thirdDate
        let thirdSunrise = document.querySelector(".third-sunrise")
        let sunrise2 = data.forecast.forecastday[2].astro.sunrise
        thirdSunrise.innerText = `sunrise ${sunrise2}` 
        let thirdSunset = document.querySelector(".third-sunset")
        let sunset2 = data.forecast.forecastday[2].astro.sunset
        thirdSunset.innerText = `sunset ${sunset2}`
        let thirdTmp = document.querySelector(".third-tempreture")
       let thirdTempreture = data.forecast.forecastday[2].day.avgtemp_c
       thirdTmp.innerText = `Avg ${secondTempreture} °C`

    
    }
    catch{
        window.alert("please enter valid city name")
    }            
        form.reset()


}

    