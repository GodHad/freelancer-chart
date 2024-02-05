import mongoose, { Schema, Document } from "mongoose";

interface BidTemp extends Document {
  userId: Schema.Types.ObjectId;
  content: string;
  skillSets: Schema.Types.ObjectId[];
}

const BidTempSchema: Schema<BidTemp> = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
    required: true,
  },
  skillSets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill",
    },
  ],
});

export default mongoose.model<BidTemp>("BidTemp", BidTempSchema);
