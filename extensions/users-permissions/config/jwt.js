const { throwEnvError } = require('../../../utils/error')

const userJWTSecret = process.env.USER_JWT_SECRET

if (!userJWTSecret) {
    throwEnvError('USER_JWT_SECRET')
}

module.exports = {
    jwtSecret: userJWTSecret,
}
