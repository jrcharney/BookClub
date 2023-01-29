/**
 * @file models/ClubBookList.js
 * @desc A ClubBookList is a BookList created by a ClubMember for a Club.
 * @Note There is no ClubBookListTag. Tags should be assigned to the BookList associated with the ClubBookList via the BookListTag.
 * @Note This table associates a ClubMember (not a User) and a Club with a BookList.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class ClubBookList extends Model {}

ClubBookList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        club_id : {
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
        book_list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book_list',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_book_list'
    }
);

export default ClubBookList;