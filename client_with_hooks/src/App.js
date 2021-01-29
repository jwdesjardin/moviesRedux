import MoviesSearch from './components/MoviesSearch';
import MovieData from './components/MovieData';
import SearchResults from './components/SearchResults';

function App() {
	return (
		<div className='singlePage'>
			<h1>
				OMDB Movie Search <span>- with redux</span>
			</h1>
			<MoviesSearch />
			<SearchResults />
			<MovieData />
		</div>
	);
}

export default App;
