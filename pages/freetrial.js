import Navbar from '@/components/Navbar'

const freetrial = () => {
  return (
    <div>
      <div>
        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
          <p className="text-base font-semibold uppercase tracking-wider text-gray-500">
            We are so confident that you will be thrilled with our work, new customers enjoy a
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">1 Week Free Trial to test out the service!</span>
            <span className="block">Start your free trial today.</span>
          </h2>
          <div className="mt-5 grid place-items-center bg-slate-200">
            <div className="mx-auto w-full">
              <div className="rounded-lg bg-white p-2 shadow-xl sm:p-4">
                <iframe
                  className="aspect-square min-h-full w-full"
                  src="https://form.typeform.com/to/xp0fgJ5p?typeform-embed-id=8789248938601628&typeform-embed=embed-widget&typeform-source=prepp.photo&typeform-medium=snippet&typeform-medium-version=next"
                  height="800"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl py-6 px-4 text-center sm:px-6 lg:py-10 lg:px-8">
        <p className="text-base font-semibold uppercase tracking-wider text-gray-500">
          1 Week Free trial includes unlimited standard photo editing and twilight conversions for 7
          calendar days. Other add-ons and services are still available at the normal rate during
          the trial. Contact us if you would like a sample of a specific service.
        </p>
      </div>
    </div>
  )
}

export default freetrial
