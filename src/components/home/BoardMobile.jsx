import React, { useState } from 'react'

const BoardMobile = () => {
    const [board, setBoard] = useState("WHITE_BOARD");
  return (
    <div className='border-b-dark2D border-b flex justify-evenly'>
        <div className={board === 'ALL'? "border-b-[3px] border-b-primary80 cursor-pointer" : "cursor-pointer"}>All Posts</div>
        <div className={board === 'WHITE_BOARD'? "border-b-[3px] border-b-primary80 cursor-pointer" : "cursor-pointer"}>White Board</div>
        <div className={board === 'BLACK_BOARD'? "border-b-[3px] border-b-primary80 cursor-pointer" : "cursor-pointer"}>Black bard</div>
    </div>
  )
}

export default BoardMobile;