import React from 'react';
import AppApi from '../utils/AppApi';

const AppActions = require('../actions/AppActions').default;

class SearchForm extends React.Component {
    constructor(props) {
      super(props);

      AppApi.searchMovies('lord');
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        const movie = {
            title: this.refs.title.value.trim()
        };

        AppActions.searchMovies(movie);
    }

    render() {
        return (
            <div className="search-form">
                <h1 className="text-center">Search for a movie</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="title" placeholder="Enter a Movie Title..."/>
                    </div>
                    <button className="btn btn-primary btn-block">Search Movies</button>
                </form>
            </div>
    );
  }
}

export default SearchForm;
