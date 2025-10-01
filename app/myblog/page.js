'use client'
import { UserblogAction } from '@/Action/blogAction'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [bloguser, setBloguser] = useState(null)
    useEffect(() => {
        myBlogs()
    }, [])

    const myBlogs = async () => {
        const email = await localStorage.getItem("email")
        console.log(email);
        const blog = await UserblogAction(email)
        setBloguser(blog);


    }
    return (
        <div>
            {bloguser && bloguser.map((b) =>
                <a href={`/blog/${b._id}`}>
                    <div key={b._id}>
                        <img src={b.image} />
                        <p>{b.name}</p>
                    </div>
                </a>

            )}
        </div>
    )
}

export default page
