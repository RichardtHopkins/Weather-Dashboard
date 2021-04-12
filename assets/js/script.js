// var weather = 'http://api.openweathermap.org/data/2.5/weather?q=dubbo&units=metric&appid=331b26eb68b03536ea7ca4b2ea5009ec';
// var forcast = 'http://api.openweathermap.org/data/2.5/forecast?q=dubbo&units=metric&appid=331b26eb68b03536ea7ca4b2ea5009ec';

var searchBtn = document.getElementById('searchBtn');
var cityInput = document.getElementById('cityInput');
var cityName = document.getElementById('cityName');
var city;
var currentday = document.getElementById('date')

var lon;
var lat;

var date = moment().format('dddd, MMMM, Do, YYYY');

var dayA = moment().add(1, 'd').format('D/M/YY')
var dayB = moment().add(2, 'd').format('D/M/YY')
var dayC = moment().add(3, 'd').format('D/M/YY')
var dayD = moment().add(4, 'd').format('D/M/YY')
var dayE = moment().add(5, 'd').format('D/M/YY')



//gets the weather 
function getWeather(location){
    var coordinates = 'http://api.openweathermap.org/data/2.5/weather?q=' + location +'&units=metric&appid=331b26eb68b03536ea7ca4b2ea5009ec';

    fetch(coordinates)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {

        lon = data.coord.lon;
        console.log('lon: ' +lon);
        lat = data.coord.lat;
        console.log('lat: ' + lat);

        return fetch('https:api.openweathermap.org/data/2.5/onecall?lat=' + lat +'&lon='+ lon +'&units=metric&exclude=minutely,hourly&appid=331b26eb68b03536ea7ca4b2ea5009ec');
        })
        .then(function (response){
        return response.json();
        })
        .then(function (data) {
        console.log(data);

            //sets the data for the current tem.
            var deg = document.getElementById('temperature');
            var humidity = document.getElementById('humidity');
            var winSpeed = document.getElementById('windSpeed');
            var uvIndex = document.getElementById('UV')
            var uvi = data.current.uvi;

            var weatherIcon = document.getElementById('weatherIcon');
            
            deg.textContent = data.current.temp + ' Cel';
            humidity.textContent = data.current.humidity + '%';
            winSpeed.textContent = data.current.wind_speed + ' mps';
            uvIndex.textContent = data.current.uvi;
            
            //change the colour of the uv index depending on the value of it.
            if(uvi < 3){
                uvIndex.classList.add('uvLow');
            }else if(uvi >= 3 && uvi < 6){
                uvIndex.classList.add('uvMedium');
            }else if(uvi >= 6 && uvi < 8){
                uvIndex.classList.add('uvHigh');
            }else if(uvi >= 8 && uvi < 11){
                uvIndex.classList.add('uvVeryHigh');
            }else{
                uvIndex.classList.add('uvExtreme')
            }


            //day1
           
            var date1 = document.getElementById('date1')
            date1.textContent = dayA;
            var deg1 = document.getElementById('Temp1');
            deg1.textContent = data.daily[0].temp.day + ' Cel';
            var humidity1 = document.getElementById('Humidity1');
            humidity1.textContent = data.daily[0].humidity + '%';
            var winSpeed1 = document.getElementById('wind1');
            winSpeed1.textContent = data.daily[0].wind_speed + ' mps';

            //day2
            
            var date2 = document.getElementById('date2')
            date2.textContent = dayB;
            var deg2 = document.getElementById('Temp2');
            deg2.textContent = data.daily[1].temp.day + ' Cel';
            var humidity2 = document.getElementById('Humidity2');
            humidity2.textContent = data.daily[1].humidity + '%';
            var winSpeed2 = document.getElementById('wind2');
            winSpeed2.textContent = data.daily[1].wind_speed + ' mps';
            

            //day 3
          
            var date3 = document.getElementById('date3')
            date3.textContent = dayC;
            var deg3 = document.getElementById('Temp3');
            deg3.textContent = data.daily[2].temp.day + ' Cel';
            var humidity3 = document.getElementById('Humidity3');
            humidity3.textContent = data.daily[2].humidity + '%';
            var winSpeed3 = document.getElementById('wind3');
            winSpeed3.textContent = data.daily[2].wind_speed + ' mps';

            //day 4
       
            var date4 = document.getElementById('date4')
            date4.textContent = dayD;
            var deg4 = document.getElementById('Temp4');
            deg4.textContent = data.daily[3].temp.day + ' Cel';
            var humidity4 = document.getElementById('Humidity4');
            humidity4.textContent = data.daily[3].humidity + '%';
            var winSpeed4 = document.getElementById('wind4');
            winSpeed4.textContent = data.daily[3].wind_speed + ' mps';

            //day 5
           
            var date5 = document.getElementById('date5')
            date5.textContent = dayE;
            var deg5 = document.getElementById('Temp5');
            deg5.textContent = data.daily[4].temp.day + ' Cel';
            var humidity5 = document.getElementById('Humidity5');
            humidity5.textContent = data.daily[4].humidity + '%';
            var winSpeed5 = document.getElementById('wind5');
            winSpeed5.textContent = data.daily[4].wind_speed + ' mps';


        

          

            








        
        
        })
        .catch(function (error) {
            console.log(error)
        });    
};

//returns the a string with the first letter in capitlised.
function jsUcFirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// function saveCity(input){

//     var enteredCity = {
//         city: input
//     };
//     localStorage.setItem("textBlocks", JSON.stringify(enteredCity));
// }

// function history() {
//     var cityHistory = JSON.parse(localStorage.getItem("enteredCity"));

//     for(i = 0; i < cityHistory.length; i++){
        
        
//     }

// };


searchBtn.addEventListener('click', function(event){
    event.preventDefault();

    if(cityInput != 0){
        city = cityInput.value;
        cityName.textContent = jsUcFirst(city) + ',  ' + date;
        getWeather(city);
    }else{
        alert("You have not entered a city.");
    }
})






