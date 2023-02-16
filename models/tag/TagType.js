/**
 * @file model/TagType.js
 * @desc Model for the TagType class, describes the type of tag
 * @note I though about using an ENUM in tag, but I wasn't sure if mysql would support that.
 * This is more of a utility table, so users can search for things
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/connections.js';

class TagType extends Model {}

TagType.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,               // TODO: Hopefully this works. I wanted these to be unique
            validate: {
                notEmpty: true,
                max: 32            // Limit our tag size to 32 characters max
                // NOTE: I was going to apply a regex validator, but then I got thinking about other characters that could be used in tags.
                // TODO: Write a better regex validator
                // is: /^[ .a-z]+$/i,      // Validate a tag name using regular expression
            }
        },
        description: {                    // A short tag description. (This is more VARCHAR than TEXT.)
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                max: 255            // Limit our tag size to 255 characters max (It's supposed to be short.)
            }
        },
    },
    {
        sequelize,
        timestamps: false,          // We don't need timestamps this time around.
        freezeTableName: true,
        underscored: true,
        modelName: 'tag_type'
    }
);

export default TagType;