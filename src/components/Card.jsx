import React from 'react'
import { motion } from 'motion/react'
const Card = ({ style, text, image, containerRef }) => {
    return image && !text ? <motion.img src={image} dragElastic={1} dragConstraints={containerRef} drag style={style} className="absolute w-15 cursor-grab" alt="" whileHover={{ scale: 1.05 }} /> : (
        <motion.div dragElastic={1} whileHover={{ scale: 1.05 }} dragConstraints={containerRef} drag style={style} className='absolute px-1 py-4 text-center rounded-full ring ring-gray-700 text-xl font-extralight bg-storm w-12rem cursor-grab w-[12rem]'>
            {text}
        </motion.div>
    )
}

export default Card
