const { throwEnvError } = require('../../../utils/error')

module.exports = ({ env }) => {
    const uri = env('MONGODB_URI')
    if (!uri) throwEnvError('MONGODB_URI')

    const database = env('MONGODB_PROD_DB')
    if (!database) throwEnvError('MONGODB_PROD_DB')

    return {
        defaultConnection: 'default',
        connections: {
            default: {
                connector: 'mongoose',
                settings: {
                    uri,
                    database,
                },
                options: {
                    ssl: true,
                },
            },
        },
    }
}
