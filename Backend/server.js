const express = require('express');
const app = express();
const config = require('./config/master-config');
const dbService = require('./services/dbhelper');
// const userController = new (require('./controller/users_c'));
const cors = require('cors');
app.use(cors());
const appPort = config.app_port;
app.use(express.json());


// app.use(express.static(path.join(__dirname, 'public')));


//login-resister routes
// app.post('/login', (req, res) => userController.login(req, res));
// app.post('/register', (req, res) => userController.register(req, res));

// app.use("*", function (req, res) {
//     res.status(200).send({ "message": "Access Denied" })
// })

async function initializeDatabase() {
    try {
        console.log('Connecting & initializing database...');
        await dbService.init();
        startServer();
    } catch (error) {
        console.error('Failed to initialize database:', error);
        process.exit(1);
    }
}

function startServer() {
    app.listen(appPort, () => {
        console.log(`SmartKitchen Backend API is listening on port ${appPort}`);
        console.log(`API available at http://localhost:${appPort}/api`);
    });
}

initializeDatabase();

