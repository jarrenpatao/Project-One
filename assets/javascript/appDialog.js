var rupert
$("#rupert-button").on("click", function (event) {
    event.preventDefault();
    if ($("#rupert-input").val().trim() === ""){
      return
    }
    else {
        rupert = $("#rupert-input").val()

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
            headers: { 'Authorization': "Bearer ya29.c.ElpjBhTS-Eh_OF7aNdeRgF1h4xUjaCATPqkuplBtzDave2YBwoeYnZR37N2Y8A1F9dCIaD0Y7Ijl5Tu3jAC6YwoZhz8h9R95k-oc5UKZGpYc7i2mb_XkYjXVtKA" },
            // get jarren's $(gcloud auth application-default print-access-token)
            contentType: "application/json; charset=utf-8",
            data: thatData
        }).then(function (response) {
            console.log(response);
            if (response.queryResult.intent.displayName === "Best Action") {
                queryWanted = searchTerms.bestAction
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
    }
});