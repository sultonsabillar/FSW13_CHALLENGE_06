'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV1
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        uniqe: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'user_game'
    }
  )
  User.associate = (models) => {
    User.hasOne(models.UserBio, {
      foreignKey: {
        name: 'uid',
        allowNull: false
      }
    })

    User.hasMany(models.UserHistory, {
      foreignKey: {
        name: 'user_id',
        allowNull: false
      }
    })
  }
  return User;
}
