/**
 * @file models/ClubMember.js
 * @desc A ClubMember is a User who is a member of a Club.
 * @Note Generate ClubMember lists using this table.
 * @TODO Classes for ClubModerator and ClubAdministrator, eventually.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class ClubMember extends Model {}

ClubMember.init(
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
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        can_make_polls : {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_club_moderator : {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_club_administrator : {
            type: DataTypes.BOOLEAN,
            defaultValue: false     // NOTE: This should be true for the person who created the group.
        },
        
        // TODO: User Invites?
    },
    {
        sequelize,
        timestamps: true,   // Enable timestamp fields. (I was hoping to do this anyway)
        createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
        updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
        freezeTableName: true,
        underscored: true,
        modelName: 'club_member'
    }
);

export default ClubMember;