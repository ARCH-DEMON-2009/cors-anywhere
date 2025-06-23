// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('./lib/cors-anywhere');

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [],   // Disable origin/x-requested-with check
  removeHeaders: [
    'cookie',
    'cookie2',
    'x-request-start',
    'x-request-id',
    'via',
    'connect-time',
    'total-route-time',
  ],
  redirectSameOrigin: true,
  httpProxyOptions: {
    xfwd: false,
  }
}).listen(port, host, function() {
  console.log('✅ Running open CORS Anywhere on ' + host + ':' + port);
});
