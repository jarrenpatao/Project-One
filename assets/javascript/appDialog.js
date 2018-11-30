var textarea = document.getElementById('rupert-input');
textarea.scrollTop = textarea.scrollHeight;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC9oG6iJbZAA91mZRFG7aLBUrlfZ9Be-c0",
    authDomain: "rupert-1e1d0.firebaseapp.com",
    databaseURL: "https://rupert-1e1d0.firebaseio.com",
    projectId: "rupert-1e1d0",
    storageBucket: "rupert-1e1d0.appspot.com",
    messagingSenderId: "171909528066"
};
firebase.initializeApp(config);

var database = firebase.database();

function resetText() {
    database.ref().remove();
}
resetText();

var ruTalk = $('#chatty')
ruTalk.animate({
    scrollTop: ruTalk.get(0).scrollHeight
}, 1000);

var rupert;
$("#rupert-button").on("click", function (event) {
    event.preventDefault();
    ruTalk.animate({
        scrollTop: ruTalk.get(0).scrollHeight
    }, 1000);

    if ($("#rupert-input").val().trim() === "") {
        return;
    }
    else {
        rupert = $("#rupert-input").val()
        $('#ruAnswer').empty();
        $('#card3').empty();

        var message = {
            text: rupert,
        };
        // push to firebase
        database.ref().push(message);
        // test

        function robotTalk() {
            var thatData = JSON.stringify({
                "queryInput": {
                    "text": {
                        "text": rupert, //the value of the form

                        "languageCode": "en"
                    }
                }
            })

            $.ajax({
                url: "https://dialogflow.googleapis.com/v2/projects/rupert-1e1d0/agent/sessions/491284b3-f02d-993f-4d64-b7cdd12f9cca:detectIntent",
                method: "POST",
                headers: { 'Authorization': "Bearer ya29.c.ElpkBtZz6DzAZDD935IBTZzY6onT-vA1vt7Jnfbwm2QHbRcit8MmoFxHbC2OLh81NDmidx7hYR6WV6oupNE1JkBUCAVG1ZTQnhfM9m0NA79A15vxbEL5-L6UgR4" },

                // get jarren's $(gcloud auth application-default print-access-token)
                contentType: "application/json; charset=utf-8",
                data: thatData
            }).then(function (response) {
                console.log(response);
                var rupertAnswer = response.queryResult.fulfillmentText

                var message = {
                    text: rupertAnswer,
                    speaker: "rupert",
                };

                // push to firebase
                database.ref().push(message);
                if (response.queryResult.intent.displayName === "In Theaters") {
                    queryWanted = searchTerms.inTheaters
                    movieSearch(queryWanted)
                }

                if (response.queryResult.intent.displayName === "Popular") {
                    queryWanted = searchTerms.popular
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Popular Kids") {
                    queryWanted = searchTerms.popularKids
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best of Year") {
                    queryWanted = searchTerms.bestOfYear
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Action") {
                    queryWanted = searchTerms.bestAction
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Animation") {
                    queryWanted = searchTerms.bestAnimation
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Comedy") {
                    queryWanted = searchTerms.bestComedies
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Crime") {
                    queryWanted = searchTerms.bestCrime
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Documentary") {
                    queryWanted = searchTerms.bestDocumentary
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Drama") {
                    queryWanted = searchTerms.bestDramas
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Family") {
                    queryWanted = searchTerms.bestFamily
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Fantasy") {
                    queryWanted = searchTerms.bestFantasy
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best History") {
                    queryWanted = searchTerms.bestHistory
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Horror") {
                    queryWanted = searchTerms.bestHorror
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Musical") {
                    queryWanted = searchTerms.bestMusical
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Mystery") {
                    queryWanted = searchTerms.bestMystery
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Romantic Comedy") {
                    queryWanted = searchTerms.bestRomanticComedies
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Sci-Fi") {
                    queryWanted = searchTerms.bestScienceFiction
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Thriller") {
                    queryWanted = searchTerms.bestThriller
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best War") {
                    queryWanted = searchTerms.bestWar
                    movieSearch(queryWanted)
                }
                if (response.queryResult.intent.displayName === "Best Western") {
                    queryWanted = searchTerms.bestWestern
                    movieSearch(queryWanted)
                }


            }).catch(function (err) {
                console.log(err.responseText)
            })

        };

        function movieSearch(queryWanted) {

            var queryURL =
                "https://api.themoviedb.org/3/discover/movie?api_key=2ed91169ed8d33d4c63c2dd7b3177958&language=en-US&"
                + queryWanted;


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response)
                for (var i = 0; i < 7; i++) {
                    var name = response.results[i].original_title
                    var poster = "<img src=" + "'https://image.tmdb.org/t/p/w500" + response.results[i].poster_path + "'</img>";
                    // console.log(name)
                    var plot = response.results[i].overview
                    $("#ruAnswer").append("<div class='movie-title'>" + name + "</div>" + poster + "<div class='movie-plot'>" + plot + "</div>" + "<hr>");
                    var movieID = response.results[i].id
                    // movie1 = response.results[0].id
                    //call trailers api with an ajax function
                    movieTrailers(movieID)
                    // movieTrailers(movie1)
                }
            });
        }

        robotTalk()
    }

});


function movieTrailers(movieID){
    $.ajax({
        url: "https://api.themoviedb.org/3/movie/" + movieID +"/videos" + "?api_key=2ed91169ed8d33d4c63c2dd7b3177958&language=en-US",
        method: "GET"
    }).then(function (response){
        $("#card3").append("<iframe height='100%' src='https://www.youtube.com/embed/" + response.results[0].key + "'frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" + "<br>")
        console.log(response.results[0].key)
    })
}

database.ref().on("child_added", function (childSnapshot) {

    // Store everything into a variable.
    var ans = $("#chatty").append(childSnapshot.val().text)
    ans.append($("<hr>"))
    $("#rupert-input").val("")
    //append message to bubble on left side
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);

});

