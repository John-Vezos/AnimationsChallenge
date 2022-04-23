import { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import SpaceBetween from '@src/containers/MoviePage/SpaceBetween';
import fetchGET from '@src/services/fetchGET';

import Categories from './Categories';
import H1 from './H1';
import H2 from './H2';
import Img from './Img';
import ImgCenter from './ImgCenter';
import RatingInfo from './RatingInfo';

const MOVIES_API = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=6de482bc8c5768aa3648618b9c3cc98a';
const LANGUAGE = 'language=en-US';

const COMBINE_QUERIES = API_KEY + '&' + LANGUAGE;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState<{
    [index: string]: any;
  } | null>(null);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    const getMovieDetails = async () => {
      const respMovieDetails = (await fetchGET(
        `${MOVIES_API}${id as string}?${COMBINE_QUERIES}&${API_KEY}`,
        signal,
      )) as { [index: string]: any } | number;

      if (typeof respMovieDetails === 'number') {
        navigate('/movies', { replace: true });
        return;
      }

      setMovieDetails(respMovieDetails);
      console.log(respMovieDetails);
    };
    getMovieDetails().catch(error =>
      console.error('Something went wrong!', error),
    );
  }, [id]);

  // interrupt request when leave this page.
  useEffect(
    () => () => {
      controller.abort();
    },
    [],
  );

  return (
    <Fragment>
      {/*<Helmet>*/}
      {/*  <title>Home Page</title>*/}
      {/*  <meta*/}
      {/*    name="description"*/}
      {/*    content="A React.js Boilerplate application homepage"*/}
      {/*  />*/}
      {/*</Helmet>*/}
      {movieDetails && (
        <div>
          <ImgCenter>
            {movieDetails.poster_path && (
              <Img src={`${IMAGE_URL}${movieDetails.poster_path as string}`} />
            )}
          </ImgCenter>

          <SpaceBetween>
            <H1>Original title: {movieDetails.original_title}</H1>

            <RatingInfo>
              <div>
                Rating: <strong>{movieDetails.vote_average}</strong> / 10
              </div>
              <div> Voters: {movieDetails.vote_count}</div>
              <div>Popularity: {movieDetails.popularity}</div>
              <div>
                <a
                  href={`https://www.imdb.com/title/${
                    movieDetails.imdb_id as string
                  }`}
                  target={'_blank'}
                >
                  IMDB
                </a>
              </div>
            </RatingInfo>
          </SpaceBetween>
          <Categories>
            {(
              movieDetails as {
                [index: string]: Array<{ [index: string]: any }>;
              }
            ).genres.map(item => (
              <span>{item.name}</span>
            ))}
          </Categories>
          <H2>Overview</H2>
          <p>{movieDetails.overview}</p>
        </div>
      )}
    </Fragment>
  );
};
export default MoviePage;
