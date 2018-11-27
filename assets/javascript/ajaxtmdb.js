// we need some basic things the user can search for.

var Year = 2010 //or whatever year user enters into chatbot
var searchTerms = {
    popular: "sort_by=popularity.desc", 
    popularKids: "certification_country=US&certification.lte=PG&sort_by=popularity.desc", 
    bestOfYear: "primary_release_year=" + Year + "&sort_by=popularity.desc",
    bestDramas: "with_genres=18&sort_by=vote_average.desc&vote_count.gte=100"

}
var queryURL = 
"https://api.themoviedb.org/3/discover/movie?api_key=2ed91169ed8d33d4c63c2dd7b3177958&language=en-US&"
+ searchTerms.popularKids


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
});

