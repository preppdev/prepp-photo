import Image from 'next/image'
import samples from '@/data/samplesData'

const samplesPage = () => {
  return (
    <div>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          {/* Details section */}
          <section aria-labelledby="details-heading">
            <div className="flex flex-col items-center text-center">
              <h2
                id="details-heading"
                className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Examples of our Work
              </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              {samples.map((sample) => (
                <div key={sample.id}>
                  <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                    <Image
                      src={sample.imageUrl}
                      alt="Drawstring top with elastic loop closure and textured interior padding."
                      className="h-full w-full object-cover object-center"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default samplesPage
