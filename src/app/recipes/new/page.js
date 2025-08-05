import { useForm } from "react-hook-form";


import CreateInput from "@/app/components/CreateInput"
import CreateForm from "@/app/components/CreateForm"

export default async function Page () {


    return (
        <div>
            <CreateForm />
            <CreateInput />
        </div>
    )
}