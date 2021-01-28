import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMoviesList } from '../actions/movieActions';

class MoviesSearch extends Component {
	state = {
		searchQuery: '',
	};

	submitHandler = e => {
		e.preventDefault();
		console.log('submit');
		this.props.getMoviesList(this.state.searchQuery);
	};

	render() {
		console.log(this.state.searchQuery);
		return (
			<div>
				<h2>Search Movies</h2>
				<form onSubmit={this.submitHandler}>
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

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getMoviesList,
		},
		dispatch
	);

export default connect(null, mapDispatchToProps)(MoviesSearch);
