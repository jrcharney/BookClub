/**
 * @file models/ClubBookListItem.js
 * @desc A ClubBookListItem is a BookListItem for a ClubBookList added by a ClubMember of a Club.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class ClubBookListItem extends Model {}

ClubBookListItem.init(
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
        created_by : {
            type: DataTypes.INTEGER,
            references: {
                model: 'club_member',
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
        // I wasn't sure if I should reiterate what book list and this was related to.
        book_list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book_list',
                key: 'id'
            }
        },
        book_list_item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book_list_item',
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
        modelName: 'club_book_list_item'
    }
);

export default ClubBookListItem;