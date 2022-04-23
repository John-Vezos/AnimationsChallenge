import { FormEvent, Fragment, useState } from 'react';

import Wrapper from '@src/containers/HomePage/Wrapper';
import fetchGET from '@src/services/fetchGET';

import Input from '@components/Input';
import MovieList from '@components/MovieList';

const MOVIES_API = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'api_key=6de482bc8c5768aa3648618b9c3cc98a';
const INCLUDE_ADULT = 'include_adult=false';
const LANGUAGE = 'language=en-US';
const PAGE = 'page=1';
const COMBINE_URL = `${MOVIES_API}?${API_KEY}&${INCLUDE_ADULT}&${LANGUAGE}&${PAGE}`;

const HomePage = () => {
  const [movieInput, setMovieInput] = useState('');
  const [moviesList, setMoviesList] = useState<Array<{ [index: string]: any }>>(
    [],
  );

  const controller = new AbortController();
  const signal = controller.signal;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMoviesList([]);
    getRelevantMovies().catch(() => {
      throw new Error(`Something went wrong!`);
    });
  };

  const getRelevantMovies = async () => {
    const respRelevantMovies = (await fetchGET(
      `${COMBINE_URL}&query=${movieInput}`,
      signal,
    )) as { [index: string]: { [index: string]: any } };

    setMoviesList(
      respRelevantMovies.results as Array<{ [index: string]: any }>,
    );
    console.log(respRelevantMovies.results);
  };

  const movieInputHandler = (value: string) => {
    setMovieInput(value);
  };

  return (
    <Fragment>
      {/*<Helmet>*/}
      {/*  <title>Home Page</title>*/}
      {/*  <meta*/}
      {/*    name="description"*/}
      {/*    content="A React.js Boilerplate application homepage"*/}
      {/*  />*/}
      {/*</Helmet>*/}
      <Wrapper>
        <form onSubmit={onSubmit}>
          <Input
            id={'movie-search'}
            label={'Movie Name'}
            type={'search'}
            value={movieInput}
            onChange={movieInputHandler}
            placeholder={'Search your movie'}
            required={true}
            // maxWidth={'500px'}
          />
        </form>
        <MovieList list={moviesList} />
      </Wrapper>
    </Fragment>
  );
};
export default HomePage;
