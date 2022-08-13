// import other routes
const filesRoutes = require('./files');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    filesRoutes(app, fs);

};

module.exports = appRouter;