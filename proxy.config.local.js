const PROXY_CONFIG = [{
    context: ['/api/*'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
},
{
    context: ['/mock'],
    target: 'http://localhost:3000/',
    secure: false,
    logLevel: 'debug'
}]

module.exports = PROXY_CONFIG