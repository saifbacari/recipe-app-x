import mongoose from 'mongoose' 

const userSchema = new mongoose.Schema({
    username: {
        type: String,

    },
    email: {
        type: String,
    },
    recipe_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Recipe',
        required: true
    },
    course_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Course',
        required: true
    },
},{timestamps: true})


const User = mongoose.model('User', userSchema)

export default mongoose.models.User || mongoose.model('User', userSchema)