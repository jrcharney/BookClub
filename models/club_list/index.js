/**
 * @file club_list/index.js
 * @info The models for creating Club Lists
 * @todo Probably should have created a UserClubList but I'm not gonna do that now.
 */
import ClubList from "./ClubList.js";
import ClubListItem from "./ClubListItem.js";
import ClubListTag from "./ClubListTag.js";
import User from "../main/User.js";
import Club from "../club/Club.js";
import Tag from "../tag/Tag.js";

// A Club List belongs to a User
ClubList.belongsTo(User,{
    foreignKey: 'user_id'
});

// A User can create many Club Lists
User.hasMany(ClubList,{
    foreignKey: 'user_id'
});

// A club list item can belong to many club lists
ClubListItem.belongsToMany(ClubList,{
    foreignKey: 'club_list_id'
});

// A club list has many club list items
ClubList.hasMany(ClubListItem,{
    foreignKey: 'club_list_id'
});

// A club list item is associated with one club
ClubListItem.hasOne(Club,{
    foreignKey: 'club_id'
});

// A club belongs to a club list item
Club.belongsTo(ClubListItem,{
    foreignKey: 'club_id'
});

// A Club List has many Club List Tags
ClubList.hasMany(ClubListTag,{
    foreignKey: 'club_list_id'
});

// A Club List Tag belongs to many Club Lists
ClubListTag.belongsToMany(ClubList,{
    foreignKey: 'club_list_id'
})

// A Club List Tag is associated with a Tag
ClubListTag.hasOne(Tag,{
    foreignKey: 'tag_id'
});

// A Tag is associated with a Club List Tag
Tag.belongsTo(ClubListTag,{
    foreignKey: 'tag_id'
});

export default {ClubList, ClubListItem, ClubListTag}