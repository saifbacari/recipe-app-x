import mongoose from 'mongoose'

const categorieSchema = new mongoose.Schema({
    name: {type: String}
})


export default mongoose.models.Categorie || mongoose.model('User', categorieSchema)