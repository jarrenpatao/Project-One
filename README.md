# Project-One
first class group assignment


**Pseudocode**

Launch Application on document load
User triggers conversation with start phrase
Rupert will respond with greeting
Rupert will ask if the user wants to look up a movie
 ***USER INPUT***
 ***Yes***
   Rupert asks what kind of movie the user likes
     ***USER INPUT: genre***
       ***Genre[i]***
         Rupert will take user entry and return top 10 movies from that genre via TMDb
         Rupert will return response related to search context (e.g. bleghhhh - Vampire/Horror)
           ***if RUPERT INPUT === !correct (e.g USER INPUT: "I don't like these movies")***
             Rupert will return 10 more responses
           ***if USER CLICKS on (RUPERT INPUT).inTheatres***
             Rupert will display movie times at nearestTheater
     Fallback response
 ***No***
   Rupert gets sassy and tells user to find a different chat-bot
 ***Find a theater***
   Rupert will request user location
     User will input location
       User input will feed to movieGlu and search for nearestTheater based on lat/lon
         nearestTheatre will populate movies and movie times
           Clicking on movie time will re-direct to fandango or some shit to buy the ticket
 ***??? (Unrecogized input)*** 
   Fallback response


