 import { Timestamp } from 'mongodb'
import mongoose from 'mongoose'


 const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    typologie: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    ingredients_list: {
        type: String,
        required: true
    },
    preparation: {
        type: String,
        required: true
    },
    evaluation: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    user_id: { //a MODIFIER
        type: Number,
        required: true
    },
 }, {timestamps: true})

 export default mongoose.models.Recipe || mongoose.model("Recipe", RecipeSchema);
