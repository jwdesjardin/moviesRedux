import React from 'react';

const movieDetail = JSON.parse(`{
  "Title": "The Dark Knight",
  "Year": "2008",
  "Rated": "PG-13",
  "Released": "18 Jul 2008",
  "Runtime": "152 min",
  "Genre": "Action, Crime, Drama, Thriller",
  "Director": "Christopher Nolan",
  "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
  "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
  "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  "Language": "English, Mandarin",
  "Country": "USA, UK",
  "Awards": "Won 2 Oscars. Another 156 wins & 163 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "9.0/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "94%"
      },
      {
          "Source": "Metacritic",
          "Value": "84/100"
      }
  ],
  "Metascore": "84",
  "imdbRating": "9.0",
  "imdbVotes": "2,294,527",
  "imdbID": "tt0468569",
  "Type": "movie",
  "DVD": "N/A",
  "BoxOffice": "$534,858,444",
  "Production": "Syncopy",
  "Website": "N/A",
  "Response": "True"
}`);

const MovieData = () => {
	return (
		<div>
			<h2>Movie Data</h2>

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
		</div>
	);
};

export default MovieData;
