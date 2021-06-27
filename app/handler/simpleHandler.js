// const JSONStream = require('JSONStream');
const service = require('../service/simpleService')


const handle = (req, res) => {
    return Promise.resolve(req)
    .then(service(req.body))
    .then(res.send(response));
}

module.exports = handle;