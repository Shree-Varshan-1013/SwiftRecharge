import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import Type from '../Type'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '/features' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Hero() {

    const navigate = useNavigate();


    return (
        <div className="bg-white">

            <Header />
            <div className="relative isolate px-6 pt-14 lg:px-8" style={{
                backgroundImage: "url(/assets/bbblurry.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "100vh"
            }}>
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative sm:w-[72.1875rem]"
                        style={{
                            backgroundImage: "url(/assets/bbblurry.svg)"
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-[100px]">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-3xl">
                            Never Miss a Beat with Our Recharge Plans :)
                        </div>
                    </div>
                    <div className="text-center sm:text-5xl">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Keep Your Phone Happy
                        </h1>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Keep Yourself Connected!!!</h1>
                        <div className='py-5 text-teal-600 font-bold text-4xl sm:text-5xl'>
                            <Type />
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Our app serves as a convenient and efficient solution for users to recharge their mobile phones quickly and securely, ensuring uninterrupted connectivity.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                onClick={() => navigate("/signup")}
                                className="rounded-md bg-teal-600 px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer "
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >

                </div>
            </div>
        </div>
    )
}