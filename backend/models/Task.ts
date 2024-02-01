import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
  postData: {
    type: Object,
    required: true,
  },
  userData: {
    type: Object,
    required: true,
  },
  view: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("TaskSchema", TaskSchema);;
