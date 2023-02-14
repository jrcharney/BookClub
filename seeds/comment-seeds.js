import Comment from "../models/main/Comment.js";

const commentData = [
  {
    comment_text: "I really enjoyed this book!",
    book_id: 3,
    user_id: 1,
  },
  {
    comment_text: "this book was 4 out 5 stars for me",
    book_id: 1,
    user_id: 4,
  },
  {
    comment_text: "That is so cool!",
    book_id: 4,
    user_id: 2,
  },
  {
    comment_text: "I would not recommend this book.",
    book_id: 4,
    user_id: 3,
  },
  {
    comment_text: "Do you know how this book was written?",
    book_id: 5,
    user_id: 5,
  },
  {
    comment_text: "This book is looong.",
    book_id: 5,
    user_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

export default seedComments;
