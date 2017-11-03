'use strict';
module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('Question', {
    text: DataTypes.TEXT,
    order: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Question.belongsTo(models.Quiz);
        Question.hasMany(models.Alternative);
        Question.hasMany(models.Answer);
      },
    },
  });
  return Question;
};
