import loadable from '@src/utils/loadable';

import LoadingIndicator from '@components/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
