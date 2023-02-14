/**
 * @file model/Board.js
 * @desc A board is a collection of Topics
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/connections.js';

class Board extends Model {}

Board.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        club_id : {                     // A board should be created in a club.
            type: DataTypes.INTEGER,
            references: {
                model: "club",
                key: "id"
            }
        },
        board_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128                // Limit the length of the first name
            }
        },
        created_by : {
            type: DataTypes.INTEGER,
            references: {
                model: "club_member",       // NOTE: This Club Member must be a ClubAdministrator or a ClubModerator
                key: "id"
            }
        },
        about : {                  // Describe this board
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                max: 500
            }
        }
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

export default Board;
