'use strict';
module.exports = (sequelize, DataTypes) => {
  var Answer = sequelize.define('Answer',
    {
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
