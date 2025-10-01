'use client'
import { signupAction } from "@/Action/authaction"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

const router = useRouter() //Navigate function
  const onSubmit = async (user) => {
    try {
      await signupAction(user) //If backend works without problem
      router.replace("/login") //After Signup navigate tot login
    } catch (error) {//Throw error if backend has errors
      alert("Internal Server Error")
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <input {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}
      {/* Email */}
      <input {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      {/* Password */}
      <input {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}