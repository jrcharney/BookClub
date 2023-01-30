/**
 * @file models/FamilyUser.js
 * @desc A FamilyUser is a User that is part of a Family created by another User.
 * @TODO Should we create a FamilyList and FamilyListItem class?
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class FamilyUser extends Model {}

FamilyUser.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        family_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'family',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        is_parent: {
            type: DataTypes.BOOLEAN
        },
        is_child: {
            type: DataTypes.BOOLEAN
        },
        is_emancipated: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields. (I was hoping to do this anyway)
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'family_user'
    }
);

export default FamilyUser;