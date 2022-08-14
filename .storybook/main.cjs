const TSConfigPaths = require('tsconfig-paths-webpack-plugin').default
const postCSS = require('postcss')

module.exports = {
  staticDirs: ['../public'],
  stories: [
    '../components/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: postCSS
        }
      }
    }
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      plugins: [...(config.resolve.plugins || []), new TSConfigPaths()]
    }
  })
}
