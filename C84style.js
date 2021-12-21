canvas = document.getElementById("make_circles");
ctx = canvas.getContext("2d");
var color = "red";
var width = 1;
var lastpositionx = 0;
var lastpositiony = 0;
var width = screen.width;
var newheight = screen.height - 300;
var newwidth = screen.width - 70;

if (width < 992) {
    document.getElementById("make_circles").width = newwidth;
    document.getElementById("make_circles").height = newheight;
    document.getElementById("make_circles").style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touch_start);

function my_touch_start(e) {
    color = document.getElementById("Color_choose").value;
    width = document.getElementById("Width").value;
    lastpositionx = e.touches[0].clientX - canvas.offsetLeft;
    lastpositiony = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", touchdraw);

function touchdraw(e) {
    var mousex = e.touches[0].clientX - canvas.offsetLeft;
    var mousey = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(lastpositionx, lastpositiony);
    ctx.lineTo(mousex, mousey);
    ctx.stroke();

    lastpositionx = mousex;
    lastpositiony = mousey;
}



function erase() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
