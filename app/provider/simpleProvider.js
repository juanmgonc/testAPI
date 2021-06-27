
const provider = (request) => {

    return response = {
        status: 200,
        message: "This is a response from the provider",
        id: request.id,
    }

}

const callProvider = (providerRequest) => {
    console.log('Calling provider...');
    console.log('Request: ' + JSON.stringify(providerRequest));
    return Promise.resolve(providerRequest)
    .then(provider(providerRequest));
} 

module.exports = callProvider;