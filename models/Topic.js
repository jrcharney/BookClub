/**
 * @file model/Topic.js
 * @desc A topic discussed in a Club (generally about a Book or Author)
 *      A topic has a collection of Posts
 *      Some Topics have Polls
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Topic extends Model {}

Topic.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        board_name: {                   // Associate a Board with a Topic
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128                // Limit the length of the first name
            }
        },
        board_id : {                    // The board this topic is part of
            type: DataTypes.INTEGER,
            references: {
                model: "board",
                key: "id"
            }
        },
        created_by : {                  // The club member who crated this topic
            type: DataTypes.INTEGER,
            references: {
                model: "club_member",
                key: "id"
            }
        },
        // TODO: Find out how to automatically expire something
        is_archived : {             // Topics should expire after some time. This item marks when a topic is automatically closed.
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        // TODO: Should these controls be in their own table? (Not now, but maybe later.)
        // NOTE: Only Club Admins and Mods do the rest of these things
        is_sticky : {               // Keep a topic up in the first position of a board
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        is_closed : {           // A thread may not accept anymore posts.
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        closed_by : {           // Who closed this thread?
            type: DataTypes.INTEGER,
            references: {
                model: "club_member",
                key: "id"
            }
        },
        closed_when : {         // If a thread is not closed automatically
            type: DataTypes.DATE,
            allowNull: true,
            // TODO: defaultValue should be whenever the close was made
        },
        closed_why : {
            type: DataTypes.STRING,
            allowNull: true,    // TODO: Should be required if closed
            validate: {
                len: [50,500]
            }
        },
        is_hidden : {           // A topic is hidden on the message board, typically if it get's really bad or off topic.
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        hidden_by : {
            type: DataTypes.INTEGER,
            references: {
                model: "club_member",
                key: "id"
            }
        },
        hidden_when : {
            type: DataTypes.DATE,
            allowNull: true,
            // TODO: defaultValue should be whenever the close was made
        },
        hidden_why : {
            type: DataTypes.STRING,
            allowNull: true,    // TODO: Should be required if hidden
            validate: {
                len: [50,500]
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
        modelName: 'author'
    }
);

export default Topic;
