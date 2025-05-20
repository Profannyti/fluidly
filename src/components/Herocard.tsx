    import React from 'react'
    import Image from 'next/image'

    const Herocard = () => {
    return (
        <div className='flex gap-[25px] items-center justify-center w-[910px]'>
            <div className='flex flex-col'>
                <div className='w-[285px] h-[400px] rounded-2xl overflow-hidden'>
                    <div className='relative w-full h-full'>
                        <Image
                        src="https://i.pinimg.com/736x/d4/de/7b/d4de7b29db4a70ddd620242d482317f3.jpg" // or remote: "https://example.com/image.jpg"
                        alt="Description of image"
                        fill
                        className='object-cover object-center'
                        />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-2.5'>
                    <span className='mt-1'>Turn Figma Designs to Code</span>
                    <span className='font-light'>By Prantik Verma</span>
                    <span className='text-[#8d8d8d]'>5 min read</span>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='w-[285px] h-[400px] rounded-2xl overflow-hidden'>
                    <div className='relative w-full h-full '>
                        <Image
                        src="https://i.pinimg.com/736x/d4/de/7b/d4de7b29db4a70ddd620242d482317f3.jpg" // or remote: "https://example.com/image.jpg"
                        alt="Description of image"
                        fill
                        className='object-cover object-center'
                        />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-2.5'>
                    <span className='mt-1'>Turn Figma Designs to Code</span>
                    <span className='font-light'>By Prantik Verma</span>
                    <span className='text-[#8d8d8d]'>5 min read</span>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='w-[285px] h-[400px] rounded-2xl overflow-hidden'>
                    <div className='relative w-full h-full'>
                        <Image
                        src="https://i.pinimg.com/736x/d4/de/7b/d4de7b29db4a70ddd620242d482317f3.jpg" // or remote: "https://example.com/image.jpg"
                        alt="Description of image"
                        fill
                        className='object-cover object-center'
                        />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-2.5'>
                    <span className='mt-1'>Turn Figma Designs to Code</span>
                    <span className='font-light'>By Prantik Verma</span>
                    <span className='text-[#8d8d8d]'>5 min read</span>
                </div>
            </div>
        </div>    
    )
    }

    export default Herocard