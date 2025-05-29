'use client'

import { useState } from 'react'
import Image from 'next/image'

const FlipCard = ({ achievement }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="flip-card h-72 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card-inner relative w-full h-full transition-transform duration-700 transform-style ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div className="flip-card-front absolute w-full h-full backface-hidden">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={achievement.image}
              alt={achievement.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Back Side */}
        <div className={`flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-b ${achievement.bgGradient} rounded-xl p-6 flex flex-col items-center justify-center text-white`}>
          <h3 className="text-xl font-bold mb-2 text-center">{achievement.title}</h3>
          <p className="text-sm font-medium mb-3">{achievement.period}</p>
          <p className="text-xs text-center opacity-80">{achievement.description}</p>
        </div>
      </div>
    </div>
  )
}

export default FlipCard