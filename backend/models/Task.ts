import mongoose, { Schema, Document } from "mongoose";

interface Task extends Document {
  postData: object;
  userData: object;
  viewUsers: Array<Schema.Types.ObjectId>;
}

const TaskSchema: Schema<Task> = new Schema({
  postData: {
    type: Object,
    required: true,
  },
  userData: {
    type: Object,
    required: true,
  },
  viewUsers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
});

export default mongoose.model<Task>("Task", TaskSchema);
