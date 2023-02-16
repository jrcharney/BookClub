/**
 * @file models/user/index.js
 * @info Associate user models with a User
 */
import User from "../main/User.js";
import UserProfile from "./UserProfile.js";
import UserSettings from "./UserSettings.js";

UserProfile.belongsTo(User,{
    foreignKey: 'user_id'
});

UserSettings.belongsTo(User,{
    foreignKey: 'user_id'
});

User.hasOne(UserProfile,{
    foreignKey: 'user_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

User.hasOne(UserSettings,{
    foreignKey: 'user_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

export default {UserProfile, UserSettings}