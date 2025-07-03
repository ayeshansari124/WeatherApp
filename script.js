let cityInput=document.getElementById("cityInput");
let result=document.getElementById("weatherResult");
let apiKey='0e628bd641b408f9bb831d9897518f0e';

async function getWeather() {
    let city=cityInput.value.trim();

    if(!city){
        result.innerHTML=`<p style="color: red;">Please Enter Your City Name</p>`;
        return;
    }

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const response=await fetch(url);
        if(!response.ok) throw new Error("Some Error");

        const data=await response.json();
        
        const weather=`<h2>${data.name}</h2>
          <p>${data.weather[0].description}</p>
          <p>🌡️ ${data.main.temp}°C</p>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">`

        result.innerHTML=weather;

    }catch(error){
        result.innerHTML=`<p style="color: red;">${error.message}</p>`;
    }
}