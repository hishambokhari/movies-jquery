$(document).ready(function(){
  $('#searchForm').on('submit', function(e){
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText){
  axios.get('http://www.omdbapi.com?s='+searchText+'&apikey=thewdb')
   .then((response) => {
      console.log(response);
    })
   .catch((err) => {
     console.log(err);
   });
}