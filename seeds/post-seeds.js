import Post from "../models/main_models/Post.js"

const postData = []


const seedPost = () => Post.bulkCreate(postData);

export default seedPost;