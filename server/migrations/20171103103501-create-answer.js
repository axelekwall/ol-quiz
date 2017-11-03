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
      ResultId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Results',
          key: 'id',
        },
      },
      QuestionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Questions',
          key: 'id',
        },
      },
      AlternativeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Alternatives',
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
