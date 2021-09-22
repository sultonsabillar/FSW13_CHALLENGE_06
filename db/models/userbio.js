'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBio = sequelize.define('UserBio', {
      uid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      firstname: {
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'UserBio',
      tableName: 'user_game_biodata'
    }
  )

  UserBio.associate = (models) => {
    UserBio.belongsTo(models.User, {
      foreignKey: 'uid'
    })
  }
  return UserBio;
}
