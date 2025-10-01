'use client'
import { useForm } from "react-hook-form"
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { editBlogAction, singleblogAction } from "@/Action/blogAction"

const page = () => {
const router = useRouter()
    const [oldd, setOldd] = useState(null)
    useEffect(() => {
        getoldData()
    }, [])

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const { id } = useParams() //Accessing [id] through URL
    console.log(id)

    const onSubmit = async (user) => {
        console.log({...user,"id":id});
        const editeduser = await editBlogAction({...user,"id":id})
        router.replace("/")
    }
    

    const getoldData = async () => {
        const old = await singleblogAction(id)
        setOldd(old);
    }
    return (
        <div>{ oldd && 
            <form key={oldd._id} onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name", { required: true })} defaultValue={oldd.name} />
                {errors.name && <span>This field is required</span>}


                <input {...register("description", { required: true })} defaultValue={oldd.description} />
                {errors.description && <span>This field is required</span>}


                <input {...register("image", { required: true })} defaultValue={oldd.image}/>
                {errors.image && <span>This field is required</span>}



                <input type="submit" />
            </form>
            }
        </div>
    )
}

export default page
