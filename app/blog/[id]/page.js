"use client"
import { deleteblogAction, singleblogAction } from '@/Action/blogAction'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [showblog, setshowblog] = useState(null)
    const [isUsersblog, setisUsersblog] = useState(false)

    useEffect(() => {
        singleblog()
    }, [])
const router = useRouter()
    const { id } = useParams() //Accessing [id] through URL
    // console.log(id)

    const singleblog = async () => {
        const save = await singleblogAction(id)
        const email = localStorage.getItem("email")
        if (save.email == email) {
            setisUsersblog(true)
        }

        setshowblog(save);

    }

    const editblog = async () => {
        router.replace(`/blog/edit/${showblog._id}`)
    }

    const deleteblog = async () => {
        await deleteblogAction(id)
        router.replace("/")
    }
    return (
        <div>
            {showblog && <>
                <img src={showblog.image} />

                <h1 className='text-4xl'>{showblog.name}</h1>
                <p>{showblog.description}</p>
                {isUsersblog &&
                    <div>
                        <button onClick={editblog}>Edit</button>
                        <button onClick={deleteblog}>Delete</button>
                    </div>
                }
            </>}
        </div>
    )
}

export default page
