'use client'
import { newBlogAction } from "@/Action/blogAction"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const onSubmit = async (user) => {
    try {
       await newBlogAction({...user,
      "email":localStorage.getItem("email")
    })
    router.replace("/")

    } catch (error) {
      console.log("Blog Not Uploaded");
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>



      <input {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}

      <input {...register("description", { required: true })} />
      {errors.description && <span>This field is required</span>}

      <input {...register("image", { required: true })} />
      {errors.image && <span>This field is required</span>}


      <input type="submit" />
    </form>
  )
}