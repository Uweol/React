import React, {useRef, useState} from 'react';
import Input from './input';

const MovieForm = ({addMovie}) => {
    const inputRef = useRef();
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');
   
    const validateForm = () => {
        resetErrors(); 
        let validated = true;
        if (!movieTitle){
            setTitleError('영화제목을 넣어주세요');
            validated = false;
        }
        if(!movieYear){
            setYearError('개봉연도를 넣어주세요');
            validated = false;
        }
        return validated;
    }
    const resetErrors = () =>{
        setTitleError('영화제목을 넣어주세요');
        setYearError('연도를 넣어주세요');
    }
    const onSubmitAddMovie = (e) => {
        e.preventDefault();
        // console.log('영화추가')
        // setMovies가 입력된 값으로 바뀜.
        if (validateForm()){
            addMovie(//... : 기존에 있는 것을 그대로 가져올 때 사용하는 것
            {id: Date.now(), title: movieTitle, year: movieYear}
             )
        resetErrors();
        setMovieTitle('');
        setMovieYear('');
        }
        inputRef.current.focus(); //자동으로 입력창에 포커스 잡힘
      }
    return (
        <div>
            <form onSubmit={onSubmitAddMovie}>
            <Input type ="text" value = {movieTitle} placeholder="영화제목" onChange={ e => setMovieTitle(e.target.value)} errorMessage = {titleError} />
            <input ref={inputRef} type="text" placeholder='영화제목' value={movieTitle} onChange={(e) => {setMovieTitle(e.target.value)}} />
            {/* <div style={{color: 'red', fontSize: '12px', marginBottom: '10px'}}>{titleError}</div> */}
            <input type="number" placeholder='개봉연도' value={movieYear} onChange={ e => setMovieYear(e.target.value)} errorMessage = {yearError} />
            {/* <div style={{color: 'red', fontSize: '12px', marginBottom: '10px'}}>{yearError}</div> */}
            <button type='submit'>영화추가</button>
            </form>
        </div>
    );
};

export default MovieForm;