import Link from "next/link"

export default function Page () {
    return (
        <div>
            <h1>Hello, this is the new page NEW</h1>
            <Link href="/recipes/edit">Edit this recipe</Link>
        </div>
    )
}