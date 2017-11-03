'use strict';
module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define('Answer',
    {
      qId: DataTypes.INT,
      correct: DataTypes.BOOLEAN,
      ans: DataTypes.STRING,
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        },
      },
  });
  return Answer;
};
