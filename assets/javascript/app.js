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
        $("#buttons-view").append(a);
    }
}


//create add emotion button 
$("#add-emotion").on("click", function(event){
    event.preventDefault();

    var emotion = $("#emotion-input").val().trim();

    emotions.push(emotion);

    renderButtons();
});

//add gif
function displayGifs(){
	var emotion = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&limit=9&api_key=dc6zaTOxFJmzC";

		$.ajax({url: queryURL, method: "GET"}).done(function (response) {
			console.log(response.data);
			// save results as a variable
			var results = response.data;
			// for loop goes through each gif and adds these variables
			for (var i = 0; i < results.length; i++) {
				// creates a generic div to hold the results
				var gifDiv = $('<div class=gifs>');
				var showGif = $('<img>');
					showGif.attr('src', results[i].images.fixed_height_still.url);
					
				
				gifDiv.append(showGif)

				$("#view-gif").prepend(gifDiv);
			}
			
		});
}