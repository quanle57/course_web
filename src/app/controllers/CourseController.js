const Course = require('../models/course');
const { singleModel } = require('../../util/handlebar');
const { Op } = require("sequelize");

class CourseController {

    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ where: { slug: req.params.slug } })
            .then((course) => {
                res.render('courses/show', {
                    course: singleModel(course)
                });
            })
            .catch(next);
    };

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    };

    // [POST] /courses/store
    store(req, res, next) {

        req.body.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
        // Tạo một thể hiện của model (chưa được lưu vào database)
        const course = Course.build(req.body);

        // Để lưu vào database chúng ta sử dụng function save
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
        
    };

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findByPk(req.params.id)
            .then(course => res.render('courses/edit', { 
                course: singleModel(course)
            }))
            .catch(next);
        
    };

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.update(req.body, {
            where: {
              id: req.params.id
            }
        })
            .then(() => res.redirect('/my/stored/courses'))
            .catch(next);
    };

    // [DELETE] /courses/:id
    destroy(req, res, next) {
        Course.destroy({
            where: {
              id: req.params.id
            }
        })
            .then(() => res.redirect('/my/stored/courses'))
            .catch(next);
    };

    // [DELETE] /courses/:id/force
    forceDestroy(req, res, next) {
        Course.destroy({
            where: {
              id: req.params.id
            },
            force: true
        })
            .then(() => res.redirect('/my/trash/courses'))
            .catch(next);
    };

    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({
            where: {
              id: req.params.id
            }
          })
          .then(() => res.redirect('/my/trash/courses'))
          .catch(next);
    };

    // [PATCH] /courses/:id/restore
    handleFormAction(req, res, next) {
        var courseIds = req.body["courseIds"];
        
        switch(req.body["action-selection"]) {
            case 'delete':
                Course.destroy({
                    where: {
                      id: {
                        [Op.in]: courseIds
                        },
                    }
                })
                    .then(() => res.redirect('/my/stored/courses'))
                    .catch(next);
                break;
            default:
                res.redirect('/my/stored/courses')
          };
    };

}

module.exports = new CourseController;