
//https://www.omdbapi.com/?apikey=25ec282e&s=fast

async function fetchData() {
  const response = await fetch("https://www.omdbapi.com/?apikey=25ec282e&s=fast");
  const data = await response.json();
  console.log(data);
}

fetchData();


//  if (filter === "LOW_TO_HIGH") {
//    books.sort(
//     (a, b) =>
//        (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
//    );
//  } else if (filter === "HIGH_TO_LOW") {
//    books.sort(
//     (a, b) =>
//        (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
//   );
//  } else if (filter === "RATING") {
//    books.sort((a, b) => b.rating - a.rating);
//  }

  



//Movie DATA: 
 //{
 // `title: Gauardians of the Galaxy Vol. 2
 // year: 2017
 // rated: PG-13
//relased: 05 May 2017
 // runtime: 136min
 // Genre: action, adventure, comedy
//  director: James Gunn
 //}

