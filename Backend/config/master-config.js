let port = process.env.PORT || ""
let database = process.env.DATABASE || ""
let database_user = process.env.DATABASE_USER || ""
let database_password = process.env.DATABASE_PASSWORD || ""
let database_host = process.env.DATABASE_HOST || ""
let database_port = process.env.DATABASE_PORT || ""

module.exports = {
    app_port: port,
    database: {
        host: database_host,
        user: database_user,
        password: database_password,
        database: database,
        port: database_port
    },
}