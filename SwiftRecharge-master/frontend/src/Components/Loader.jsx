import React from 'react'

const Loader = () => {
    return (
        <div>
            <div className="flex justify-center item-center h-screen mt-[20%]">
                <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon" />
            </div>
        </div>
    )
}

export default Loader
