// var weather = 'http://api.openweathermap.org/data/2.5/weather?q=dubbo&units=metric&appid=331b26eb68b03536ea7ca4b2ea5009ec';
// var forcast = 'http://api.openweathermap.org/data/2.5/forecast?q=dubbo&units=metric&appid=331b26eb68b03536ea7ca4b2ea5009ec';

function getWeather(location,unitOfMeasure){

    var weather = 'http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=331b26eb68b03536ea7ca4b2ea5009ec';

    fetch(weather)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)
        });


};


getWeather();


//create object to store search results and save it to local storage.

//create forcast fetch.

//figure out how to use the navigate.geolocate api to auto generate location data.

//manipulate the string that the fetch uses based on the search results.

//