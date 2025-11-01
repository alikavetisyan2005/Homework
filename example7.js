class User{
    constructor(name,age,email,watchlist){
        this.name = name;
        this.age = age;
        this.email = email;
        this.watchlist = new Watchlist();

    }
    addToWatchlist(Movie){
        this.watchlist.movies.push(Movie);
    }
    showWatchList(){
        console.log(this.watchlist.movies);
    }
    rateMovie(Movie, score){
        Movie.ratings.push(score);
    }
    showMovieRating(Movie){
        console.log(Movie.ratings);
    }
    RemoveFromWatchlist(movie){
        this.watchlist.movies = this.watchlist.movies.filter(m => m !== movie);
    }

}
class Movie{
    constructor(title,genre,duration){
        this.title = title;
        this.genre = genre;
        this.duration = duration;
        this.ratings = [];
    }
}
class Rating{
    constructor(user,movie,score){
        this.user = user;
        this.movie = movie;
        this.score = score;
    }

}
class Watchlist{
    constructor(){
        this.movies = [];

    }

}

const user = new User("Albert", 20, "alik.avetisyan.005@mail.ru");
const movie1 = new Movie("Interstellar", "Sci-Fi", "180 minutes");
const movie2 = new Movie("Shutter Island", "Drama", "150 minutes");
user.addToWatchlist(movie1);
user.RemoveFromWatchlist(movie1);
user.addToWatchlist(movie2);
user.showWatchList();
user.rateMovie(movie1, 10);
user.showMovieRating(movie1);

