import React from 'react'

const ViewPlans = () => {
    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-teal-600 sm:text-3xl">Add Plans</h1>

                    <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                        <div>
                            <label className="sr-only">Add plans</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Add plan"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-400 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Add amount"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ViewPlans
