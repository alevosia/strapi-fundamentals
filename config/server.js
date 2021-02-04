const { throwEnvError } = require('../utils/error')

const DEFAULT_HOST = '127.0.0.1'
const DEFAULT_PORT = '1337'

module.exports = ({ env }) => {
    console.log({ mode: env('NODE_ENV') })

    const adminJWTSecret = env('ADMIN_JWT_SECRET')
    if (!adminJWTSecret) throwEnvError('ADMIN_JWT_SECRET')

    const host = env('HOST', DEFAULT_HOST)
    const port = env('PORT', DEFAULT_PORT)

    return {
        host,
        port,
        admin: {
            auth: {
                secret: adminJWTSecret,
            },
            autoOpen: false,
        },
    }
}
