function robotTalk(){
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
    headers: {'Authorization' : "Bearer ya29.c.ElpiBnDVNyE033S3IE51j3dcpwSGDq6B7bOIE7rBa5nTwE6pidxzwIUBoEX-38J4R2vGU4-xlurKMf5_XUHwNIcThDYFH52tpDZuGlKb133QBOImj2NLIUOaKCc" },
    // headers: {'Authorization' : $(gcloud auth application-default print-access-token);
    contentType:  "application/json; charset=utf-8",
    // processData: false,
    // dataType: "json"
    data: thatData
}).then(function(response){
    console.log(response);
    currentResponseId = response.responseId
    console.log(currentResponseId)
    if (currentResponseId === "8cfdde5d-fc93-4f20-b6e0-2a122f793bab") {
        queryWanted = searchTerms.bestAction
        movieSearch(queryWanted)
    }
    
}).catch(function(err){
    console.log(err.responseText)
})
};
// curl -H "Content-Type: application/json; charset=utf-8"  -H "Authorization: Bearer ya29.c.ElpiBnDVNyE033S3IE51j3dcpwSGDq6B7bOIE7rBa5nTwE6pidxzwIUBoEX-38J4R2vGU4-xlurKMf5_XUHwNIcThDYFH52tpDZuGlKb133QBOImj2NLIUOaKCc"  -d "{\"queryInput\":{\"text\":{\"text\":\"Movie\",\"languageCode\":\"en\"}},\"queryParams\":{\"timeZone\":\"America/Los_Angeles\"}}" "https://dialogflow.googleapis.com/v2/projects/rupert-1e1d0/agent/sessions/491284b3-f02d-993f-4d64-b7cdd12f9cca:detectIntent"

// curl -H "Content-Type: application/json; charset=utf-8"  -H "Authorization: Bearer ya29.c.ElpiBnDVNyE033S3IE51j3dcpwSGDq6B7bOIE7rBa5nTwE6pidxzwIUBoEX-38J4R2vGU4-xlurKMf5_XUHwNIcThDYFH52tpDZuGlKb133QBOImj2NLIUOaKCc"  -d "{\"queryInput\":{\"text\":{\"text\":\"Scare me, you stupid robot!\",\"languageCode\":\"en\"}},\"queryParams\":{\"timeZone\":\"America/Los_Angeles\"}}" "https://dialogflow.googleapis.com/v2/projects/rupert-1e1d0/agent/sessions/491284b3-f02d-993f-4d64-b7cdd12f9cca:detectIntent"
function movieSearch(queryWanted){
    var queryURL = 
    "https://api.themoviedb.org/3/discover/movie?api_key=2ed91169ed8d33d4c63c2dd7b3177958&language=en-US&"
    + queryWanted
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        for (var i = 0; i < response.results.length; i++){
            var name = response.results[i].original_title
            console.log(name)
        }
    });
    }
    
    robotTalk()