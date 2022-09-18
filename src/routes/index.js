const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./course');
const myRouter = require('./my');


function route(app) {

    app.use('/my', myRouter);
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    
}

module.exports = route;