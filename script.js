var countDownDate = new Date("Aug 14, 2024").getTime();

var interval = setInterval(function () {

    var now = new Date();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days + "d "
    document.getElementById("hour").innerHTML = hours + "hr "
    document.getElementById("min").innerHTML = minutes + "min "
    document.getElementById("sec").innerHTML = seconds + "sec "

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("count").innerHTML = "EXPIRED!";
    }
}, 1000);