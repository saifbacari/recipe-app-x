import mongoose from "mongoose"

const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categorie_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }
});

export default  mongoose.models.Ingredient || mongoose.model('Ingredient', IngredientSchema)