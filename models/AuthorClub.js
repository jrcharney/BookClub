/**
 * @file models/AuthorClub.js
 * @desc An AuthorClub is a Club to discuss an Author.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class AuthorClub extends Model {}

AuthorClub.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        club_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'club',
                key: 'id'
            }
        },
        author_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'author',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'author_club'
    }
);

export default AuthorClub;