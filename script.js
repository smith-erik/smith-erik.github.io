
$(document).ready(function() {

    var tooltip = $(".hovertext")

    $("a.upcoming").hover(function(){
        tooltip.toggle();
    }, function() {
        tooltip.toggle();
    });

    $(window).mousemove(function(e) {
        /* Act on the event */
        var x = e.clientX, y = e.clientY;
        tooltip.css({
            top: (y + 20) + 'px',
            left: (x + 20) + 'px'
        });
    });
});
