import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  disliked: Boolean,
  dislikes: Number,
  replies: Number,
  retuits: Number,
  title: String,
  topic: String,
  userName: String,
  handle: String,
  time: String,
  image: String
}, {collection: 'tuits'});
export default schema;