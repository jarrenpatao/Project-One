function robotTalk() {
    var thatData = JSON.stringify({
        "queryInput": {
            "text": {
                "text": "action", //the value of the form
                "languageCode": "en"
            }
        }
    })

    $.ajax({
        url: "https://dialogflow.googleapis.com/v2/projects/rupert-1e1d0/agent/sessions/491284b3-f02d-993f-4d64-b7cdd12f9cca:detectIntent",
        method: "POST",
        headers: { 'Authorization': "Bearer ya29.c.ElpjBhTS-Eh_OF7aNdeRgF1h4xUjaCATPqkuplBtzDave2YBwoeYnZR37N2Y8A1F9dCIaD0Y7Ijl5Tu3jAC6YwoZhz8h9R95k-oc5UKZGpYc7i2mb_XkYjXVtKA"},
        // get jarren's $(gcloud auth application-default print-access-token)
        contentType: "application/json; charset=utf-8",
        data: thatData
    }).then(function (response) {
        console.log(response);
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
        + queryWanted


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        for (var i = 0; i < response.results.length; i++) {
            var name = response.results[i].original_title
            console.log(name)
        }
    });
}
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api-gate2.movieglu.com/filmsComingSoon/?n=10",
    method: "GET",
    dataType: "json",
    headers: {
        'api-version': "v200",
        'authorization': "Basic QlVTSTpyVzRYWG9UWE1rRUk=",
        'x-api-key': "f3qzMeA36w6Saoxh90qaC8eIGX0kjJCgyysC3Uph",
        'device-datetime': "2018-11-27T13:26:30.147Z",
        'geolocation': "37.872; -122.272",
        'territory': "US",
        'client': "BUSI"
    }
    // processData: false
}).then(function (response) {
    console.log(response)
});
robotTalk()