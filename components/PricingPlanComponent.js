
import {
  CheckIcon as CheckIconSolid,
} from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const PricingPlanComponent = (props) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-base sm:text-center">
              {props[0].title} Pricing Plans
            </h1>
            <p className="mt-5 text-xl text-base sm:text-center">
              {props[0].subtitle}
            </p>
            
          </div>
          <div
            id="test"
            className={`xl:grid-cols-${props[0].tiers.length} ${classNames(
              (props[0].tiers.length == 1
                ? "xl:max-w-sm lg:max-w-sm md:max-w-sm sm:grid-cols-1 mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:gap-6  lg:mx-auto xl:mx-auto md:mx-auto"
                : (props[0].tiers.length == 2
                    ? "xl:max-w-2xl lg:max-w-2xl md:max-w-2xl sm:grid-cols-2 mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:gap-6  lg:mx-auto xl:mx-auto md:mx-auto"
                    : "xl:max-w-none lg:max-w-none sm:grid-cols-2 lg:grid-cols-3 mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:gap-6  lg:mx-auto xl:mx-auto"))
            )}  `}
          >
            {props[0].tiers.map((tier, key) => (
              <div
                key={key}
                className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
              >
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-base">
                    {tier.name}
                  </h2>
                  <p className="mt-4 text-sm text-base">{tier.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-base">
                      ${tier.priceMonthly}
                    </span>{" "}
                    <span className="text-base font-medium text-base">/mo</span>
                  </p>
                  <a
                    href={tier.href}
                    className="mt-8 block w-full bg-purple-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-purple-700"
                  >
                    Buy {tier.name}
                  </a>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-xs font-medium base tracking-wide uppercase">
                    Whats included
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIconSolid
                          className="flex-shrink-0 h-5 w-5 text-green-500"
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
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-base-content">
              All-in-one platform
            </h2>
            <p className="mt-4 text-lg text-base-content">
              {props[0].headers}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
