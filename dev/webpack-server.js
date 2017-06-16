import express from 'express';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import hotReplacement from 'webpack-hot-middleware';

import config from '../webpack.config';

const middlewareConfig = {
  noInfo: true,
  stats: {colors: true},
  publicPath: config.output.publicPath
}

const devMiddleware = () => {
  const app = express();
  const compiler = webpack(config);

  app.use(middleware(compiler, middlewareConfig));
  app.use(hotReplacement(compiler));

  console.log(process.env.RENDER_LOCATION);

  return app;
};

export { devMiddleware };
