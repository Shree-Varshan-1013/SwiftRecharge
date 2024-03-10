import { useState } from 'react';
import AddPlan from './AddPlan';
import AddOn from './AddOn';
import EditPlan from './EditPlan';
import EditAddon from './EditAddon';

const OverAll = () => {

    const [selectedTab, setSelectedTab] = useState('plans');

    const [showForm, setShowForm] = useState(false);

    const [showEditForm, setShowEditForm] = useState(false);

    const [showEditPlanForm, setShowEditPlanForm] = useState(false);

    const handleEditButtonClick = () => {
        setShowEditForm(true);
        setSelectedTab(null);
    };

    const handleEditPlanButtonClick = () => {
        setShowEditPlanForm(true);
        setSelectedTab(null);
    }

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        setShowEditForm(false); // Reset edit form state
        setShowEditPlanForm(false); // Reset edit plan form state
        setShowForm(false);
    };

    const handleAddButtonClick = (tab) => {
        setSelectedTab(tab);
        setShowForm(true);
        setShowEditForm(false);
        setShowEditPlanForm(false);
    };

    const renderEditContent = () => {
        if (showEditPlanForm) {
            return <EditPlan />;
        }
        if (showEditForm) {
            return <EditAddon />;
        }
    }

    const renderContent = () => {
        if (showForm) {
            return (
                <>
                    {
                        selectedTab === "plans" ? <AddPlan /> : <AddOn />
                    }
                </>
            );
        }

        if (selectedTab === 'plans') {
            return (
                <table className="w-full whitespace-nowrap bg-slate-200">
                    <thead>
                        <tr className='text-gray-700'>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Data</th>
                            <th className="px-4 py-2 text-left">Price</th>
                            <th className="px-4 py-2 text-left">Validity</th>
                            <th className="px-4 py-2 text-left">Plan Type</th>
                            <th className="px-4 py-2 text-left">Operator</th>
                            <th className="px-4 py-2 text-left">Description</th>
                            <th className="px-4 py-2 text-left">Actions</th> {/* Add Actions column header */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr tabIndex="0" className="focus:outline-none h-16 rounded">
                            <td className="px-4 py-2">
                                <div className="flex items-center">
                                    <p className="text-base font-medium leading-none text-gray-700 ">Marketing Keynote Presentation</p>
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex items-center">
                                    <p className="text-sm leading-none text-gray-600 ">2 GB/Day</p>
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex items-center">
                                    <p className="text-sm leading-none text-gray-600 ">₹ 499</p>
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex items-center">
                                    <p className="text-sm leading-none text-gray-600 
                                    ">30 Days</p>
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <button className="py-3 px-3 text-sm focus:outline-none leading-none text-purple3 bg-teal-200 rounded">Prepaid</button>
                            </td>
                            <td className="px-4 py-2">
                                <button className="py-3 px-3 text-sm focus:outline-none leading-none text-teal-700 bg-red-100 rounded">Airtel</button>
                            </td>
                            <td className="px-4 py-2 max-w-md">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#00897B" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16" /></svg>
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex items-center">
                                    <button className="mr-2" onClick={handleEditPlanButtonClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#00897B" fillRule="evenodd" clipRule="evenodd"><path d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z" /><path d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1a2 2 0 0 0-2.2.4l-.6.6l2.9 3l.5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8m-2.4 4.4l-2.8-3l-4.8 5l-.1.3l-.7 3c0 .3.3.7.6.6l2.7-.6l.3-.1l4.7-5Z" /></g></svg>
                                    </button>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00897B" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" /></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-3"></tr> {/* Spacer row */}
                    </tbody>
                </table>
            );
        }
        else if (selectedTab === 'addon') {
            return (
                <table className="w-full whitespace-nowrap bg-slate-200">
                    <thead>
                        <tr className='text-gray-700'>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Data</th>
                            <th className="px-4 py-2 text-left">Price</th>
                            <th className="px-4 py-2 text-left">Operator</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr tabIndex="0" className="focus:outline-none h-16 rounded">
                            <td className="px-4 py-2">
                                <div className="flex items-center">
                                    <p className="text-base font-medium leading-none text-gray-700 ">Marketing Keynote Presentation</p>
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex items-center">
                                    <p className="text-sm leading-none text-gray-600">2 GB/Day</p>
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex items-center">
                                    <p className="text-sm leading-none text-gray-600 ">₹ 499</p>
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex items-center">
                                    <button className="py-3 px-3 text-sm focus:outline-none leading-none text-teal-700 bg-red-100 rounded">Airtel</button>
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex items-center">
                                    <button className="mr-2" onClick={handleEditButtonClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#00897B" fillRule="evenodd" clipRule="evenodd"><path d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z" /><path d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1a2 2 0 0 0-2.2.4l-.6.6l2.9 3l.5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8m-2.4 4.4l-2.8-3l-4.8 5l-.1.3l-.7 3c0 .3.3.7.6.6l2.7-.6l.3-.1l4.7-5Z" /></g></svg>
                                    </button>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00897B" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" /></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-3"></tr>
                    </tbody>
                </table>
            );
        }
        return null;
    };

    return (
        <div className="text-black w-full bg-slate-500">
            {/* <div className="pl-4 pr-4">
                <nav className="block w-full max-w-full bg-transparent text-black shadow-none rounded-xl transition-all px-0 py-1">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center p-3">
                        <div className="capitalize">
                            <nav aria-label="breadcrumb" className="w-max">
                                <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                                    <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                                        <a href="#">
                                            <p className="block antialiased font-anuphan text-sm leading-normal dark:text-purple4 text-purple2 font-normal transition-all hover:opacity-100">dashboard</p>
                                        </a>
                                        <span className="text-gray-500 text-sm antialiased font-anuphan font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                                    </li>
                                    <li className="flex items-center text-white-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-purple3">
                                        <p className="block antialiased font-anuphan text-sm leading-normal text-black font-normal dark:text-white">Details</p>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="flex items-center">
                            <a>
                                <span className="font-anuphan">userName</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div> */}
            <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 bg-slate-100">
                {/* Tab buttons */}
                <div className="sm:flex items-center justify-between">
                    <div className="flex items-center">
                        <button onClick={() => handleTabClick('plans')} className={`rounded-full focus:outline-none focus:ring-2  focus:bg-teal-50 focus:ring-teal-800 ${selectedTab === 'plans' ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:text-teal-700 hover:bg-teal-100'} py-2 px-8 rounded-full`}>
                            <p className='font-semibold'>Plans</p>
                        </button>
                        <button onClick={() => handleTabClick('addon')} className={`rounded-full focus:outline-none focus:ring-2 focus:bg-teal-50 focus:ring-teal-800 ml-4 sm:ml-8 ${selectedTab === 'addon' ? 'bg-teal-100 text-teal-700' : 'text-gray-600  hover:text-teal-700 hover:bg-teal-100'} py-2 px-8 rounded-full`}>
                            <p className='font-semibold '>Addon</p>
                        </button>
                        <div className="pl-10">
                            <input type="text" placeholder="Search for a plan, e.g. 199" className="w-full p-2 border border-gray-300 rounded-lg" />
                        </div>
                    </div>
                    {selectedTab === 'plans' && !showForm && (
                        <button onClick={() => handleAddButtonClick("plans")} className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-teal-700 hover:bg-teal-600 focus:outline-none rounded">
                            <p className="text-sm font-medium leading-none text-gray">Add</p>
                        </button>
                    )}
                    {selectedTab === 'addon' && !showForm && (
                        <button onClick={() => handleAddButtonClick("addon")} className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-teal-700 hover:bg-teal-600 focus:outline-none rounded">
                            <p className="text-sm font-medium leading-none text-gray">Add</p>
                        </button>
                    )}
                </div>
                <div className="mt-7 overflow-x-auto" style={{ width: "1000px" }}>
                    {renderContent()}
                    {renderEditContent()}
                </div>
            </div>
        </div>
    );
};

export default OverAll;