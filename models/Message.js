const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Message extends Model { }

Message.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_username: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username',
            },
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Message',
    }
)

module.exports = Message;