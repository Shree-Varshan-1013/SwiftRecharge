import React from 'react'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Verify = () => {

    const { userDetails } = useSelector(state => state.global);

    const onPay = tar => {

        const price = tar;

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
                contact: userDetails.mobileNumber,
            },
            handler: function (response) {
                console.log(response);
                // if (target === "plan") {
                //     makeRechargePlan(details, price);
                // }
                // else {
                //     makeRechargeAddon(details, price);
                // }
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

    return (
        <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-300 via-teal-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Recharge your way to convenience


                        <span className="sm:block">  </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                    Ready for a power boost! Who's in line to receive some electrifying energy?
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded border border-teal-600 px-12 py-3 text-sm font-medium  hover:bg-teal-600 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
                            onClick={() => onPay(500)}
                        >
                            Myself
                        </a>

                        <a
                            className="block w-full rounded border border-teal-600 px-12 py-3 text-sm font-medium  hover:bg-teal-600 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
                            href="#"
                        >
                            Friends
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Verify
