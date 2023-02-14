/**
 * @file models/BookCategory.js
 * @desc Link Categories with Books
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/connections.js';

class BookCategory extends Model {}

BookCategory.init(
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
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book_category'
    }
);

export default BookCategory;