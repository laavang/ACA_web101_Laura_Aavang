// Start jQuery
$( document ).ready(function() {

    // Counter for number of texts sent to the Sunnies
    var count = 0;

    $( "#clicker" ).click(function() {
        // Each time the button is clicked, add 1 to the text message count
        count++;
        $("#counter").html(count);
        // Console log the current text count
        console.log(count);

        // If 80 texts have been sent, do the following:
        if (count >= 80) {
            // Show Sunny #8 as "summoned"
            $("#sunny8").addClass("summoned");
            // Remove clicker button
            $( "#clicker" ).remove();
            // Move first row of sunnies down
            $("#sunny1, #sunny2, #sunny3, #sunny4").addClass("moveDown");
            // Move second row of sunnies up
            $("#sunny5, #sunny6, #sunny7, #sunny8").addClass("moveUp");
            // Change h2 text to "Success! Let's Roll."
            $("h2").html("Success! Let's Roll.");
        }
        // If 70 texts have been sent, show Sunny #7 as "summoned"
        else if (count >= 70) {
            $("#sunny7").addClass("summoned");
        }
        // If 60 texts have been sent, show Sunny #7 as "summoned"
        else if (count >= 60) {
            $("#sunny6").addClass("summoned");
        }
        // If 50 texts have been sent, show Sunny #7 as "summoned"
        else if (count >= 50) {
            $("#sunny5").addClass("summoned");
        }
        // If 40 texts have been sent, show Sunny #7 as "summoned"
        else if (count >= 40) {
            $("#sunny4").addClass("summoned");
        }
        // If 30 texts have been sent, show Sunny #7 as "summoned"
        else if (count >= 30) {
            $("#sunny3").addClass("summoned");
        }
        // If 20 texts have been sent, show Sunny #7 as "summoned"
        else if (count >= 20) {
            $("#sunny2").addClass("summoned");
        }
        // If 10 texts have been sent, show Sunny #7 as "summoned"
        else if (count >= 10) {
            $("#sunny1").addClass("summoned");
        }
        // If less than 10 texts have been sent, console log "No sunnies have been successfully summoned yet"
        else {
            console.log("No sunnies have been successfully summoned yet");
        }
    });


});