/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
const withPlugins = require("next-compose-plugins");
const nextPwa = require('next-pwa');

const nextConfig = {
  target: "experimental-serverless-trace",
};

const plugins = [nextPwa];

module.exports = withPlugins(plugins, nextConfig);
