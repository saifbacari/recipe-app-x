import mongoose from 'mongoose'


const categorieSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const Categorie = mongoose.model('Categorie', categorieSchema)

export default mongoose.models.Categorie || mongoose.model('User', categorieSchema)