/**
 * @file models/friend/index.js
 * @info Grouping together the Friend models
 */
import Friend from "./Friend.js";
import FriendList from "./FriendList.js";
import FriendListItem from "./FriendListItem.js";
import FriendListTag from "./FriendListTag.js";
import FriendTag from "./FriendTag.js";
import User from "../main/User.js";
import Tag from "../tag/Tag.js";

// TODO: This seems a bit convoluted. Probably should have made a UserFriend model.
// A User is a Friend
User.belongsTo(Friend,{
    foreignKey: 'user_id'
});

// A Friend has a User
Friend.hasOne(User,{
    foreignKey: 'user_id'
})

// A User can have many friends 
User.hasMany(Friend,{
    foreignKey: 'user_friend_id'
});

// A Friend can be many Users
Friend.belongsToMany(User,{
    foreignKey: 'user_friend_id'
});

Friend.hasMany(FriendTag,{
    foreignKey: 'friend_id'
});
FriendTag.hasOne(Friend,{
    foreignKey: 'friend_id'
});
FriendTag.hasMany(Tag,{
    foreignKey: 'tag_id'
})
Tag.belongsTo(FriendTag,{
    foreignKey: 'tag_id'
});

User.hasMany(FriendList,{
    foreignKey: 'user_id'
});
FriendList.belongsTo(User,{
    foreignKey: 'user_id'
});
FriendList.hasMany(FriendListItem,{
    foreignKey: 'friend_list_id'
});
FriendListItem.belongsToMany(FriendList,{
    foreignKey: 'friend_list_id'
});
FriendListItem.hasOne(Friend,{
    foreignKey: 'friend_id'
});
Friend.belongsTo(FriendListItem,{
    foreignKey: 'friend_id'
});

FriendList.hasMany(FriendListTag,{
    foreignKey: 'friend_list_id'
});
FriendListTag.belongsToMany(FriendList,{
    foreignKey: 'friend_list_id'
});
FriendListTag.belongsTo(Tag,{
    foreignKey: 'tag_id'
});
Tag.hasOne(FriendListTag,{
    foreignKey: 'tag_id'
});

export default { Friend, FriendList, FriendListItem, FriendListTag, FriendTag}