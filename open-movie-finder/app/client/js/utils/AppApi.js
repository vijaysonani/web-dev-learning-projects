import AppActions from '../actions/AppActions';

window.$ = require('jquery');

const AppApi = {

    searchMovies(movie) {
        $.ajax({
            url: 'http://www.omdbapi.com?i=tt3896198&apikey=877a08ec&s=' + movie.title,
            dataType: 'json',
            cache: false,

            success(data) {
                AppActions.receiveMovieResults(data.Search);
            },

            error(xhr, status, error) {
                alert(error);
            },
         });
    }
};

export default AppApi;
