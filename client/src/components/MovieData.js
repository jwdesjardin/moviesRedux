import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const MovieData = ({ movieDetail, error }) => {
	return (
		<div>
			<h2>Movie Data</h2>

			{error && <h2 stlye={{ color: 'red' }}>Error getting movie data</h2>}

			{movieDetail && (
				<Fragment>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
						<div className='moviePoster'>
							<img src={movieDetail.Poster} alt='' />
						</div>

						<div className='media-content'>
							<div className='content'>
								<h1>{movieDetail.Title}</h1>
								<h4>{movieDetail.Genre}</h4>
								<p>{movieDetail.Plot}</p>
							</div>
						</div>
					</div>

					<table>
						<tbody>
							<tr>
								<td>Awards</td>
								<td>{movieDetail.Awards}</td>
							</tr>
							<tr>
								<td>Box Office</td>
								<td>{movieDetail.BoxOffice}</td>
							</tr>
							<tr>
								<td>MetaScore</td>
								<td>{movieDetail.Metascore}</td>
							</tr>
							<tr>
								<td>IMDB Rating</td>
								<td>{movieDetail.imdbRating}</td>
							</tr>
							<tr>
								<td>IMDB Votes</td>
								<td>{movieDetail.imdbVotes}</td>
							</tr>
						</tbody>
					</table>
				</Fragment>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	movieDetail: state.selectedMovie.data,
	error: state.selectedMovie.error,
});

export default connect(mapStateToProps)(MovieData);
