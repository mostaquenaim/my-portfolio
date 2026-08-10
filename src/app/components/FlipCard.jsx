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
          className={`relative rounded-xl border border-border w-full h-full transition-transform duration-700 transform ${isFlipped ? 'rotate-y-180' : ''
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
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
          </div>

          {/* Back Side */}
          <div
            className={`absolute w-full h-full rounded-xl p-6 flex flex-col items-center justify-center text-center transform rotate-y-180 bg-surface`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {achievement.title}
            </h3>
            <p className="text-xs font-mono text-accent mb-3">
              {achievement.period}
            </p>
            <p className="text-sm text-muted leading-relaxed">
              {achievement.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
