import React, { useState } from 'react'

const BoardMobile = () => {
    const [board, setBoard] = useState("ALL");
    const handleSetBoard = (boardValue) => {
      setBoard(boardValue)
    }
  return (
    <div className='border-b-dark2D border-b flex justify-evenly mt-5 mb-7'>
        <div onClick={()=>handleSetBoard("ALL")} className={board === 'ALL'? "border-b-[3px] border-b-primary80 px-1 pb-1 cursor-pointer" : "pb-1 px-1 cursor-pointer"}>All Posts</div>
        <div onClick={()=>handleSetBoard("WHITE_BOARD")} className={board === 'WHITE_BOARD'? "border-b-[3px] border-b-primary80 px-1 pb-1 cursor-pointer" : "pb-1 px-1 cursor-pointer"}>White Board</div>
        <div onClick={()=>handleSetBoard("BLACK_BOARD")} className={board === 'BLACK_BOARD'? "border-b-[3px] border-b-primary80 px-1 pb-1 cursor-pointer" : "pb-1 px-1 cursor-pointer"}>Black bard</div>
    </div>
  )
}

export default BoardMobile;