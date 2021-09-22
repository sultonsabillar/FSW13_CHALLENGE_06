'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserHistory = sequelize.define('UserHistory', {
      log_id: {
        primaryKey: true,
        type: DataTypes.UUID
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      winStatus: {
        type: DataTypes.STRING,
        defaultValue: "Not play yet",
        allowNull: false
      },
      score: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      last_login: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'UserHistory',
      tableName: 'user_game_history',
    }
  )

  UserHistory.associate = (models) => {
    UserHistory.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    })
  }

  return UserHistory;
}
