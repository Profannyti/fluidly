// components/Herocard.tsx
import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from './ui/button'
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

// Card component
const Card = ({
  image,
  title,
  author,
  readTime,
  buttonText
}: {
  image: string
  title: string
  author: string
  readTime: string
  buttonText: string
}) => (
  <div className="flex flex-col">
    <div className="w-[285px] h-[400px] rounded-2xl overflow-hidden">
      <div className="relative w-full h-full">
        <Image src={image} alt={title} fill className="object-cover object-center" />
        
        <div className='absolute top-0 left-0 ml-2.5 mt-2.5'>
            <Button className='cursor-pointer text-white bg-black opacity-85 hover:text-black' variant={`default`} size={`sm`}>{buttonText}</Button>
        </div>
      </div>
      
    </div>
    <div className="flex flex-col items-start gap-2.5">
      <span className="mt-1">{title}</span>
      <span className="font-light">By {author}</span>
      <span className="text-[#8d8d8d]">{readTime} read</span>
    </div>
  </div>
)

// Main component
const Herocard = () => {
  const cards = [
    {
      image: 'https://i.pinimg.com/736x/d4/de/7b/d4de7b29db4a70ddd620242d482317f3.jpg',
      title: 'Turn Figma Designs to Code',
      author: 'Raghav Vij',
      readTime: '5 min',
      buttonText: "Figma"
    },
    {
      image: 'https://i.pinimg.com/736x/d4/de/7b/d4de7b29db4a70ddd620242d482317f3.jpg',
      title: 'How to edit an video on Adobe...',
      author: 'Prantik Verma',
      readTime: '3 min',
      buttonText: "Adobe Premier Pro"
    },
    {
      image: 'https://i.pinimg.com/736x/d4/de/7b/d4de7b29db4a70ddd620242d482317f3.jpg',
      title: 'Turn no code to code with Framer',
      author: 'Prantik Verma',
      readTime: '10 min',
      buttonText: "Framer Motion"
    },
  ]

  return (
    <div className={`flex gap-[25px] items-center justify-center w-[910px] ${inter.className}`}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  )
}

export default Herocard