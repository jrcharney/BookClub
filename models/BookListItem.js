/**
 * @file models/BookListItem.js
 * @desc A BookListItem is a Book assigned to a BookList.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class BookListItem extends Model {}

BookListItem.init(
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
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book',
                key: 'id'
            }
        },        
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields. (I was hoping to do this anyway)
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'book_list_item'
    }
);

export default BookListItem;