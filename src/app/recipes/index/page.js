import Link from "next/link"

export default function Page () {
    return(
        <div>
            <h1>Hello, Index Recipe Page!</h1>
            <Link href="/recipes/new" >Add a new Recipe</Link>
        </div>

    ) 

}