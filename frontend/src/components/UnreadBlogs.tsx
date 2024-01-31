import React from 'react'
import UnreadBlog from './UnreadBlog'

function UnreadBlogs() {
  return (
    <div className="w-full md:w-2/4 overflow-y-scroll h-screen overflow-x-hidden">
        <UnreadBlog />
        <UnreadBlog />
        <UnreadBlog />
        <UnreadBlog />
        <UnreadBlog />
        <UnreadBlog />
        <UnreadBlog />
    </div>
  )
}

export default UnreadBlogs