module.exports = {

  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@bin': './src/bin',
          '@domain': './src/core/domain',
          '@providers': './src/core/providers',
          '@repositories': './src/core/repositories',
          '@routes': './src/core/routes',
          '@services': './src/core/services',
          '@useCases': './src/core/useCases',
          '@documentation': './src/documentation',
          '@config': './src/infrastructure/config',
          '@databases': './src/infrastructure/databases',
          '@jobs': './src/infrastructure/jobs',
          '@middlewares': './src/infrastructure/middlewares',
          '@modules': './src/infrastructure/modules',
          '@utils': './src/infrastructure/utils',
          '@shared': './src/shared',
          '@templates': './src/templates',
        },
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      { legacy: true },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      { loose: true },
    ],
    [
      '@babel/plugin-proposal-private-property-in-object',
      { loose: true },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
