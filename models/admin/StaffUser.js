/**
 * @file models/StaffUser.js
 * @desc A StaffUsers is a User who has "employee access" to the site.
 * Basically, anyone who is a staff user has "behind-the-scenes" access to the site to make sure thing still work.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/connections.js';

class StaffUser extends Model {}

StaffUser.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        is_site_moderator : {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_site_administrator : {
            type: DataTypes.BOOLEAN,
            defaultValue: false 
        },
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields. (I was hoping to do this anyway)
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'staff_user'
    }
);

export default StaffUser;