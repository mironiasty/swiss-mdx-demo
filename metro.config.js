// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});
config.resolver.sourceExts.push("md", "mdx");
config.transformer.babelTransformerPath = require.resolve("./transformer.js");

module.exports = config;


