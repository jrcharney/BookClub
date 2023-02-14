/**
 * @file models/BookListTag.js
 * @desc A BookListTag is a Tag assigned to a BookList. Many tags can be applied to a book list.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class BookListTag extends Model {}

BookListTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        book_list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book_list',
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
        modelName: 'book_list_tag'
    }
);

export default BookListTag;