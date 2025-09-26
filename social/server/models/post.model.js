import mongoose, { Mongoose } from "mongoose";

const postSchema = new mongoose.Schema({
  // author(user)
  // caption
  // content -- image or video
  // Date and time
  // Likes and comments

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },

  mediaType: {
    type: String,
    enum: ["image", "video"],
    required: true,
  },

  mediaUrl: {
    type: String,
    required: true,
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      text: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});
const Post = mongoose.model("post", postSchema);

export default Post;
