import Post from "../models/Post.js"

const postData = []


const seedPost = () => Post.createBulk(postData);

export default seedPost;