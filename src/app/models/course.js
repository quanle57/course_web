const { FALSE } = require('node-sass');
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../config/db');
const SequelizeSlugify = require('sequelize-slugify')

const course = db.define('course', {
    name: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    videoid: {
      type: DataTypes.STRING,
      allowNull: false,
    }},
    {
        timestamps: true,
        paranoid: true,
    },

  );

SequelizeSlugify.slugifyModel(course, {
  source: ['name']
});

course.sync()
  .then(() => {
    console.log('Table created')
  })

module.exports = course;