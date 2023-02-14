/**
 * @file models/family/index.js
 * @info Group our Family models together
 * The family models were supposed to allow for parents to set parental controls
 */
import Family from "./Family.js";
import FamilyUser from "./FamilyUser.js";
import User from "../main/User.js";

// TODO: Make sure these relationships are correct

// A User can create a family
User.hasOne(Family,{
    foreignKey: 'created_by'
});

// A family can have many family users
Family.hasMany(FamilyUser,{
    foreignKey: 'family_id'
})

// A family user belongs to a family
FamilyUser.belongsTo(Family,{
    foreignKey: 'family_id'
});

// A family user is a user
FamilyUser.belongsTo(User,{
    foreignKey: 'user_id'
});

// A user has a family if they are a family user
User.hasOne(FamilyUser,{
    foreignKey: 'user_id'
})

export default { Family, FamilyUser }