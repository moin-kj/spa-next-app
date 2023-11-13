const withPWA = require("next-pwa")({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: process.env.NODE_ENV === "development",
    workboxOptions: {
      disableDevLogs: true,
    },
    // ... other options you like
  });
  
  // /** @type {import('next').NextConfig} */
  // const nextConfig = {
  //   // ... other options you like
  // };
  // module.exports = withPWA(nextConfig);
  

// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
// module.exports = {
//   webpack: config => {
//     config.plugin.push (
//       new SWPrecacheWebpackPlugin({
//         cacheId: 'spa-next-app',
//         dontCacheBustUrlsMatching: [/\.next\//],
//         filename: 'service-worker.js',
//         minify: true,
//         navigateFallback: PUBLIC_PATH + 'index.html',
//         staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
//         runtimeCaching:[
//           {
//           handler: 'networkFirst',
//           urlPattern: /^https?.*/
//         }
//         ]
//       })
//     )
//     return config;
//   }
// }


var path = require('path');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
 
const PUBLIC_PATH = 'https://www.spa-next-app.com/';  // webpack needs the trailing slash for output.publicPath
 
module.exports = {
 
  entry: {
    main: path.resolve(__dirname, 'src/index'),
  },
 
  output: {
    path: path.resolve(__dirname, 'src/bundles/'),
    filename: '[name]-[hash].js',
    publicPath: PUBLIC_PATH,
  },
 
  plugins: [
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'spa-next-app',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: PUBLIC_PATH + 'index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      }
    ),
  ],
}