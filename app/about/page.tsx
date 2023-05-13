"use client"
import { useState } from "react";
import { Post } from "../utils/interface";


 function About() {
  const [open, setOpen] = useState(true)
  const [count, setCount] = useState(true);

  const [loading , setLoading] = useState(false)


    // const res =   fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();
    function toggleOpen() {
      setOpen(!open)
      
    }
    // console.log(posts)
  return (
    <div>
      {/* <h1>Hello</h1> */}
      {/* {JSON.stringify(posts)} */}
      {/* {posts.map((post : Post) => { 
                return (<div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>)
            })} */}
    </div>
  )
}

export default About