$(document).ready(function() {
    var requiredElements = [    $("input[name='firstname']"),
                                $("input[name='email']"),
                                $("input[name='username']"),
                                $("input[name='password']") ];

    var numberAlert = false;

    //RUNS WHEN KEY IS PRESSED ON PHONE, CHECK IF INPUT IS NUMBER IN PHONE
    $("input[name='phone']").keypress(function(event) {
        if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
            event.preventDefault();

            if(!numberAlert) {
                numberAlert = true;
                displayMessage("You can only use digits for phone numbers!")
            }
        }
    });

    //RUNS WHEN OTHER IS CLICKED, CHECKS IF OTHER HOBBY IS SELECTED, IF SO NEW INPUT FIELD WILL BE CREATED, IF NOT INPUT FIELD WILL BE REMOVED
    $("input[name='hobby'][value='other']").click(function() {
        if($(this).is(":checked")) {
            var $textInput = $("<input>", {
                "type" : "text",
                "name" : "otherText"
            }).insertAfter("input[name='hobby'][value='other']");

            var $textInputBeak = $("<br>", { "id" : "otherTextBreak" }).insertBefore($textInput);
        } else {
            $("input[name='otherText']").remove();
            $("#otherTextBreak").remove();
        }
    });

    //RUNS WHEN KEY IS PRESSED, VALIDATES IF REQUIRED INPUT FIELDS HAVE VALUE, CHANGES SUBMIT BUTTON
    $(this).keypress(function() {
        for(var i = 0; i < requiredElements.length; i++) {
            if(!requiredElements[i].val()) {
                $("button.submit").prop("disabled", true);
                return;
            }
        }
        $("button.submit").prop("disabled", false);
    });
});

//FUNCTION FOR DISPLAYING MESSAGES UNDER THE H1 TAG
function displayMessage(msg) {
    var $msgBox = $("<div>", {
        "class" : "msg"
    }).insertAfter($("h1"));

    var $msgP = $("<p>").appendTo($msgBox);
    $msgP.append(msg);
}

