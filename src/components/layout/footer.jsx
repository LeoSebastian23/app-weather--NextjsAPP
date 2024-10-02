import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-16 bg-slate-800 flex justify-center items-center mt-auto text-white text-center text-balance px-8'>
      <Link href="https://leosebastian-portfolio.netlify.app/" target='_blank' title='Leo Sebastian'>Leo Sebastian | Fullstack Developer</Link>
    </footer>
  )
}

export default Footer 