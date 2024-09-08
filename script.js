let apikey = "1112db7bad82f7b72c5a84b42765ffa9";
let a=document.querySelector("button");
let b=document.querySelector("input");

async function checkWeather(cityname) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`);
  let data = await response.json();
  console.log(data);
  
       document.querySelector(".temp").innerHTML=data.main.temp+"°C"; 
       document.querySelector(".city").innerHTML=data.name; 
       document.querySelector("p").innerHTML=data.main.humidity+"%"       ; 
       document.querySelector("#wind-speed").innerHTML=data.wind.speed+"km/hr"; 
    }
    a.addEventListener("click",()=>
{
    checkWeather(b.value);

})


