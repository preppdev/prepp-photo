import Link from './Link'
import Logo from '@/data/logo.svg'
import services from '@/data/servicesData'
import samples from '@/data/samplesData'
import company from '@/data/companyData'
import legal from '@/data/legalData'
import social from '@/data/socialData'

const Footer = () => {
  return (
    <div className="mt-60">
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Logo />
              <p className="text-base text-gray-500">
                Real Estate Photo Post Processing Based in Virginia Beach, VA
              </p>
              <div className="flex space-x-6">
                {social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {services.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Samples
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {samples
                      .filter((sample, x) => x < 2)
                      .map((sample) => (
                        <li key={sample.name} samples={sample}>
                          <a
                            href={sample.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {sample.name}
                          </a>
                        </li>
                      ))}
                  </ul>
                  <div className="mt-6 text-sm font-medium">
                    <Link href="/samples" className="text-indigo-600 hover:text-indigo-500">
                      View All Samples <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Company
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Legal
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2020 Workflow, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
