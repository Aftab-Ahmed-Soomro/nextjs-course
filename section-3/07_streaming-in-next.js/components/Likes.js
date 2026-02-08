"use client"

import { useState } from "react"

export default function Likes() {
  if (typeof window != "undefined") {
    console.log(window)
  }
  if (typeof localStorage != "undefined") {
    console.log(localStorage)
  }
  console.log("Like component")

  const [clicked, isClicked] = useState(0);

  return (
    <div> 
      <p onClick={()=> isClicked(clicked + 1)}>
        {clicked}k Likes {String(console.log("Running on server"))}
      </p>
    </div>
  )
  // onClick={() => {console.log("Like Button clicked")}}
}