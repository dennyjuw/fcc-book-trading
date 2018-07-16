// const yargs = require('yargs');
// const HttpsProxyAgent = require('https-proxy-agent');

// const CORPORATE_PROXY = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;

// const ENDPOINTS = {
//   localhost: {
//     endpoint: 'http://localhost:8000',
//     context: 'ng/secure/',
//   },
//   dev: {
//     endpoint: 'https://dev.btopen.srv.westpac.com.au',
//     proxy: true,
//   },
//   sit: {
//     endpoint: 'https://sit.btopen.com.au'
//   },
//   uat: {
//     endpoint: 'https://uat.btopen.com.au'
//   },
//   svp: {
//     endpoint: 'https://svp.btopen.com.au',
//     proxy: true,
//   },
//   prod: {
//     endpoint: 'https://www.btopen.com.au',
//     proxy: true,
//   },
//   jarvis: {
//     autoRewrite: true,
//     changeOrigin: true,
//     context: 'btopen',
//   },
// };

// const ENV = yargs.argv.endpoint || 'localhost';
// const ENV_CONFIG = ENDPOINTS[ENV];
// const CONTEXT = ENV_CONFIG.context || '';
// let agent = false;

// if (ENV_CONFIG.proxy && CORPORATE_PROXY) {
//   agent = new HttpsProxyAgent(CORPORATE_PROXY);
// }

// const BASE_PROXY_CONFIG = {
//   logLevel: 'debug', secure: false, agent, changeOrigin: ENV_CONFIG.changeOrigin, autoRewrite: ENV_CONFIG.autoRewrite, protocolRewrite: 'https',
// };

// BASE_PROXY_CONFIG.target = ENV_CONFIG.endpoint;

// const CONFIG = {
//   [`/${CONTEXT}`]: BASE_PROXY_CONFIG,
//   '/api': Object.assign({ '^/api': `/${CONTEXT}/api` }, BASE_PROXY_CONFIG),

//   // '/ng': {
//   //   target: "http://localhost:9080",
//   //   logLevel: "debug",
//   //   changeOrigin: true,
//   //   protocolRewrite: 'https',
//   //   // pathRewrite: {"^/sops" : ""}
//   // }
// };

// module.exports = CONFIG;
