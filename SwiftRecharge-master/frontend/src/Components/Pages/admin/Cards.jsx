import React from 'react'

const Cards = () => {
    return (
        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-purple3 mb-2">
            <div className="flex justify-between items-center">
                <div className='flex'>
                    <div className='md:mr-40'>
                        <div className="text-2xl font-semibold text-purple3">₹ 199</div>
                        <div className="text-gray-700">Unlimited Calls</div>
                    </div>
                    <div className='md:mr-40'>
                        <div className="text-2xl font-semibold text-purple3">28</div>
                        <div className="text-gray-700">Validity</div>
                    </div>
                    <div className='md:mr-10'>
                        <div className="text-2xl font-semibold text-purple3">3 GB/Day</div>
                        <div className="text-gray-700">Data</div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <a onClick={() => navigate('/mobile-recharge')} className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple2 hover:bg-gradient-to-r hover:from-purple2 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple2 transition-all ease-out duration-300">
                            <span className="relative">Apply</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
