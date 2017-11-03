'use strict';
module.exports = (sequelize, DataTypes) => {
  var Quiz = sequelize.define('Quiz', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Quiz.hasMany(models.Question);
        Quiz.hasMany(models.Result);
      },
    },
  });
  return Quiz;
};
