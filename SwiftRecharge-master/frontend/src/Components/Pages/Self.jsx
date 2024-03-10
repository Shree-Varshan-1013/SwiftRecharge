import React from 'react'
import { useSelector } from 'react-redux';

const Self = () => {

    const { userDetails } = useSelector(state => state.global);

    return (
        <div>
            <div className="relative isolate px-6 lg:px-8 h-screen" style={{
                backgroundImage: "url(/assets/bbblurry.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "100vh"
            }}>
                <div className=' text-center pt-20 pl-80 pr-80'>
                    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-10">
                        <img className="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture" />
                        <h2 className="text-center text-2xl font-semibold mt-3">{userDetails.userName}</h2>
                        <p className="text-center text-gray-600 mt-1">UserName</p>
                        <h2 className="text-center text-2xl font-semibold mt-3">{userDetails.mobileNumber}</h2>
                        <p className="text-center text-gray-600 mt-1">MobileNumber</p>
                        <h2 className="text-center text-2xl font-semibold mt-3">{userDetails.email}</h2>
                        <p className="text-center text-gray-600 mt-1">Email</p>
                        <h2 className="text-center text-2xl font-semibold mt-3">{userDetails.operatorName}</h2>
                        <p className="text-center text-gray-600 mt-1">Operator Name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Self
