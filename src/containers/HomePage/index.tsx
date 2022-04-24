import { FormEvent, Fragment, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

import { MOVIES_URL } from '@src/constants';
import Wrapper from '@src/containers/HomePage/Wrapper';
import fetchGET from '@src/services/fetchGET';

import Input from '@components/Input';
import MovieList from '@components/MovieList';

let timeoutListener: NodeJS.Timeout | null = null;
const HomePage = () => {
  const [movieInput, setMovieInput] = useState('');
  const [moviesList, setMoviesList] = useState<Array<{
    [index: string]: any;
  }> | null>(null);

  const lastSearchInput = useRef<string | null>(null);

  const controller = new AbortController();
  const signal = controller.signal;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (timeoutListener) clearTimeout(timeoutListener);
    getRelevantMovies().catch(() => {
      throw new Error(`Something went wrong!`);
    });
  };

  const getRelevantMovies = async () => {
    if (lastSearchInput.current === movieInput) return;
    lastSearchInput.current = movieInput;
    setMoviesList(null);
    const respRelevantMovies = (await fetchGET(
      `${MOVIES_URL}&query=${movieInput}`,
      signal,
    )) as { [index: string]: { [index: string]: any } } | number;

    if (typeof respRelevantMovies === 'number') {
      setMoviesList([]);
      return;
    }

    setMoviesList(
      respRelevantMovies.results as Array<{ [index: string]: any }>,
    );
    console.log(respRelevantMovies.results);
  };

  const movieInputHandler = (value: string) => {
    setMovieInput(value);
  };

  useEffect(() => {
    if (timeoutListener) clearTimeout(timeoutListener);
    if (!movieInput) {
      setMoviesList(null);
      return;
    }

    timeoutListener = setTimeout(() => {
      getRelevantMovies().catch(() => {
        throw new Error(`Something went wrong!`);
      });
    }, 600);
  }, [movieInput]);

  // clear on leave page
  useEffect(
    () => () => {
      clearTimeout(timeoutListener as NodeJS.Timeout);
      setMoviesList(null);
    },
    [],
  );

  return (
    <Fragment>
      <Helmet>
        <title>HOME | Orthogonality Ltd</title>
        <meta name="description" content="Movies themoviedb" />
      </Helmet>
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
