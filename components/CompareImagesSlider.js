import { useState, useRef } from 'react'
import squareSpaceImages from '@/data/squareSpaceImages'

const CompareImagesSlider = (beforeImage, afterImage) => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5)
  const imageContainer = useRef(null)

  const slide = (xPosition) => {
    const containerBoundingRect = imageContainer.current.getBoundingClientRect()
    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0
      } else if (xPosition > containerBoundingRect.right) {
        return 1
      } else {
        return (xPosition - containerBoundingRect.left) / containerBoundingRect.width
      }
    })
  }

  const handleTouchMove = (e) => {
    slide(e.touches.item(0)?.clientX ?? 'fallback here')
  }

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove
    window.onmouseup = handleMouseUp
  }
  const handleMouseMove = (e) => {
    slide(e.clientX)
  }

  const handleMouseUp = () => {
    window.onmousemove = undefined
    window.onmouseup = undefined
  }

  let makeNum = (num) => {
    num = parseInt(num)
    return squareSpaceImages[num]
  }

  return (
    <div className="aspect-h-9 aspect-w-16">
      <div
        ref={imageContainer}
        className="group aspect-h-9 aspect-w-16 relative mx-auto select-none"
      >
        {makeNum(beforeImage)}
        <div
          style={{
            filter: 'transparent(100%)',
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
              imageRevealFraq * 100
            }% 100%, 0 100%)`,
          }}
        >
          {makeNum(afterImage)}

          <div
            style={{ left: `${imageRevealFraq * 100}%` }}
            className="absolute inset-y-0 group-hover:opacity-100 md:opacity-0"
          >
            <div className="relative h-full opacity-50 hover:opacity-100">
              <div className="absolute inset-y-0 -ml-px w-0.5 bg-white "></div>
              <div
                style={{ touchAction: 'none' }}
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
                className="absolute top-1/2 -ml-6 -mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tex-gray-400 w-6 rotate-90 transform cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CompareImagesSlider
