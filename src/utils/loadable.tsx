import  {lazy, Suspense, ReactNode, ComponentType, ComponentProps} from 'react';

interface Props {
  fallback?: ReactNode | null;
}

const loadable = <T extends ComponentType<any>>(
  importFunc: () => Promise<{default: T}>,
  {fallback = null}: Props = {fallback: null},
) => {
  const LazyComponent = lazy(importFunc);

  return (props: ComponentProps<T>): JSX.Element => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
