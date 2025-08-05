import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true   
    },
    ingredient_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Ingredient',
        required: true
    }, 
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    }
})

const Course = mongoose.model('Course', CourseSchema)

export default mongoose.models.Course || mongoose.model('Course', CourseSchema)
