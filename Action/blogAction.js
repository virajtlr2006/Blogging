'use server'
import Auth from '@/Schema/authSchema'
import { connectDB } from '@/Utils/mongoconnect' //Import database from utils
import { parseJS } from '@/Utils/Parse'
import Blog from '@/Schema/blogSchema'
// New Blog
export const newBlogAction = async (blog) => {
    console.log(blog);
    await connectDB()

    const newBlog = await Blog.create(blog)
    console.log(newBlog);

    return {"msg":"Blog Uploaded"}
    
}

// All Blogs

export const allBlogAction = async () => {
    await connectDB()
    const all = await Blog.find({})
    // console.log();

    return parseJS(all)
    
}


// Single Blog
export const singleblogAction = async (id) => {
    console.log(id);
    await connectDB()
    const blog = await Blog.findById(id)
    console.log(blog);
    return parseJS(blog)
    
}

// User all Blogs

export const UserblogAction = async (email) => {
    console.log(email)
    await connectDB()
    const userblogs = await Blog.find({email})
    console.log(userblogs);
    return parseJS(userblogs)
}

// Edit User Blog

export const editBlogAction = async(blog) =>{
    // console.log(blog);
    await connectDB()
    const editedblog = await Blog.findByIdAndUpdate(blog.id,blog)
    console.log(editedblog);
    return {"msg":"Blog Updated Successfully"}
    
}

//Delete Blog

export const deleteblogAction = async(id)=> {
    await connectDB()
    const deleteblog = await Blog.findByIdAndDelete(id)
    return {"msg":"Dleted Sucess"}
}