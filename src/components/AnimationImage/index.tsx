import { FunctionComponent } from 'react';

import SvgImagePlaceholder from '@src/assets/icons/ImagePlaceholder';

import Img from './Img';
import Wrapper from './Wrapper';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

interface Props {
  item: { [index: string]: any };
  anim_duration: number;
  anim_delay: number;
}
const AnimationImage: FunctionComponent<Props> = ({
  item,
  anim_duration,
  anim_delay,
}) => (
  <Wrapper
    anim_duration={anim_duration}
    anim_delay={anim_delay}
    disableBackground={!!item.poster_path}
  >
    <SvgImagePlaceholder />
    {item.poster_path && (
      <Img
        src={`${IMAGE_URL}${item.poster_path as string}`}
        alt={item.original_title as string}
      />
    )}
  </Wrapper>
);

export default AnimationImage;
