// var weather = 'http://api.openweathermap.org/data/2.5/weather?q=dubbo&units=metric&appid=331b26eb68b03536ea7ca4b2ea5009ec';
// var forcast = 'http://api.openweathermap.org/data/2.5/forecast?q=dubbo&units=metric&appid=331b26eb68b03536ea7ca4b2ea5009ec';

var searchBtn = document.getElementById('searchBtn');
var cityInput = document.getElementById('cityInput');
var city;


function getWeather(location){

    var weather = 'http://api.openweathermap.org/data/2.5/weather?q=' + location +'&units=metric&appid=331b26eb68b03536ea7ca4b2ea5009ec';
    var forcast = 'http://api.openweathermap.org/data/2.5/forecast?q='+ location +'&units=metric&appid=331b26eb68b03536ea7ca4b2ea5009ec';

    fetch(weather)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)



        //add object to get data

        })
        .catch(function (error) {
            alert('There was an issue with this search');
        });

    fetch(forcast)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)



        //add object for data

        })
        .catch(function (error) {
            alert('There was an issue with this search');
        });
};



searchBtn.addEventListener('click', function(event){
    event.preventDefault();

    if(cityInput != 0){
        city = cityInput.value;
        getWeather(city);
        console.log(city);
    }else{
        alert("You have not entered a city.");
    };
})











//create object to store search results and save it to local storage.

//create forcast fetch.

//figure out how to use the navigate.geolocate api to auto generate location data.

//manipulate the string that the fetch uses based on the search results.

//