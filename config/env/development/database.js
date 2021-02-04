const { throwEnvError } = require('../../../utils/error')

module.exports = ({ env }) => {
    const uri = env('MONGODB_URI')
    console.log({ uri })
    if (!uri) throwEnvError('MONGODB_URI')

    const db = env('MONGODB_DEV_DB')
    console.log({ db })
    if (!db) throwEnvError('MONGODB_DEV_DB')

    return {
        defaultConnection: 'default',
        connections: {
            default: {
                connector: 'mongoose',
                settings: {
                    uri: uri,
                    database: db,
                },
                options: {
                    ssl: true,
                },
            },
        },
    }
}
