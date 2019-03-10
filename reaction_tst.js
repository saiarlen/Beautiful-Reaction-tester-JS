var startTime = new Date().getTime();

function ranColor() {
    var hexCode = "0123456789ABCDEF".split("");
    var color = "#";
    for (i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * 16)];
    }
    return color;
}

function ranShape() {
    var top = Math.random() * 300;
    var left = Math.random() * 800;
    var width = (Math.random() * 150) + 100;
    if (Math.random() > 0.5) {
        document.getElementById("canvas").style.borderRadius = "50%";
    } else {
        document.getElementById("canvas").style.borderRadius = "0";
    }
    document.getElementById("canvas").style.backgroundColor = ranColor();
    document.getElementById("canvas").style.width = width + "px";
    document.getElementById("canvas").style.height = width + "px";
    document.getElementById("canvas").style.top = top + "px";
    document.getElementById("canvas").style.left = left + "px";
    document.getElementById("canvas").style.display = "block";
    startTime = new Date().getTime();
}

function delayFun() {
    setTimeout(ranShape, Math.random() * 2000);
}



delayFun();
var list = [];
document.getElementById("canvas").onclick = function () {

    document.getElementById("canvas").style.display = "none";
    var endTime = new Date().getTime();
    finalTime = (endTime - startTime) / 1000;
    list.push(finalTime);
    document.getElementById("timetaken").innerHTML = finalTime + " Seconds";
    delayFun();
}
document.getElementById("btn").onclick = function () {

    list.sort(function (a, b) {
        return a - b
    });
    window.alert(list[0] + " Sec  is your list time");
    location.reload();
}