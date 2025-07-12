const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const config = require('../config/master-config');

class DatabaseService {
    constructor() {
        this.connection = null;
        this.isConnected = false;

        this.config = {
            host: config.database.host,
            user: config.database.user,
            password: config.database.password,
            database: config.database.database,
            port: config.database.port,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        };
    }

    async connect() {
        const tempConfig = { ...this.config };
        delete tempConfig.database;

        const tempConnection = await mysql.createConnection(tempConfig);

        const [rows] = await tempConnection.execute(
            `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?`,
            [this.config.database]
        );

        if (rows.length === 0) {
            console.log(`Database '${this.config.database}' does not exist. Creating...`);
            await tempConnection.execute(`CREATE DATABASE ${this.config.database}`);
        }

        await tempConnection.end();

        this.connection = await mysql.createPool(this.config);
        await this.connection.query('SELECT 1');
        this.isConnected = true;

        console.log('Successfully Connected to MySQL database.');
        return this.connection;
    }

    async executeQuery(sql, params = []) {
        if (!this.isConnected) {
            await this.connect();
        }

        const [results] = await this.connection.execute(sql, params);
        return results;
    }

    async initializeTables(sqlFilenames = []) {
        if (!this.isConnected) {
            await this.connect();
        }

        console.log('Initializing base tables...');
        for (const filename of sqlFilenames) {
            const filePath = path.join(__dirname, '..', 'db-dump', filename);
            try {
                const sql = fs.readFileSync(filePath, 'utf-8');
                console.log(`Executing ${filename}...`);
                await this.connection.query(sql);
                console.log(`${filename} Table created successfully.`);
            } catch (error) {
                console.error(`Error in creating ${filename}:`, error.message);
                throw error;
            }
        }

        console.log('All base tables initialized.');
    }

    async init() {
        try {
            await this.connect();
            await this.initializeTables([
                '01-user.sql',
            ]);
            return this.connection;
        } catch (err) {
            console.error('Database initialization failed:', err);
            process.exit(1);
        }
    }
}

module.exports = new DatabaseService();
