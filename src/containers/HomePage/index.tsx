import ThemeToggle from '@src/containers/ThemeToggle';

import packageJson from '../../../package.json';

const HomePage = () => {
  return (
    <div>
      <ThemeToggle />
      <h1>IT WORKS</h1>

      <div>
        <a
          href="https://github.com/glook/webpack-typescript-react"
          target="_blank"
        >
          @glook/webpack-typescript-react ({packageJson.version})
        </a>
      </div>
    </div>
  );
};
export default HomePage;
