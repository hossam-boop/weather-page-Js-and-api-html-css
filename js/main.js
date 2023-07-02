var myhttp = new XMLHttpRequest();
 myhttp.open('GET','https://api.themoviedb.org/3/trending/all/day?api_key=713e5b505cc52f5aa68161a6f9c471c1') ;
 myhttp.send();
 var movies = [];

 myhttp.addEventListener('readystatechange',function () {
    if (myhttp.readyState == 4 && myhttp.status == 200) {
        movies = JSON.parse(myhttp.response).results
        console.log(movies)
        
        
    }
    
 })


