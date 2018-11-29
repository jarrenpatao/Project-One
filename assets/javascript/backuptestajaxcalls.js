$.ajax({
      url:  "https://api.themoviedb.org/3/movie/now_playing?api_key=2ed91169ed8d33d4c63c2dd7b3177958&sort_by=popularity.desc",
      method: "GET"
  }).then(function (response) {
      console.log(response)
      for (var i = 0; i < response.results.length; i++) {
          var name = response.results[i].original_title
          console.log(name)
      }
  });