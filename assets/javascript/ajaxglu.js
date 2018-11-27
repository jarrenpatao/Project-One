
// f3qzMeA36w6Saoxh90qaC8eIGX0kjJCgyysC3Uph

var whatAsking = "cinemasNearby/?n=5"
var queryURL = "https://cors-anywhere.herokuapp.com/https://api-gate2.movieglu.com/" + whatAsking
// "https://api.themoviedb.org/3/discover/movie?api_key=2ed91169ed8d33d4c63c2dd7b3177958&language=en-US&"
// + searchTerms.popularKids
var userPosition
navigator.geolocation.getCurrentPosition(function(position) {
    // do_something(position.coords.latitude, position.coords.longitude);
    // console.log(position)
    userPosition = position.coords.latitude.toFixed(3) + "; " + position.coords.longitude.toFixed(3)
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    console.log(userPosition)
    movieCall(userPosition)
  });

  function movieCall(userPosition){
$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
    headers: {
        'api-version': "v200",
        'authorization': "Basic QlVTSTpyVzRYWG9UWE1rRUk=",
        'x-api-key': "f3qzMeA36w6Saoxh90qaC8eIGX0kjJCgyysC3Uph",
        'device-datetime': "2018-11-27T13:26:30.147Z",
        'geolocation': "" + userPosition + "",
        'territory': "US",
        'client': "BUSI"
    }
    // processData: false
}).then(function(response) {
    console.log(response)
});

}
// curl "https://api-gate2.movieglu.com/filmsComingSoon/?n=1" -H 
// "api-version: [VERSION]" -H "Authorization: [BASIC AUTHENTICATION]" -H 
// "x-api-key: [API-KEY]" -H "device-datetime: [DATE-TIME]" -H "territory: [TERRITORY]" -H "client: [USERNAME]"