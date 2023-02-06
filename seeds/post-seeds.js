import Post from "../models/Post.js"

const postData = [
    {
      topic_id: 1  
    }
]

const seedPost = () => Post.createBulk(postData);

export default seedPost;