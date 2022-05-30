var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var value = document.querySelector('.value')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeatherUI(capitalSearch){
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=dcdabc5a026b766f05de8fb4fd4cc84b`


    let data = await fetch(apiUrl).then(res=> res.json())  //Get return data
    // console.log(data);
    if(data.cod == 200){  // cod == 200 star if
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round(data.main.temp -273.15)
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main :''
        time.innerText = new Date().toLocaleString('vi')

        // change background and bg content
        body.setAttribute('class' , 'summer')
        if(temp <= 25 ){
            body.setAttribute('class' , 'fall')
        }

        if(temp <= 20){
            body.setAttribute('class' , 'spring')
        }

        if(temp <= 18){
            body.setAttribute('class' , 'winter')
        }

    }else{
        content.classList.add("hide")
    }
}



search.addEventListener('keypress',function(e){
    if(e.code === 'Enter'){
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)
    }
})

