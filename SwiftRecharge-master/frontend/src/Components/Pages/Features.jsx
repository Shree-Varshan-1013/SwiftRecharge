import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Easy Accessibility',
    description:
      'Access our platform effortlessly through our user-friendly website or mobile app. With intuitive interfaces and seamless navigation, recharging your mobile has never been easier.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure Transactions',
    description:
      'Our platform employs state-of-the-art encryption technology to safeguard your transactions, providing you with peace of mind every time you recharge.',
    icon: LockClosedIcon,
  },
  {
    name: ' Flexible Recharge Plans',
    description:
      'From prepaid to postpaid, data packs to talk-time plans, explore a variety of options tailored to suit your needs. With flexible recharge plans, you can choose what works best for you without any hassle.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Rest assured, your payment details are safe with us.Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <div name="features" className="bg-white pt-4" style={{
      backgroundImage: "url(/assets/bbblurry1.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className='text-center py-2'><h2 className="text-base font-semibold leading-7 text-teal-600 sm:text-3xl">Recharge faster :)</h2></div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Power up in a flash with our mobile recharge!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
