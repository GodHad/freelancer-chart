import mongoose, { Schema, Document } from "mongoose";

interface Skill extends Document {
  name: string;
}

const SkillSchema: Schema<Skill> = new Schema({
  name: {
    type: String,
    required: true,
  }
});

export default mongoose.model<Skill>("Skill", SkillSchema);
