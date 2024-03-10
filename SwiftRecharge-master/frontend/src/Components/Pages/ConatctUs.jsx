import React from 'react'

const ConatctUs = () => {
    return (
        <div style={{
            backgroundImage : "url(/assets/bbblurry.svg)",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            minHeight:"100vh"
        }}>

            <section>
                <div name="contact" className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt=""
                                src="/assets/contact.svg"
                            // className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl text-teal-600">Spark Support</h2>

                            <p className="mt-4 text-gray-800">
                                Our support content is designed to empower you with everything you need for seamless mobile recharges. Dive into our FAQs for quick answers on recharge methods, payment options, and account management. Need step-by-step guidance? Our easy-to-follow guides, complete with screenshots, ensure hassle-free transactions.
                            </p>
                            {/* <p className='text-teal-600'>Phone : 7904161298</p>
                            <p >Email : rsrini169@gmail.com</p> */}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ConatctUs
