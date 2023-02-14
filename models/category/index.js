/**
 * @file category/index.js
 * @info Group the category models together
 * Unlike Tags, Categories are in a tree structure
 */
import Category from "./Category.js";
import CategoryEchelon from "./CategoryEchelon.js";
import BookCategory from "./BookCategory.js";
import Book from "../main/Book.js";

Book.belongsTo(Category,{
    foreignKey: 'book_id'
});

Category.hasMany(Book, {
    foreignKey: 'book_id'
});

Category.belongsTo(CategoryEchelon, {
    foreignKey: 'parent_id'
});

CategoryEchelon.hasMany(Category,{
    foreignKey: 'child_id'
});

CategoryEchelon.belongsTo(Category, {
    foreignKey: 'parent_id'
});

export default { Category, CategoryEchelon, BookCategory }
