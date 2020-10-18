var last_date = new Date("oct 2, 2020 10:00:00").getTime();


var x = setInterval(function(){

var today_date = new Date().getTime();
    
var difference = last_date - today_date;

var days = Math.floor(difference / (24*60*60*1000));
var hours = Math.floor((difference % (24*60*60*1000)) / (1000*60*60));
var minutes = Math.floor((difference % (60*60*1000)) / (1000*60));
var secs = Math.floor((difference % (60*1000)) / (1000));

document.getElementById('demo').innerHTML = "Day :" + days + ", Hrs :" + hours + ", Min :" + minutes + ", sec :" +secs ;

},1000);