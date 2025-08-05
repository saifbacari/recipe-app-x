'use client'
import { useState } from "react"
import { useForm } from "react-hook-form"

const CreateForm = async  => {
    const enteredTitle=""
    const enteredType=""
    const enteredCategorie=""
    const enteredeIngredientsLists=""
    const enteredPreparation=""
    const enteredEvaluation=""
    const [recipe, setRecipe] = useState({
        title: enteredTitle,
        type: enteredType,
        categorie: enteredCategorie,
        ingredientsLists: enteredeIngredientsLists,
        preparation: enteredPreparation,
        evaluation: enteredEvaluation
    })

    const { register, handleSubmit } = useForm();
    

    return ( 
        <div>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <input {...register("title")} placeholder="Title"/>
                <input {...register("type")} placeholder="Type"/>
                <input {...register("categorie")} placeholder="Catégorie"/>
                <input {...register("ingrédients lists")} placeholder="Ingrédients lists"/>
                <input {...register("preparation")} placeholder="Préparation"/>
                <input {...register("evaluation")} placeholder="Evaluation"/>
               <button>Post</button>
            </form>
        </div>
    )
 }


 export default CreateForm