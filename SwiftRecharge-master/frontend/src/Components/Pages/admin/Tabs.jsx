import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomerService from '../../../services/CustomerService';
import Swal from 'sweetalert2';

const Tabs = ({ openTab, setOpenTab, operatorName, accessToken }) => {

    const [records, setRecords] = useState([]);

    const { userDetails } = useSelector(state => state.global);

    const { mobileNumber, operator } = useParams();

    const navigate = useNavigate();

    const onPay = (details, target) => {

        const price = details.planPrice || details.addonPrice;
        console.log(userDetails.userName);
        var options = {
            key: "rzp_test_GTafPPTponBFHT",
            key_secret: "gSBaOVZguyjoPP284OlGVRmE",
            amount: price * 100,
            currency: "INR",
            name: "Swift Recharge",
            description: "Sample",
            prefill: {
                name: userDetails.userName,
                email: userDetails.email,
                contact: mobileNumber,
            },
            handler: function (response) {
                console.log(response);
                if (target === "plan") {
                    makeRechargePlan(details, price);
                }
                else {
                    makeRechargeAddon(details, price);
                }
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Payment Done",
                    showConfirmButton: false,
                    timer: 3000,
                }).then(navigate("/"));
            },
            notes: {
                address: "Razorpay Corporate office",
            },
            theme: {
                color: "#0d9488",
            },
        };

        var pay = new window.Razorpay(options);
        pay.open();
    };

    const makeRechargeAddon = async (details, price) => {
        var today = new Date();

        const data = {
            // "rechargeId": 0,
            "rechargePrice": price,
            "status": "string",
            "date": today,
            "addon": details
        }
        const res = await CustomerService.makeRecharge(userDetails.userName, accessToken, data);
        console.log(res);
    }

    const makeRechargePlan = async (details, price) => {
        var today = new Date();

        const data = {
            // "rechargeId": 0,
            "rechargePrice": price,
            "status": "string",
            "date": today,
            "plan": details
        }
        const res = await CustomerService.makeRecharge(userDetails.userName, accessToken, data);
        console.log(res);
    }

    useEffect(() => {

        if (openTab === 1) {
            const fetchData = async () => {
                try {
                    const data = await fetchPlans();
                    console.log(data);
                    setRecords(data);
                } catch (error) {
                    console.error('Error fetching plans:', error);
                }
            };

            fetchData();
        } else if (openTab === 2) {
            const fetchData1 = async () => {
                try {
                    const data = await fetchAddon();
                    console.log(data);
                    setRecords(data);
                } catch (error) {
                    console.error('Error fetching plans:', error);
                }
            };
            fetchData1();
        }
    }, [openTab]);

    const fetchPlans = async () => {
        console.log(operator, accessToken)
        const res = await CustomerService.getPlans(operator, accessToken);
        console.log(res.data);
        return res.data;
    }

    const fetchAddon = async () => {
        console.log(operator, accessToken)
        const res = await CustomerService.getAddon(operator, accessToken);
        console.log(res.data);
        return res.data;
    }

    return (

        <div className="max-w-full mx-auto">
            <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
                <button onClick={() => setOpenTab(1)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 1 ? 'bg-teal-600 text-white' : ''}`}>Plans</button>
                <button onClick={() => setOpenTab(2)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 2 ? 'bg-teal-600 text-white' : ''}`}>Add on</button>
            </div>

            <div style={{ display: openTab === 1 ? 'block' : 'none' }}>
                {records.map(record => (
                    <>
                        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-600 mb-2">
                            <div className="flex justify-between items-center">
                                <div className='flex flex-row justify-center'>
                                    <div className='w-36'> {/* Adjust the width as needed */}
                                        <div className="text-2xl font-semibold text-teal-600">₹ {record.planPrice}</div>
                                        <div className="text-gray-700">{record.planName}</div>
                                    </div>
                                    <div className='w-36'> {/* Adjust the width as needed */}
                                        <div className="text-2xl font-semibold text-teal-600">{record.planValidity}</div>
                                        <div className="text-gray-700">Validity</div>
                                    </div>
                                    <div className='w-36'> {/* Adjust the width as needed */}
                                        <div className="text-2xl font-semibold text-teal-600">{record.planData}</div>
                                        <div className="text-gray-700">Data</div>
                                    </div>
                                    <div className='w-36'> {/* Adjust the width as needed */}
                                        <div className="text-2xl font-semibold text-teal-600 uppercase">{record.planType}</div>
                                        <div className="text-gray-700">Plan Type</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-center items-center">
                                        <a onClick={() => onPay(record, "plan")} className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-teal-600 active:shadow-none shadow-lg bg-gradient-to-tr from-teal-600 to-teal-500 border-teal-700 text-white">
                                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                            <span className="relative">Apply</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                ))}
            </div>

            <div style={{ display: openTab === 2 ? 'block' : 'none' }}>
                {records.map(record => (
                    <>
                        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-600 mb-2">
                            <div className="flex justify-between items-center">
                                <div className='flex'>
                                    <div className='md:mr-20 w-40'> {/* Adjust the width as needed */}
                                        <div className="text-2xl font-semibold text-teal-600">₹ {record.addonPrice}</div>
                                        <div className="text-gray-700">{record.addonName}</div>
                                    </div>
                                    <div className='md:mr-20 w-40'> {/* Adjust the width as needed */}
                                        <div className="text-2xl font-semibold text-teal-600">{record.data}</div>
                                        <div className="text-gray-700">Data</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center">
                                        <a onClick={() => onPay(record, "addon")} className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-teal-600 active:shadow-none shadow-lg bg-gradient-to-tr from-teal-600 to-teal-500 border-teal-700 text-white">
                                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                            <span className="relative">Apply</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div >
    );
};

export default Tabs;