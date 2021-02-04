exports.throwEnvError = function (variable) {
    throw new Error('Missing environment variable: ' + variable)
}
