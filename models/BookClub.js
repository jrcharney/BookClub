/**
 * @file models/BookClub.js
 * @desc A BookClub is a Club to discuss a Book.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class BookClub extends Model {}

BookClub.init(
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
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book_club'
    }
);

export default BookClub;