/**
 * @file models/user/index.js
 * @info Associate user models with a User
 */
import User from "../main/User.js";
import UserProfile from "./UserProfile.js";
import UserSettings from "./UserSettings.js";

User.hasOne(UserProfile,{
    foreignKey: 'user_id'
});

User.hasOne(UserSettings,{
    foreignKey: 'user_id'
});

UserProfile.belongsTo(User,{
    foreignKey: 'user_id'
});

UserSettings.belongsTo(User,{
    foreignKey: 'user_id'
});

export default {UserProfile, UserSettings}