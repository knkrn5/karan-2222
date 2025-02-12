import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: Number,
    required: true
  },
  videoFile: {
    type: String, // URL or path to video file
    required: true
  },
  thumbnail: {
    type: String, // URL for video thumbnail
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    required: true
  },
  tags: [
    {
      type: String,
      trim: true
    }
  ]
}, {
  timestamps: true
});


videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);