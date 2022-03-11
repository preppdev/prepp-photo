import { CheckIcon } from '@heroicons/react/outline'
import CompareImagesSlider from '@/components/CompareImagesSlider'

const features = [
  {
    name: 'Exposure adjustment to sunset levels',
    description:
      'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
  },
  {
    name: 'Atmosphere/Lighting warmth adjustment',
    description:
      'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
  },
  {
    name: 'Interior lighting enhancement',
    description:
      'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
  },
  {
    name: 'Landscape lighting enhancement',
    description:
      'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
  },
  {
    name: 'Sky replacement',
    description:
      'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
  },
  {
    name: 'Contrast Harmonization',
    description:
      'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
  },
]
const twilightEditing = () => {
  return (
    <div>
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-12 pb-8 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              {' '}
              <span className="block text-indigo-600 xl:inline">
                Twilight Shot Never Been This Easy,
                <br />
              </span>{' '}
              <span className="block  xl:inline">
                The better the source the material the better the results! Let our team work with
                you to get you those results.
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              The easiest way for a listing to stand out in the sea of property photos is a Virtual
              Twilight conversion. With Virtual Twilight, the awesome look of Twilight Photography
              is imagined from a regular daytime photo, saving copious amounts of time and expense.
              Enjoy the benefits of Virtual Twilight for only $5 per photo converted.
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
        <div className="mx-auto max-w-7xl pt-60 pb-3 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          {/* SLIDER */}
          {CompareImagesSlider(8, 9)}
        </div>
        <div className="mx-auto max-w-7xl py-5 px-4 sm:px-2 lg:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="block font-extrabold text-indigo-600 xl:inline">
              Virtual Twilight{' '}
            </span>{' '}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block pb-5 font-extrabold text-gray-900 xl:inline">
                Anytime of the Day
              </span>{' '}
            </h1>
            <span className="block  font-extrabold text-indigo-600 xl:inline">
              Virtual Twilight Specialist focus on getting that perfect look for your homes.
            </span>
          </div>
          <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
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
        </div>
      </main>
    </div>
  )
}

export default twilightEditing
