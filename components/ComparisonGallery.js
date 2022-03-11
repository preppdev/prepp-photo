import { useRef } from 'react'

import CompareImagesSlider from './CompareImagesSlider'

const ComparisonGallery = () => {
  const imageContainer = useRef(undefined)

  return (
    <ul
      ref={imageContainer}
      role="list"
      className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      <li>{CompareImagesSlider(0, 1)}</li>
      <li>{CompareImagesSlider(2, 3)}</li>
      <li>{CompareImagesSlider(4, 5)}</li>
      <li>{CompareImagesSlider(6, 7)}</li>
    </ul>
  )
}

export default ComparisonGallery
