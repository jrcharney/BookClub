import { Comment } from "../models/Comments.js";

const commentData = [
  {
    comment_text: "I really enjoyed this book!",
    post_id: 3,
    user_id: 1,
  },
  {
    comment_text:
      "this book was 4 out 5 stars for me",
    post_id: 1,
    user_id: 4,
  },
  {
    comment_text:
      "That is so cool!",
    post_id: 4,
    user_id: 2,
  },
  {
    comment_text: "I would not reccomend this book.",
    post_id: 4,
    user_id: 3,
  },
  {
    comment_text: "Do you know how this book was written?",
    post_id: 5,
    user_id: 5,
  },
  {
    comment_text:
      "This book is looong.",
    post_id: 5,
    user_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

export default seedComments;
