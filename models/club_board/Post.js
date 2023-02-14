/**
 * @file models/Post.js
 * @desc A post is a message posted in a Topic by a User
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/connections.js';

class Post extends Model {}

Post.init(
    {
        id: {                           // Post ID
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id'
            }
          },
        message: {                  // Our post message
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                max: 5000            // Limit the message to about.
            }
        },
        message_position: {             // The position that our message is in our thread. Number our posts to that they can appear in order.
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields. (I was hoping to do this anyway)
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

export default Post;