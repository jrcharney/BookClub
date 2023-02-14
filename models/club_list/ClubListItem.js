/**
 * @file models/ClubListItem.js
 * @desc An ClubListItem is a Club that the User can associate with a ClubBookList.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class ClubListItem extends Model {}

ClubListItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        club_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'club',
                key: 'id'
            }
        },
        club_list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'club_list',
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
        modelName: 'club_list_item'
    }
);

export default ClubListItem;