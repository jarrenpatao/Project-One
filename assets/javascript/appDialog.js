var thatData = JSON.stringify({
    "contexts": [
      "shop"
    ],
    "lang": "en",
    "query": "I need apples",
    "sessionId": "b1973977-20be-4cdc-85a5-7f4225cfdb5a",
    "timezone": "A merica/New_York"
  })

$.ajax({
    url: "https://api.dialogflow.com/v1/query?v=20180910",
    type: "POST",
    headers: {'Authorization' : "Bearer 126418ab95c44f5f9f46d15de9854561" },
    contentType:  "application/json; charset=utf-8.",
    processData: false,
    dataType: "json",
    data: thatData
}).then(function(response){
    console.log(response);
}).catch(function(err){
    console.log(err)
})//DialogFlow 