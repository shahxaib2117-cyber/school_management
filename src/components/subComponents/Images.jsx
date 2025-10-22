import React from 'react'
// import img_1 from 'C:/shahzaib/school_management/public/cards_img_1.png'

const Images = () => {
  return (
    <div className='h-full w-25 border-[blue] flex items-center relative '>
        <div className="h-full w-8 rounded-full bg-[red] "></div>
        <div className="h-full w-8 rounded-full absolute ml-6 z-1 bg-[green] "></div>
        <div className="h-full w-8 rounded-full absolute ml-12 z-2 bg-[blue] "></div>
    </div>
  )
}

export default Images