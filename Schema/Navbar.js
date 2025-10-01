'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-end">
      
      <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback >CN</AvatarFallback>
</Avatar>
    </div>
  )
}

export default Navbar
