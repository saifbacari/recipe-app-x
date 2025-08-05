import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Recipe from "@/app/models/Recipe";

export const POST = async(request) => {
    try {
        const body = await req
        const recipeData = body.formData
        await Recipe.create(recipeData)

        return NextResponse.json({message:'Recipe created'}, {status: 201})
    } catch(error){
        throw new NextResponse.json({message: "Error", error}, {status: 500  });
    }
}