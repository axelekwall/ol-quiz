'use strict';
module.exports = (sequelize, DataTypes) => {
  var Option = sequelize.define('Option', {
    text: DataTypes.STRING,
    alt: DataTypes.STRING,
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
    },
  });
  return Option;
};
