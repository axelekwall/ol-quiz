'use strict';
module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define('Answer', {
    isCorrect: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Answer.belongsTo(models.Result);
        Answer.belongsTo(models.Question);
        Answer.belongsTo(models.Alternative);
      },
    },
  });
  return Answer;
};
