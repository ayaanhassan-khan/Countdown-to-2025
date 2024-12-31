
var countDownDate = new Date("January 1, 2025 00:00:00").getTime();


var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var result = Math.round(distance / 1000);
    document.getElementById("countdown").innerHTML = result;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "2025";
        document.getElementById("countdown").classList.add('p150');
        document.querySelector('.content').classList.add('p1502');
        document.querySelector('body').classList.add('firework');
        const elements = document.querySelectorAll('#text');

        elements.forEach(element => {
            element.innerHTML = null;
        });
    }
}, 1000);
