import React, {useState} from 'react';
import './App.css';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm'



function App() {
  const [movies, setMovies] = useState(
    [
    {id: 'Date.now()', title: '바람과 함께 사라지다', year: 2022},
    {id: 'Date.now()', title: '해빙', year: 2021},
    {id: 'Date.now()', title: '끝까지간다', year: 2020},
    {id: 'Date.now()', title: '한산', year: 2022},
    {id: 'Date.now()', title: '헌트', year: 2022},
    {id: 'Date.now()', title: '정직한후보', year: 2022}]
  )

  const renderMovies = movies.map((movie) => {
    return(
      <Movie movie={movie} key={movie.title}/>
    )
  })
  
  const addMovie = (movie) => {
      setMovies([
            ...movies,movie
      ]);
  }

  return (
   <div className="App">
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie}/>
      {renderMovies}
      {/* <form onSubmit={onSubmitfn}>
        <input className="input" type="text" placeholder='영화제목' value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)}/>
        <input className="input" type="text" placeholder='개봉연도' value={movieYear} onChange={(e) => setMovieYear(e.target.value)}/>
        <button className="button" type='submit'>영화 추가</button>
      </form>
      {renderMovies}
      {/* {renderMovies} */}
      {/* <div className="movie">
        <div className="movie-title">바람과 함께 사라지다</div>
        <div className="movie-year">2022</div>
      </div>
      <div className="movie">
        <div className="movie-title">해빙</div>
        <div className="movie-year">2021</div>
      </div>
      <div className="movie">
        <div className="movie-title">끝까지간다</div>
        <div className="movie-year">2020</div>
      </div> */} 
   </div>
  );
}

export default App;
