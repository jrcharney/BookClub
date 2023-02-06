/**
 * @file models/Club.js
 * @desc A Club is a group created by a User to discuss Books, Authors, or subjects.
 * @Note There are plans to expand this to include discussion boards, but we won't build those at this time.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class Club extends Model {}

Club.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {                   // First Name
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
                model: 'user',
                key: 'id'
            }
        },
        about: {                  // Author information. Write something about this person.
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                max: 500            // Limit description to 500 characters
            }                // TODO: Do we need a validator for this?
        }
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields. (I was hoping to do this anyway)
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'club'
    }
);

export default Club;