const Course = require('../models/course');
const { multipleModels } = require('../../util/handlebar');
const { Op } = require("sequelize");

class MyController {


    // [GET] /my/stored/courses
    storedCourses(req, res, next) {
        Course.findAll({
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['id', 'ASC'],
            ]
        })
            .then(function(courses) {
                res.render('my/stored-courses', {
                    courses: multipleModels(courses)
                });
            })
            .catch(next);
    };

    // [GET] /my/trash/courses
    trashCourses(req, res, next) {
        Course.findAll({
            where: {
                deletedAt: {
                    [Op.not]: null
                }
            },
            paranoid: false,
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['id', 'ASC'],
            ]
        })
            .then(function(courses) {
                res.render('my/trash-courses', {
                    courses: multipleModels(courses)
                });
            })
            .catch(next);
    };
}

module.exports = new MyController;