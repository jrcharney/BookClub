/**
 * @file model/CategoryEchelon.js
 * @desc Describe the relationship between two categories
 * @Note In French "échelon" means "ladder". In most other languages, it describes a level or rank in an organization. To make our categories differ from our tags, categories should be organized in a structure where a parent category has many child categories. (This reminds me, I should fix any of my crow's feet in my ER diagram).
 * It was easier to create this table such that two records can be related than it was to ad another field with a foregin key to a record of the same data type, especially since some records might not have any relationship.
 */
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connections.js';
//import Category from './Category.js';

class CategoryEchelon extends Model {}

CategoryEchelon.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        parent_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        child_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category_echelon'
    }
);

export default CategoryEchelon;
