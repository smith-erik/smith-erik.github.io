var nav2 = document.getElementById('test');
nav2.onmouseover = showHover;
nav2.onmouseout = hideHover;

var tooltip = document.getElementById('hovertext');

function showHover() {
	tooltip.style.display = "block";
}

function hideHover() {
	tooltip.style.display = "none";
}

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltip.style.top = (y + 20) + 'px';
    tooltip.style.left = (x + 20) + 'px';
};