import React, { Component } from 'react';

class MoviesSearch extends Component {
	state = {
		searchQuery: '',
	};

	render() {
		console.log(this.state.searchQuery);
		return (
			<div>
				<h2>Search Movies</h2>
				<form>
					<input
						type='text'
						placeholder='search for a movie...'
						value={this.state.searchQuery}
						onChange={e => this.setState({ searchQuery: e.target.value })}
					/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default MoviesSearch;
