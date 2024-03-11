import React, { useState } from 'react'
import Tabs from './admin/Tabs'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'


const PlanDetails = () => {

    const [openTab, setOpenTab] = useState(1);

    const { operator } = useParams();

    const { accessToken, userDetails } = useSelector((state) => state.global);

    return (
        <div className='pt-20' >
            <div className='flex flex-col md:flex-row h-screen w-full'>
            <div className="md:w-full bg-gray-200 py-4 px-4 overflow-y-auto">
                    {/* <Tabs openTab={openTab} setOpenTab={setOpenTab} operatorName={operatorName} accessToken={accessToken} /> */}
                    <Tabs openTab={openTab} setOpenTab={setOpenTab} operatorName={operator} accessToken={accessToken} />
                </div>
                <div className='md:w-2/4 bg-gray-100 flex justify-center items-center px-4'>
                    <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                        <div className="flex items-start sm:gap-8">
                            <div
                                className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2"
                                aria-hidden="true"
                            >
                                <div className="flex items-center">
                                    {
                                        operator === "Airtel" && <img src="/assets/airtel.png" className="rounded-full" />
                                    }
                                    {
                                        operator === "Jio" && <img src="/assets/jio.png" className="rounded-full" />
                                    }
                                    {
                                        operator === "Bsnl" && <img src="/assets/bsnl.png" className="rounded-full" />
                                    }
                                    {
                                        operator === "Vi" && <img src="/assets/vi.png" height={100} className="rounded-full bg-cover" />
                                    }
                                </div>
                            </div>

                            <div>
                                <strong
                                    className="rounded border border-purple bg-purple px-3 py-1.5 text-[10px] font-mediumfont-anuphan"
                                >
                                    {userDetails.mobileNumber}
                                </strong>

                                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                    <p className="font-poppins"> {operator} </p>
                                </h3>

                                <p className="mt-1 text-sm text-gray-700 font-anuphan">
                                    {operator} Prepaid | Tamil Nadu
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                
            </div>
        </div>
    )
}

export default PlanDetails
