'use strict';
module.exports = (sequelize, DataTypes) => {
  var Alternative = sequelize.define('Alternative', {
    text: DataTypes.TEXT,
    isCorrect: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Alternative.belongsTo(models.Question);
        Alternative.hasMany(models.Answer);
      },
    },
  });
  return Alternative;
};
