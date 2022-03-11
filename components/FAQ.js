import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Link from 'next/link'
const faqs = [
  {
    question: 'How does the 1 Week Free Trial work?',
    answer:
      'At PREPP.photo, we are 100% confident that you will find us to be an amazing partner in your photography business. To get a sample of our work, we offer all new clients a 1 Week Trial. Essentially, this means that we will process all of your normal photos for an entire week for free. In addition, you are able to receive 1 free virtual twilight conversion per photoshoot during this time. Any additional service can still be requested during this time at their normal rates.',
  },
  {
    question: 'How do we share files with the PREPP office?',
    answer:
      "We utilize the excellent capabilities of Dropbox for file reception and delivery. Upon the creation of your account, a Dropbox folder will be shared from our company account to yours. If there is an issue using Dropbox, don't be shy about chatting with one of our team members for an alternative solution.",
  },
  {
    question: 'What is the turnaround time?',
    answer:
      'Typically Photos, Videos, and Virtual Twilights are delivered by 10am (EST) on the following day from when the raw files are uploaded. One exception is that we do not work on Saturday evening which means both Saturday and Sunday jobs will be delivered on Monday at 10am. In the future we will implement 7 day service coverage.',
  },
  {
    question: 'How long are my finished files stored for?',
    answer:
      'Due to the extremely high volume of photos we process daily, we typically archive (delete) finished files from the Dropbox folder once per month. You may retain a copy of the files on your own personal Dropbox account with no issue, but it is necessary for us to clear the space on our side.',
  },
  {
    question: 'How do I pay for finished work?',
    answer:
      'We bill for completed service on a weekly basis, which can be paid for by eletronic bank transfer or card payment. You may also elect to pre-pay for a discount. Contact our team for details regarding the pre-pay program.',
  },
  {
    question: 'What happens if I have a problem with my edits?',
    answer:
      'The team at PREPP.photo is 100% committed to the quality of our work. However, we are all human and sometimes a particular photo set needs a little tweaking to sparkle. As such, we are available via email, phone, and live chat to squash the bugs as they become apparent.',
  },
  {
    question: 'Where is PREPP.photo located?',
    answer: `PREPP.photo, also known by our full name Professional Real Estate Photo Processors, is based in Virginia Beach, VA. All orders flow through our Virginia Beach office and our routed to one of our image processing experts in the "East" office or are sent to our satellite "West" office in Davao, PI as needed. The collaboration between the PREPP East office and the PREPP West office is the magic that happens behind the scenes that lets us keep an exceedingly quick delivery turnaround time while maintaining the quality levels we strive for`,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const FAQ = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FAQ
