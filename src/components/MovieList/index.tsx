import { FunctionComponent } from 'react';

import MovieItem from '@components/MovieItem';

import H2 from '../H2';
import Wrapper from './Wrapper';

interface Props {
  list: Array<{ [index: string]: any }> | null;
}

const noResults = <H2>No results!</H2>;
const MovieList: FunctionComponent<Props> = ({ list }) => (
  <Wrapper>
    {list && (
      <ul>
        {list.map((item, index) => (
          <MovieItem
            key={index}
            order={index}
            item={item}
            listLength={list.length}
          />
        ))}
        {list.length === 0 && noResults}
      </ul>
    )}
  </Wrapper>
);

export default MovieList;
