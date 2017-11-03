'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      isCorrect: {
        type: Sequelize.BOOLEAN,
      },
      resultId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'result',
          key: 'id',
        },
      },
      questionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'question',
          key: 'id',
        },
      },
      alternativeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'alternative',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Answers');
  },
};
