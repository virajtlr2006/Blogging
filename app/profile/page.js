'use client'
import { profileAction } from '@/Action/authaction'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [profile, setprofile] = useState(null) //State of Profile
    useEffect(() => {
        getProfile() //Function called in useeffect
    }, [])


    const getProfile = async () => {
        const email = localStorage.getItem("email") // get email from localStorage
        // console.log(email);
        const a = await profileAction(email) //Data sent to backend
        setprofile(a); //Store in state
    }
    return (
        <div>
            {profile && <>
                <p>{profile.name}</p> 
                <p>{profile.email}</p>
            </>}
        </div>
    )
}

export default page
