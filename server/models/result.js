'use strict';
module.exports = (sequelize, DataTypes) => {
  var Result = sequelize.define('Result', {
    correctAns: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Result.belongsTo(models.Quiz);
        Result.hasMany(models.Answer);
      },
    },
  });
  return Result;
};
