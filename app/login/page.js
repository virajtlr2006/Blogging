'use client'
import { loginAction } from "@/Action/authaction"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
export default function App() {
    const [errormsg, seterrormsg] = useState(null)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const router = useRouter() //Navigate function

    const onSubmit = async (user) => {
        // console.log(user);
        try {
            await loginAction(user) //Sends Data to Backend
            localStorage.setItem("email",user.email) //Store email to localStorage
            router.replace("/") //navigate to Homepage
        } catch (error) {//Throw error if any
            seterrormsg(error.message);
        }

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* Email */}
            <input {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}
            {/* Name */}
            <input {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}

            {/* Error to display on screen */}
            {errormsg && <p className="text-red-600">{errormsg}</p>}
            <input type="submit" />
        </form>
    )
}