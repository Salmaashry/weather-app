let ApiKey='68662d42a7234c34a25112417241201';
let cards=document.querySelector(".cards");
let form =document.querySelector(".form");

let countryName=document.querySelector(".countryName");

console.log(form)

async function getWeather(country){
    let response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${country}&days=3&aqi=no&alerts=no`);
    let result =await response.json();
    displayweather(result)
console.log(result)
}


let date=new Date();


console.log(date.toLocaleDateString("en-us" , {weekdate:"short"}))

function displayweather(result){
   console.log(result.forecast.forecastday);
   let forecast= result.forecast.forecastday;
        let cartoona=``;
         countryName.innerHTML=result.location.name;
        for (let i =0 ; i<forecast.length ; i++){
            let date=new Date(forecast[i].date);
            let weekday= date.toLocaleDateString("en-us" , {weekday:"long"})
           
                 let weekdate=date.toLocaleDateString("en-us" , {weekdate:"short"})          
            cartoona+=
            `
          <div class="card  mb-3 w-100" >
       
            <div class="card-header d-flex justify-content-between mt-3 ">
               <h5>${weekday}</h5>
               <p>${weekdate}</p>
            </div>   
           
            <div class="card-body w-100">
             
              <div class=" text-center mt-5">
                <img src= "https:${forecast[i].day.condition.icon}" alt="" class="img-fluid">
              </div>
              
              <h1 class="temprature-number1 text-center mt-3 ">${forecast[i].hour[date.getHours()].temp_c} °c</h1>
              <h5 class="temprature-number1 text-center mt-3 ">${forecast[i].hour[date.getHours()].wind_mph} °c</h5>
              <p class="temprature-number1 text-center mt-3  ">${forecast[i].day.condition.text}</p>

           

            </div>
          </div>
          
         `
        }
        console.log(cartoona)


        cards.innerHTML=cartoona

        
    }




    form.addEventListener("keyup",function(e){
      
      if(e.key=="Enter"){
      
      getWeather(form.value)

      }
    })


    form.addEventListener('blur',function(){

      getWeather(form.value);

    }
    )
    



navigator.geolocation.getCurrentPosition(succes);
function succes(positon){
    console.log(positon);
    console.log(positon.coords.latitude);
    console.log(positon.coords.longitude);
    let latitude=positon.coords.latitude;
    let longitude =positon.coords.longitude;
    let currentpositon=`${latitude} , ${longitude}`;
    console.log(currentpositon);
    getWeather(currentpositon)

    

}







































