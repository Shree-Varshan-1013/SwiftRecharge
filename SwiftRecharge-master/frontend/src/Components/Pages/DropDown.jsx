import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLogin } from '../../config/GlobalSlice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function DropdownMenu() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const eventLogOut = () => {
        dispatch(toggleLogin(false));
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully loggedout :)",
            showConfirmButton: false,
            timer: 2000
        });
        navigate("/");
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="block float-right">

            <button onClick={toggleDropdown} className="relative z-10 block p-2  bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
                <img src="/assets/icon.png" className="w-8 h-8 rounded-full" alt="Avatar" />
            </button>

            {isOpen && (
                <div className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                    <a onClick={()=> navigate("/profile")} className="cursor-pointer flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0d9488" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd" /></svg>
                        <span className="mx-1">
                            view profile
                        </span>
                    </a>
                    <a onClick={()=> navigate("/history")} className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><circle cx="12" cy="12" r="9" fill="#0d9488" opacity="0.16" /><path stroke="#0d9488" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364A9 9 0 1 0 3 12.004V14" /><path stroke="#0d9488" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 12l2 2l2-2m6-4v5h5" /></g></svg>
                        <span className="mx-1">
                            Payment History
                        </span>
                    </a>
                    <a onClick={eventLogOut} className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0d9488" d="M12 20a8 8 0 1 1 0-16z" opacity="0.5" /><path fill="#0d9488" fill-rule="evenodd" d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0" clip-rule="evenodd" /></svg>
                        <span className="mx-1">
                            Logout
                        </span>
                    </a>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
