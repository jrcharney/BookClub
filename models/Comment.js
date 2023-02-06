import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connections.js";

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5000],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,   // Enable timestamp fields. (I was hoping to do this anyway)
    createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
    updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

export default Comment;
