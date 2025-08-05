import mongoose from 'mongoose'

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categorie_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category',
        required: true
    
    }
})


const Ingredient = mongoose.model('Ingredient', IngredientSchema)

export default mongoose.models.Ingredient || mongoose.model('Recipe', RecipeSchema)

