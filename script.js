let weather = {
 api_id : '1a6347742bd335886e5b77086b283c3d',
 fetchweather: function (city)  {
     fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
     city +
     "&units=metric&appid=" +
     this.api_id
     ).then((response) => {
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data) => this.displayWeather(data));
},
 displayweather: function(data){
    const {name} = data;
    const {icon,description} = data.weather[0];
    const{temp,humidity} = data.main;
    const {speed} =data.wind;


    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".windspeed").innerText =
      "Wind speed: " + speed + " knots";
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";},
search : function(){
  this.fetchweather(document.querySelector(".search-bar").value) ;},
}

document.querySelector(".search-button").addEventListener("click",function(){
     weather.search();
 });
 
document.querySelector(".search-bar") .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchweather("delhi");
  


