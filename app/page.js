'use client'
import { allBlogAction } from '@/Action/blogAction'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const page = () => {
  const [homeblogs, sethomeblogs] = useState(null)
  useEffect(() => {
    getallBlog()
  }, [])

  const getallBlog = async () => {
    const allBlogs = await allBlogAction()
    console.log(allBlogs);

    sethomeblogs(allBlogs);

  }

  return (
    <div>
      {homeblogs && homeblogs.map((e) =>

        <a href={`/blog/${e._id}`}>
          <div key={e._id}>
            <p>{e.name}</p>
            <p>{e.description}</p>
            <img src={e.image} />
          </div>
        </a>

      )}
    </div>
  )
}

export default page
