import React from 'react';
import AppStore from '../stores/AppStore';
import SearchForm from './SearchForm.js';
import MovieResults from './MovieResults.js';

function getStateFromStore() {
  return {
    movies: AppStore.getMovieResults()
  };
}

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = getStateFromStore();
      this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState(getAppState());
    }

    componentDidMount() {
        AppStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this.onChange);
    }

    render() {
        const movie_results = (this.state.movies == '') ? '' : <MovieResults movies={this.state.movies} />;
        return(
            <div>
                <SearchForm />
                {movie_results}
            </div>
        );
    }
};

export default App;
