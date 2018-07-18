import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppApi from '../utils/AppApi.js';

const CHANGE_EVENT = 'change';
const movies = [];

function searchMovies(movie) {
    AppApi.searchMovies(movie);
}

const AppStore = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    setMovieResults(movies) {
        movies = movies;
    },

    getMovieResults() {
        return movies;
    },
});


AppStore.dispatchToken = AppDispatcher.register((action) => {
    switch(action.actionType) {
        case AppConstants.SEARCH_MOVIES:
            console.log('Searching for movie with title ' + action.movie.title + '.');
            // searchMovies(action.movie);
            // AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.RECEIVE_MOVIE_RESULTS:
            console.log('Recieved movie results from OMDB API.');
            AppStore.setMovieResults(action.movies);
            // AppStore.emit(CHANGE_EVENT);
            break;
        default:
        // do nothing
    }
});

export default AppStore;
