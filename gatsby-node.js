const path = require('path');

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  const { setWebpackConfig } = actions;
  const PRODUCTION = stage !== 'develop';
  const isSSR = stage.includes('html');

  const sassLoader = {
    loader: require.resolve('sass-loader'),
    options: {
      sourceMap: !PRODUCTION
    }
  };

  // const sassRule = {
  //   test: /\.s(a|c)ss$/,
  //   use: isSSR
  //     ? [loaders.null()]
  //     : [
  //         loaders.miniCssExtract(),
  //         loaders.css({ ...cssLoaderOptions, importLoaders: 2 }),
  //         loaders.postcss({ plugins: postCssPlugins }),
  //         sassLoader
  //       ]
  // };
  const sassRuleModules = {
    test: /\.scss$/,
    use: [
      !isSSR && loaders.miniCssExtract({ hmr: false }),
      loaders.css({ modules: true, importLoaders: 2 }),
      loaders.postcss(),
      {
        loader: 'resolve-url-loader'
      },
      sassLoader
    ].filter(Boolean)
  };

  const dataVizRule = {
    test: require.resolve(`@opengov/data-viz`),
    use: loaders.null(),
  };

  const mdRuleModules = {
    test: /\.md$/,
    use: 'raw-loader'
  };

  let configRules = [];

  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {

          },
        ],
      },
    })
  }

  switch (stage) {
    case 'develop':
    case 'build-javascript':
    case 'build-html':
    case 'develop-html':
      configRules = configRules.concat([sassRuleModules]);
      configRules = configRules.concat([dataVizRule]);
      configRules = configRules.concat([mdRuleModules]);
      break;
  }

  setWebpackConfig({
    module: {
      rules: configRules
    }
  });
};
