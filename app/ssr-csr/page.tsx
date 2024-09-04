"use client"
import React, { useState, useEffect } from 'react'

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data
}

export default function Page() {
  const [posts, setPosts] = useState([])

  const loadPosts = async () => {
    const data = await fetchPosts()
    setPosts(data.slice(0, 5)) 
  }
  useEffect(() => {
    loadPosts()
  }, []) 
  return (
    <div>
      <button onClick={loadPosts} className="border border-black  w-[100px] h-[30px] rounded">
      Refresh
      </button>
      <h1 className="font-bold text-[30px]">Danh sách Bài viết với Refresh</h1>
       
      {posts.map((post: any) => (
        <div key={post.id}>
          <li className="list-none">
            <b>{post.title}</b>
          </li>
          <li className="list-none">{post.body.substring(0, 100)}...</li>
          <br />
          <hr />
        </div>
      ))}
    </div>
  )
}
