$(document).ready(function() {

    $("button").click(function() {
        var num = $('input').val()
        var balance = 3;
        if (num == balance) {
            $("div").html("Yeah I'm broke...");
        }

        else if (num > balance) {
            $("div").html("I wish");
        }
        else {
            $("div").html("Nope not that broke...");
        }


    });
});










/*
    if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
    */
