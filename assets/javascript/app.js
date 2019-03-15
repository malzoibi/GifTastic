// array of emotions
var emotions = ["sad", "happy", "angry", "nervous", "anxious","calm"];

//create button for each item
function renderButtons(){
    console.log("inrender");
    $("#buttons-view").empty();
    for (var i = 0; i < emotions.length; i++) {
        var a = $("<button>");
        a.addClass("emotion-btn");
        a.attr("data-name", emotions[i]);
        a.text(emotions[i]);
        $("buttons-view").append(a);
    }
}


//create add emotion button 
$("#add-emotion").on("click", function(event){
    console.log("add button");
    event.preventDefault();

    var emotion = $("#emotion-input").val().trim();

    emotions.push(emotion);

    renderButtons();
});



