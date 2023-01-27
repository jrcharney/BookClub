import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import { compareSync, hash } from 'bcrypt';


class User extends Model {
    checkPassword(loginPw) {
        return compareSync(loginPw, this.password);
    }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    sequelize,
    timestamps: true,   // Enable timestamp fields which will be added to our models
    createdAt: true,    // Creates a createdAt field that will set a timestamp on record creation
    updatedAt: true,    // Creates a updatedAt field that will update a timestamp on record update 
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

export default User;