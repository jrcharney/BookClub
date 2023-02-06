/**
 * @file models/AuthorTag.js
 * @desc Link Authors with Tags. An author can have many tags. Tags can be assigned to many authors.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';

class AuthorTag extends Model {}

AuthorTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        author_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'author',
                key: 'id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'author_tag'
    }
);

export default AuthorTag;