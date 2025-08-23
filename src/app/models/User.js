import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  recipe_id:[{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe", required: true }],
  course_id:[{ type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }]
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);