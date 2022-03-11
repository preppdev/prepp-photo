import React, { useState } from 'react'
import { PlayIcon } from '@heroicons/react/outline'

const WatchDemo = () => {
  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <button className="flex" onClick={openModal}>
        <PlayIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-400" />
        <span className="ml-4">Watch Demo</span>
        {modal ? (
          <section className="aspect-w-16 aspect-h-9">
            <div className="grid place-items-center bg-slate-200">
              <div className="mx-auto w-full p-8" modal={modal}>
                <div className="rounded-lg bg-white p-2 shadow-xl sm:p-4" onClick={setModal}>
                  <iframe
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://player.vimeo.com/video/659875234?h=1980ccb4fb&autoplay=1&loop=1&title=0&byline=0&portrait=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </button>
    </>
  )
}

export default WatchDemo
