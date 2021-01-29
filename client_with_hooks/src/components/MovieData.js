import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const MovieData = () => {
	const selectedMovie = useSelector(state => state.selectedMovie);
	const { data, error, loading } = selectedMovie;

	return (
		<div>
			<h2>Movie Data</h2>

			{error && <h2 stlye={{ color: 'red' }}>Error getting movie data</h2>}

			{loading && <h2>Loading ...</h2>}

			{data && (
				<Fragment>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
						<div className='moviePoster'>
							<img src={data.Poster} alt='' />
						</div>

						<div className='media-content'>
							<div className='content'>
								<h1>{data.Title}</h1>
								<h4>{data.Genre}</h4>
								<p>{data.Plot}</p>
							</div>
						</div>
					</div>

					<table>
						<tbody>
							<tr>
								<td>Awards</td>
								<td>{data.Awards}</td>
							</tr>
							<tr>
								<td>Box Office</td>
								<td>{data.BoxOffice}</td>
							</tr>
							<tr>
								<td>MetaScore</td>
								<td>{data.Metascore}</td>
							</tr>
							<tr>
								<td>IMDB Rating</td>
								<td>{data.imdbRating}</td>
							</tr>
							<tr>
								<td>IMDB Votes</td>
								<td>{data.imdbVotes}</td>
							</tr>
						</tbody>
					</table>
				</Fragment>
			)}
		</div>
	);
};

export default MovieData;
