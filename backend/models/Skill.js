import mongoose, {Schema} from "mongoose";

const SkillSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
  },
});

export default mongoose.model("Skill", SkillSchema);
