const provider = require('../provider/simpleProvider');
const buildRequest = require('../builder/simpleBuilder');


const service = (request) => {
    console.log("Service called: " + request.id);
    return Promise.resolve(request)
    .then(buildRequest(request))
    .then(provider(providerRequest));
}

module.exports = service;