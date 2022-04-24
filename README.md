# Webpack 5 boilerplate - Animations Challenge

[Webpack 5](https://webpack.js.org/) boilerplate with support of most common loaders and modules:

-   [babel](https://babeljs.io/)
-   typescript (using [ForkTsCheckerWebpack](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin) )
-   sass, less, [css modules](https://github.com/css-modules/css-modules) with automatic typescript declaration
-   with react support (also with [react-refresh](https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin))
-   [esLint](https://www.npmjs.com/package/eslint)
-   [prettier](https://www.npmjs.com/package/prettier) (with import sorting using [prettier-plugin-import-sort](https://www.npmjs.com/package/prettier-plugin-import-sort), [import-sort-style-module-and-prefix](https://www.npmjs.com/package/import-sort-style-module-and-prefix))
-   [webpack dev server](https://webpack.js.org/configuration/dev-server/) ([proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy) support is also available)
-   importing svg as react components using [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack)
-   postcss loader (with [autoprefixer](https://www.npmjs.com/package/autoprefixer) and [cssnano](https://www.npmjs.com/package/cssnano))
-   [husky](https://www.npmjs.com/package/husky) prehooks and [lint-staged](https://www.npmjs.com/package/lint-staged)

## Documentation
1. In Home page (path: / or /movies), you will find a search input. Fill in your movie title you want to search and then
hit enter or wait 600ms to automatically search.
2. The results are presented to you with an animation {slide in from left} (Anim time: 200ms); After this the animation on image start (fade in, anim duration: 500ms);
3. Once all the list items are animated, release date start pulse from normal color to gold;
4. You can click one movie from the list and go to this movie details. (path: /movies/:id); There you can see some details about this movie. (like: Rating, IMDB link, etc).

## Quick start

To run this locally:

1. run `https://github.com/John-Vezos/AnimationsChallenge.git`
2. Install all dependencies using `yarn` or `npm install`
3. Start the development server using `yarn start` or `npm run start`
4. Open up [http://localhost:8080](http://localhost:8080)

