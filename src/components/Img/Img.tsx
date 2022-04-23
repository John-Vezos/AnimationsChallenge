import { FunctionComponent } from 'react';

interface Props {
  src: string;
  alt?: string;
  className?: string;
}

const Img: FunctionComponent<Props> = ({ src, alt, className }) => (
  <img className={className} src={src} alt={alt} />
);

export default Img;
