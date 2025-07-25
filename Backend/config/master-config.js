let port = process.env.PORT || "6969"
let database = process.env.DATABASE || "rewear"
let database_user = process.env.DATABASE_USER || "root"
let database_password = process.env.DATABASE_PASSWORD || "7073"
let database_host = process.env.DATABASE_HOST || "127.0.0.1"
let database_port = process.env.DATABASE_PORT || "3306"

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