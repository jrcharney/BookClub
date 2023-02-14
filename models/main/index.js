import User from './User';
import Author from './Author'
import Book from './Book';
import BookAuthor from './BookAuthor';
import Comment from './Comment';

Book.hasMany(BookAuthor,{
  foreignKey: 'book_id'
});

Author.hasMany(BookAuthor,{
  foreignKey: 'author_id'
});

BookAuthor.hasOne(Book,{
  foreignKey: 'book_id'
});

BookAuthor.hasOne(Author,{
  foreignKey: 'author_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Book, {
  foreignKey: 'book_id',
});

Book.hasMany(Comment, {
  foreignKey: 'book_id',
});

export default { User, Author, Book, BookAuthor, Comment };