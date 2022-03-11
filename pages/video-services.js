import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Titles',
    description:
      'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
  },
  {
    name: 'Cuts / Transitions',
    description:
      'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
  },
  {
    name: 'Logos',
    description:
      'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
  },
  {
    name: 'Speed Ramps',
    description:
      'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
  },
  {
    name: 'Exposure Adjustments',
    description:
      'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
  },
  {
    name: 'Color Adjustments / grading',
    description:
      'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
  },
  {
    name: 'LUT application',
    description:
      'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
  },
  {
    name: 'Cinematic Edit',
    description:
      'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
  },
]
const files = [
  {
    className: 'aspect-video w-full',
    src: 'https://player.vimeo.com/video/537317894?h=712e02bd53&app_id=122963',
    allow:
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  },
  {
    className: 'aspect-video w-full',
    src: 'https://player.vimeo.com/video/641919142?h=d7ea6014f7&app_id=122963',
    allow:
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  },
  {
    className: 'aspect-video w-full',
    src: 'https://player.vimeo.com/video/537325941?h=d1c4854e66&app_id=122963',
    allow:
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  },
]
const videoEditing = () => {
  return (
    <div>
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-12 pb-8 text-center lg:py-48 lg:text-right">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              {' '}
              <span className="block text-indigo-600 xl:inline">
                Start now for $5,
                <br />
              </span>{' '}
              <span className="block  xl:inline">
                Let's us work on the <em>wow factor</em> of your videos, freeing you to work on next
                projects!
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Our Team has the skills and depth to understand you video editing style and needs.
              Book now for a free trial, our risk free method of calibrating our edits to your
              specifications.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  Book Now
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl pt-16 pb-3 lg:absolute lg:inset-y-0 lg:right-3 lg:h-full lg:w-1/2">
          <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
            <iframe
              className="aspect-video w-full"
              src="https://player.vimeo.com/video/537317894?h=712e02bd53&app_id=122963"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-5 px-4 sm:px-2 lg:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="block font-extrabold text-indigo-600 xl:inline">Video Editing</span>{' '}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block pb-5 font-extrabold text-gray-900 xl:inline">
                On Your Terms
              </span>{' '}
            </h1>
            <span className="block  font-extrabold text-indigo-600 xl:inline">
              <span className="blockfont-extrabold">Think of it like</span> Your Personal
              Professional Team of video editing Assistants
            </span>
          </div>
          <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-6"
          >
            {files.map((e) => (
              <li key={e.source} className="relative">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <iframe className={e.className} src={e.src} allow={e.allow}></iframe>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default videoEditing
