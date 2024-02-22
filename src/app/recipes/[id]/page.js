import Link from "next/link"

export default function Page () {
    return (
        <div>
            <h1>Hello, recipe page à id</h1>
            <Link href="/recipes/edit">Edit this recipe</Link>
        </div>
    )
}