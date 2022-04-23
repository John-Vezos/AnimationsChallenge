import { FunctionComponent } from 'react';

import MovieItem from '@components/MovieItem';

import Wrapper from './Wrapper';

interface Props {
  list: Array<{ [index: string]: any }>;
}
const MovieList: FunctionComponent<Props> = ({ list }) => (
  <Wrapper>
    <ul>
      {list.map((item, index) => (
        <MovieItem
          key={index}
          order={index}
          item={item}
          listLength={list.length}
        />
      ))}
    </ul>
  </Wrapper>
);

export default MovieList;
