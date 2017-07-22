
$(document).ready(function() {

    // Idea: gray pre-filled text, remove when focused.
    // Button press animation, see material design.

    var $iban_input = $("form[name='ibanform'] input[name='iban']");

    $iban_input.focusin(function () {
        if ($(this).val() == $(this).attr("value")) {
            $(this).val("");
        }
        $(this).css("color", "#000");
    });

    $iban_input.focusout(function() {
        if ($(this).val().trim().length == 0) {
            $(this).css("color", "#999");
            $(this).val($iban_input.attr("value"));
        }
    });


    $("form[name='ibanform'] button[name='submit']").click(function() {
        // $(this).find("...") or $("...", this)
        let iban = $iban_input.val().toUpperCase();
        for (var letter in alpha_to_num_dict) {
            let re = new RegExp(letter, "g");
            iban = 
                iban.replace(re, alpha_to_num_dict[letter]);
        }
        $iban_input.val(iban);
    });

    // Reset values when reset button is clicked
    $("form[name='ibanform'] button[name='reset']").click(function() {
        $iban_input.val($iban_input.attr("value"));
        $iban_input.css("color", "#999");
    });

    var $tooltip = $(".hovertext");

    $("a.upcoming").hover(function() {
        $tooltip.toggle();
    }, function() {
        $tooltip.toggle();
    });

    $(window).mousemove(function(e) {
        /* Act on the event */
        var x = e.clientX, y = e.clientY;
        $tooltip.css({
            top: (y + 20) + "px",
            left: (x + 20) + "px"
        });
    });

    // Alphabet to numbers map
    var alpha_to_num_dict = {};
    for (i = 10; i < 36; i++) {
        let alphabet_capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        alpha_to_num_dict[alphabet_capital.charAt(i - 10)] = i;
    }

});
