/**
 * @file admin/index.js
 * @info The group of models that are used for administration.
 * We only have one at the moment.
 * @todo Develop this later.
 */
import StaffUser from "./StaffUser.js";
import User from "../main/User.js";

// A StaffUser is a User with executive privileges
// This is a one-way relationship because a User does not have a foreign key to StaffUser.
StaffUser.hasOne(User, {
    foreignKey: 'user_id'
});

export default { StaffUser };