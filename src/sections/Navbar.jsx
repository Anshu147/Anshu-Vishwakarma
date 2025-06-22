import React, { useState } from 'react'
import { motion } from 'motion/react'
const Navigation = () => {
    return (
        <ul className='nav-ul'>
            <li className='nav-li'>
                <a href="#hero" className='nav-link'>Home</a>
            </li>
            <li className='nav-li'>
                <a href="#about" className='nav-link'>About</a>
            </li>
            <li className='nav-li'>
                <a href="#work" className='nav-link'>Work</a>
            </li>
            <li className='nav-li'>
                <a href="#contact" className='nav-link'>Contact</a>
            </li>
        </ul>
    )
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='inset-x-0 w-full fixed z-20 backdrop-blur-lg bg-primary/40'>
            <div className='mx-auto c-space max-w-7xl'>
                <div className='flex items-center justify-between py-2 sm:py-0'>
                    <a className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>Anshu</a>
                    <button className='flex cursor-pointer text-neutral-400 hover:text-white sm:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
                        <img src={isOpen ? 'assets/close.svg' : "assets/menu.svg"} className='h-6 w-6' alt="toggle" />
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && < motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} style={{ maxHeight: "100vh" }} transition={{ duration: 1 }} className='block overflow-hidden text-center sm:hidden'>
                <nav className='pb-5'>
                    <Navigation />
                </nav>
            </motion.div>}
        </div >
    )
}

export default Navbar
