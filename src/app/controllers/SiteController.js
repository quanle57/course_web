const Course = require('../models/course');
const { multipleModels } = require('../../util/handlebar');

class SiteController {

    // [GET] /home
    index(req, res) {
        
        // res.json({ 
        //     user: "tobi"
        // });
        console.log('================================')
        Course.findAll({
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['id', 'ASC'],
            ]
        })
            .then(function(courses) {
                res.render('home', {
                    courses: multipleModels(courses)
                });
            });
    };

    // [GET] /search
    search(req, res) {
        res.render('search');
    };

}

module.exports = new SiteController;