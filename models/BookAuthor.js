/**
 * @file models/BookAuthor.js
 * @desc Link Authors with Books. A book has at least one author but can have more than one author. Authors can write many books, so this table will be used to build an author's bibliography.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class BookAuthor extends Model {}

BookAuthor.init(
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
        modelName: 'book_author'
    }
);

export default BookAuthor;