/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const nextTranslate = require('next-translate');
const nextPwa = require('next-pwa');

const nextConfig = {
  target: 'experimental-serverless-trace',
};

const plugins = [
  optimizedImages,
  nextTranslate,
  [
    nextPwa,
    {
      pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        sw: 'service-worker.js',
        importScripts: [
          'https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js',
        ],
      },
    },
  ],
];

module.exports = withPlugins(plugins, nextConfig);
