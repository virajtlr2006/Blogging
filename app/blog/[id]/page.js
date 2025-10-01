"use client"
import { deleteblogAction, singleblogAction } from '@/Action/blogAction'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

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
                        <Button className='bg-black text-white' variant="outline" onClick={editblog}>Edit</Button>
                       
                        <AlertDialog>
                            <AlertDialogTrigger>Delete</AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure to delete account ?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={deleteblog}> Delete</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                }
            </>}
        </div>
    )
}

export default page
