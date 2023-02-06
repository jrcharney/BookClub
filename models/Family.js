/**
 * @file models/Family.js
 * @desc A Family is a group of Users created by another user to manage User accounts associated with a parent family User.
 * @TODO Should we create a FamilyList and FamilyListItem class?  Probably FamilyParentUser and FamilyChildUser?
 * @NOTE Families are private (not visible).
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class Family extends Model {}

Family.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        created_by : {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
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
        modelName: 'family'
    }
);

export default Family;