import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className="w-full border-t-2  flex justify-center">
      <div className="w-full max-w-[820px] h-60 flex gap-3 items-center justify-center my-5">
        <div className="w-[30%] h-52 bg-[#FF8BDC] rounded-2xl"></div>
        <div className="w-[20%] h-52 bg-[#BED6FA] rounded-2xl"></div>
        <div className="w-[50%] h-52 bg-[#88A9FF] rounded-2xl flex items-end justify-center">
          <div className="bg-white w-[70%] h-8 rounded-3xl my-10 flex justify-end items-center">
            <Button className="rounded-3xl h-6 w-[20%] mx-1.5 bg-black" />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer