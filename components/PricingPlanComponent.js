import { CheckIcon as CheckIconSolid } from '@heroicons/react/solid'
//data tier for photo-editing
//data tier for photo-editing
import { photoEditing } from '../data/tier'
const tier = photoEditing

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const PricingPlanComponent = (props) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
          <div className="sm:align-center sm:flex sm:flex-col">
            <h1 className="text-5xl font-extrabold sm:text-center">
              {props[0].title} Pricing Plans
            </h1>
            <p className="mt-5 text-xl sm:text-center">{props[0].subtitle}</p>
          </div>
          <div
            id="test"
            className={`xl:grid-cols-${props[0].tiers.length} ${classNames(
              props[0].tiers.length == 1
                ? 'mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 md:mx-auto md:max-w-sm lg:mx-auto  lg:max-w-sm xl:mx-auto xl:max-w-sm'
                : props[0].tiers.length == 2
                ? 'mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:mx-auto md:max-w-2xl lg:mx-auto  lg:max-w-2xl xl:mx-auto xl:max-w-2xl'
                : 'mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-none lg:grid-cols-3  xl:mx-auto xl:max-w-none'
            )}  `}
          >
            {props[0].tiers.map((tier, key) => (
              <div
                key={key}
                className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="p-6">
                  <h2 className="text-lg font-medium leading-6">{tier.name}</h2>
                  <p className="mt-4 text-sm">{tier.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold">${tier.priceMonthly}</span>{' '}
                    <span className="text-base font-medium">/mo</span>
                  </p>
                  <a
                    href={tier.href}
                    className="mt-8 block w-full rounded-md border border-transparent bg-purple-600 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700"
                  >
                    Buy {tier.name}
                  </a>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h3 className="base text-xs font-medium uppercase tracking-wide">
                    Whats included
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIconSolid
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature list */}
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-base-content text-3xl font-extrabold">All-in-one platform</h2>
            <p className="text-base-content mt-4 text-lg">{props[0].headers}</p>
          </div>
        </div>
      </div>
    </>
  )
}
