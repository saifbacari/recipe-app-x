'use server'
import Recipe from "../models/Recipe"
import db from './db'
import { revalidatePath } from "next/cache"


export const addRecipe = async (FormData) => {
    const {title, type, categorie, ingredients_list, preparation, evaluation, notes} = 
        Object.formEntries(FormData)
        try {
            db.connect()
            const newRecipe = new Recipe({
                title, categorie, ingredients_list, preparation, evaluation, notes
            })
            await newRecipe.save()
        }
        catch(error){
            throw new Error("Fail to create new contact. Please try again" + error)
        }
} 