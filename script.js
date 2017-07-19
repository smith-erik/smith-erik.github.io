
$(document).ready(function() {

    $("form[name='ibanform']").submit(function(e) {
        var iban = $("input[name='iban']", this).val();
        // alternatively var iban = $(this).find("input[name='iban']").val();
        alert(iban);
    });

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
