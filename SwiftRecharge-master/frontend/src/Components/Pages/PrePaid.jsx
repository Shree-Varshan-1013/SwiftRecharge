import React from 'react'

const PrePaid = () => {
    return (
        <div className=' items-center justify-center pt-40 pl-32'>
            <div>
                <div className="flex items-center gap-4">
                    <img
                        alt=""
                        src="/assets/jio-img.png"
                        className="size-16 rounded-full object-cover"
                    />

                    <div>
                        <h3 className="text-lg font-medium">Jio Prepaid</h3>
                    </div>
                </div>

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Price</dt>
                            <dd className="text-sm text-gray-800">₹299</dd>
                        </div>
                        <div>
                            <dt className="sr-only">Details</dt>
                            <dd className='font-medium'>Plan</dd>
                            <dd className="font-medium">Validity:28 days</dd>
                            <p>Data:2GB/day|Voice:Unlimited</p>
                            <p>Calls|SMS:100SMS/day</p>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                className="size-4 text-teal-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                />
                            </svg>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="">Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default PrePaid;
