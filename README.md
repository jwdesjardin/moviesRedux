This project is going to use redux to manage app state.
The app state will consist of two main actions:

1. to get a movies list fetched from the OMDB API. 
2. to get data of a specific movie fetched from the OMDB API. 

**Constants:**
- FETCH_MOVIE_LIST_LOADING
- FETCH_MOVIE_LIST_SUCCESS
- FETCH_MOVIE_LIST_FAIL

- FETCH_MOVIE_DATA_LOADING
- FETCH_MOVIE_DATA_SUCCESS
- FETCH_MOVIE_DATA_FAIL

## WORKFLOW

1. create app
3. create actions
2. create reducers
4. create store
5. write integration tests
6. create react stateful components to search and display movies
7. fire action in component
8. refactor with hooks
   