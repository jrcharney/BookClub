import User from './User';
import Author from './Author'
import Book from './Book';
import BookAuthor from './BookAuthor';
import Comment from './Comment';

// TODO: Need to find out where to apply `onDelete` and `onUpdate`.

Author.belongsToMany(Book, {
  through: BookAuthor
});

Book.belongsToMany(Author,{
  through: BookAuthor
});

Book.hasMany(BookAuthor,{
  foreignKey: 'book_id'
});

Author.hasMany(BookAuthor,{
  foreignKey: 'author_id'
});

BookAuthor.hasOne(Book,{
  foreignKey: 'book_id',
  //onUpdate: 'CASCADE',    // I don't think we need this
  onDelete: 'CASCADE'       // But we do need this.
});

BookAuthor.hasOne(Author,{
  foreignKey: 'author_id',
  //onUpdate: 'CASCADE',    // I don't think we need this
  onDelete: 'CASCADE'       // But we do need this.
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  //onUpdate: 'CASCADE',    // I don't think we need this
  onDelete: 'CASCADE'       // But we do need this.
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