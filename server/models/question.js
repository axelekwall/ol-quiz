'use strict';
module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('Question', {
    text: DataTypes.STRING,
    correctAns: DataTypes.ARRAY,
    order: DataTypes.INT,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
    },
  });
  return Question;
};
