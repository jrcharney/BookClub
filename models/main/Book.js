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
      pub_year: {
        // TODO: In the future, consider a temporal type if it ever becomes available.
        // Since there is no DataType.YEAR, we need to think of other ways to fix this.
        type: DataTypes.STRING,  // NOTICE: STRING NOT NUMBER! SO IT MUST BE QUOTED!
        allowNull: true,
        validate: {
          // Let's assume that any year we enter is a value between 0 and 9999
          is: /^\d{1,4}$/
        }
      },
      description: {
        // TEXT is longer than STRING
        type: DataTypes.TEXT,
        allowNull: true,
        // TODO: What kind of validator can we use?
      },
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
