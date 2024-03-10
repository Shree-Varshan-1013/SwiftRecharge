import React, { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomerService from '../../../services/CustomerService';

const Tabs = ({ openTab, setOpenTab, operatorName, accessToken }) => {

    const [records, setRecords] = useState([]);

    const { userDetails } = useSelector(state => state.global);

    const { mobileNumber, operator } = useParams();

    const navigate = useNavigate();

    const onPay = (details, target) => {

        const price = details.planPrice || details.addonPrice;

        var options = {
            key: "rzp_test_GTafPPTponBFHT",
            key_secret: "gSBaOVZguyjoPP284OlGVRmE",
            amount: price * 100,
            currency: "INR",
            name: "Swift Recharge",
            description: "Sample",
            prefill: {
                name: userDetails.username,
                email: userDetails.email,
                contact: userDetails.mobileNumber,
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
                }).then(navigate("/payment-success"));
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
        const res = await CustomerService.makeRecharge(userDetails.username, accessToken, data);
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
        const res = await CustomerService.makeRecharge(userDetails.username, accessToken, data);
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
                                        <a onClick={() => onPay(record, "plan")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-teal-400 hover:bg-gradient-to-r hover:from-teal-400 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300">
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
                                        {/* <a onClick={() => navigate(`/mobile-recharge/${operatorName}/payment`)} className="relative rounded px-5 py-2.5 overflow-hidden group bg-teal-400 hover:bg-gradient-to-r hover:from-teal-400 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300"> */}
                                        <a onClick={() => onPay(record, "addon")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-teal-600 hover:bg-gradient-to-r hover:from-teal-400 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300">
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