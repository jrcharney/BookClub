/**
 * @file club_book_list/index.js
 * @info Allows for a club to create a book list
 * @Note ClubBookLists use BookListTags
 * @note ClubBookListItems use BookListItems
 */
import ClubBookList from "./ClubBookList.js";
import ClubBookListItem from "./ClubBookListItem.js"
import Club from "../club/Club.js";
import ClubMember from "../club/ClubMember.js";
import BookList from "../book_list/BookList.js";
import BookListItem from "../book_list/BookListItem.js";

// TODO: Make sure these relationships are correct.

// A Club Book List belongs to a Club
ClubBookList.belongsTo(Club,{
    foreignKey: 'club_id'
});
// A Club book List was created by a Club Member
ClubBookList.belongsTo(ClubMember,{
    foreignKey: 'created_by'
})
// A Club book list is attached to a book list
ClubBookList.belongsTo(BookList,{
    foreignKey: 'book_list_id'
});

// A Club can have many Club Book Lists
Club.hasMany(ClubBookList,{
    foreignKey: 'club_id'
});
// A Club member can create many Club Book Lists
ClubMember.hasMany(ClubBookList,{
    foreignKey: 'created_by'
});
// A Book List can be associated with a club book list
BookList.hasOne(ClubBookList,{
    foreignKey: 'book_list_id'
});

// A Club Book List has many Club Book List Items
ClubBookList.hasMany(ClubBookListItem,{
    foreignKey: 'club_book_list_id'
});

// A Club Book List item can be poart of many Club Book List
ClubBookListItem.belongsToMany(ClubBookList,{
    foreignKey: 'club_book_list_id'
});

// A Club Book List Item is associated with a Book List Item (which is a Book)
ClubBookListItem.hasOne(BookListItem,{
    foreignKey: 'book_list_item_id'
});

// A Book List Item can be a ClubBookListItem if it is associated.
BookListItem.belongsTo(ClubBookListItem,{
    foreignKey: 'book_list_item_id'
});

// A Club Book List Item was added by a Club Member
ClubBookListItem.hasOne(ClubMember,{
    foreignKey: 'created_by'
});

// A Club Member can contribute to many ClubBookListItems on a ClubBookList
ClubMember.hasMany(ClubBookListItem,{
    foreignKey: 'created_by'
})

export default {ClubBookList, ClubBookListItem}