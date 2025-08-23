import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredient_id: { type: mongoose.Schema.Types.ObjectId, ref: "Ingredient", required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);