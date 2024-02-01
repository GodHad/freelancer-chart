import mongoose, {Schema} from "mongoose";

const BidTempSchema = new Schema({
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

export default mongoose.model("BidTemp", BidTempSchema);
