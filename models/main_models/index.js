import User from './User';
import Post from './Post';
import Book from './Book';
import Comment from './Comment';

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

User.hasMany(Post, {
    foreignKey: 'user_id',
  });

Post.belongsTo(User, {
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

Post.hasMany(Book, {
  foreignKey: 'post_id',
});

Book.belongsTo(Post, {
  foreignKey: 'post_id',
});


export default { User, Post, Book, Comment };