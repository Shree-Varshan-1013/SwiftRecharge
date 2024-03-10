import React from 'react'

const Self = () => {
    return (
        <div>
            <div className="relative isolate px-6 pt-14 lg:px-8" style={{
                backgroundImage: "url(/assets/bbblurry.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "100vh"
            }}>
                <div className=' text-center pt-20 pl-80 pr-80'>
                    <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-10">
                        <img class="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture" />
                        <h2 class="text-center text-2xl font-semibold mt-3">Srini</h2>
                        <p class="text-center text-gray-600 mt-1">userName</p>
                        <div class="mt-5">
                            <h3 class="text-xl font-semibold">Bio</h3>
                            <p class="text-gray-600 mt-2">bla bla..............</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Self
