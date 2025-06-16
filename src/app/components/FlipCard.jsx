'use client'

import { useState } from 'react'
import Image from 'next/image'

const FlipCard = ({ achievement }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-72 w-full"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="relative w-full h-full [perspective:1000px]">
        <div
          className={`relative rounded-xl shadow-lg shadow-black w-full h-full transition-transform duration-700 transform ${isFlipped ? 'rotate-y-180' : ''
            }`}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full rounded-xl overflow-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Image
              src={achievement.image}
              alt={achievement.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Back Side */}
          <div
            className={`absolute w-full h-full rounded-xl p-6 flex flex-col items-center justify-center transform rotate-y-180 text-white bg-gradient-to-b ${achievement.bgGradient || ' from-gray-800 to-gray-900'
              }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <h3 className="text-2xl font-bold mb-2 text-center drop-shadow-sm drop-shadow-black">
              {achievement.title}
            </h3>
            <p className="text-sm font-medium mb-3 opacity-90">
              {achievement.period}
            </p>
            <p className="text-sm text-center opacity-80 leading-relaxed">
              {achievement.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
