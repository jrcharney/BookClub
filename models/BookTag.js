/**
 * @file models/BookTag.js
 * @desc Link Books with Tags. A book can have many tags. Tags can be assigned to many books.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class BookTag extends Model {}

BookTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book',
                key: 'id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book_tag'
    }
);

export default BookTag;