
$(document).ready(function() {
    $('form').submit(function() {
        var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + $("input[name=city]").val() + "&appid=ceb7be7ea564d604e66ee258802b85c7";
        $.get(apiURL, function(data) {
             var tempF = Math.trunc((data.main.temp - 273.15)*1.8 + 32);
             var newHTML = "<h1>" + data.name + "</h1><p>Temperature: " + tempF + "°</p>";
             $("#weatherBox").html(newHTML);
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});