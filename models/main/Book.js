/**
 * @file models/Book.js
 * @desc Model for a Book
 * @note Author is not included in this object because some books have more than one Author. BookAuthor.js will bridge between Books and Authors.
 * @TODO Publisher data
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/connections.js';

class Book extends Model {}

Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      /*
      author: {                 Use the AUTHOR data!
        type: DataTypes.STRING,
        allowNull: false,
      },
      */
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // Validate our ISBN number
          // Source https://www.appsloveworld.com/php/142/use-regex-to-verify-an-isbn-number
          is: /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      /*
      post_id: {                  // NO!
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id',
        },
      },
      */
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields. (I was hoping to do this anyway)
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

export default Book;
