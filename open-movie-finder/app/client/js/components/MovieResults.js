import React from 'react';
import Movie from './Movie.js';

class MovieResults extends React.Component {
    render() {
        return (
            <div>
                <h3 className="text-center">Results</h3>
                <hr/>
                {
                    this.props.movies.map(function(movie, index){
                        return (
                            <Movie movie={movie} key={index} />
                        )
                    })
                }
            </div>
        );
    }
}

export default MovieResults;
