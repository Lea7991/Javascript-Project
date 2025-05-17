localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));

async function fetchData() {
    const response = await fetch("https://www.omdbapi.com/?apikey=25ec282e&s=fast");
    const data = await response.json();
    const movieList = document.querySelector('.movies');
    movieList.innerHTML = data.Search.map((movie) => movieHTML(movie)).join ("");
      console.log(movieList)
    }
  fetchData();
  

 function showMovie(event){
    const movie = localStorage.setItem("movie", movie);
    window.location.href = "http://127.0.0.1:5500/movies.html";
  }
  
  function getMovies(event) {
    let filteredMovies = movies.filter(movie => movie.Title.toLowerCase().includes('Fast'))
    return filteredMovies;
  }
  