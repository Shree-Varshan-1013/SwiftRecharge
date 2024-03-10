import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteUserDetails, toggleLogin } from '../../../config/GlobalSlice';
import { useDispatch } from 'react-redux';

const SideBar = ({ setActiveLink }) => {

  const nav = useNavigate();

  const dispatch = useDispatch();

  const handleLinkClick = (link) => {
    // console.log(link);
    setActiveLink(link);
  }

  const eventLogout = () => {
    Swal.fire(
      'Success',
      'Successfully Logged Out.',
      'success'
  );
  dispatch(deleteUserDetails());
  dispatch(toggleLogin(false));
    nav("/");
  }

  return (
    <>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-screen w-full max-w-[15rem] p-4 shadow-xl shadow-teal-gray-900/5">
        <div className="mb-2 p-4">
          {/* <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">SWIFTRECHARGE</h5> */}
          <div className="flex lg:flex-1 items-center justify-center">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">SwiftRecharge</span>
              <img
                className="h-8 w-auto"
                src="/assets/recharge-icon.png"
                alt=""
              />
              <span className="ml-2 text-lg font-bold"><i>SWIFT</i><span className='text-teal-600'><i>RECHARGE</i></span></span>
            </a>
          </div>
        </div>
        <nav className="flex flex-col gap-1 min-w-[200px] p-2 font-sans text-base font-normal text-gray-700">
          {/* <div role="button" onClick={() => handleLinkClick("link1")} tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-teal-50 hover:bg-opacity-80 focus:bg-teal-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-teal-900 focus:text-teal-900 active:text-teal-900 outline-none">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><circle cx="12" cy="12" r="9" fill="#0d9488" fillOpacity="0.4" /><path stroke="#0d9488" strokeLinecap="square" strokeWidth="1.2" d="M12 15V9m3 3H9" /></g></svg>            </div>
            Dashboard
          </div> */}
          <div role="button" onClick={() => handleLinkClick("link2")} tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-teal-50 hover:bg-opacity-80 focus:bg-teal-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-teal-900 focus:text-teal-900 active:text-teal-900 outline-none">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#0d9488" fill-rule="evenodd" d="M0 4.13v1.428a.5.5 0 0 0 .725.446l.886-.446l.377-.19L2 5.362l1.404-.708l.07-.036l.662-.333l.603-.304a.5.5 0 0 0 0-.893l-.603-.305l-.662-.333l-.07-.036L2 1.706l-.012-.005l-.377-.19l-.886-.447A.5.5 0 0 0 0 1.51zM7.25 2a.75.75 0 0 0 0 1.5h7a.25.25 0 0 1 .25.25v8.5a.25.25 0 0 1-.25.25h-9.5a.25.25 0 0 1-.25-.25V6.754a.75.75 0 0 0-1.5 0v5.496c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 16 12.25v-8.5A1.75 1.75 0 0 0 14.25 2zm-.5 4a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM6 9.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 6 9.25" clip-rule="evenodd" /></svg>
            </div>
            Details
          </div>
          <div role="button" onClick={() => handleLinkClick("link3")} tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-teal-50 hover:bg-opacity-80 focus:bg-teal-50 focus:bg-opacity-80 active:bg-teal-50 active:bg-opacity-80 hover:text-teal-900 focus:text-teal-900 active:text-teal-900 outline-none">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0d9488" d="M12 2a10.017 10.017 0 0 0-6.994 2.872V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2H6.218A7.98 7.98 0 1 1 4 12a1 1 0 0 0-2 0A10 10 0 1 0 12 2" /><path fill="#0d9488" d="M14 13h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2" /><path fill="#0d9488" d="M12 4a8.008 8.008 0 0 0-5.782 2.5h2.288a1 1 0 0 1 0 2h-4.5a.99.99 0 0 1-.978-.889A9.922 9.922 0 0 0 2 12a1 1 0 0 1 2 0a8 8 0 1 0 8-8m2 9h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2" opacity="0.5" /></svg>
            </div>Recharge History <div className="grid place-items-center ml-auto justify-self-end">
            </div>
          </div>
          <div role="button" onClick={() => handleLinkClick("link4")} tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-teal-50 hover:bg-opacity-80 focus:bg-teal-50 focus:bg-opacity-80 active:bg-teal-50 active:bg-opacity-80 hover:text-teal-900 focus:text-teal-900 active:text-teal-900 outline-none">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0d9488" d="M14 4h-4C6.229 4 4.343 4 3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4" opacity="0.5" /><path fill="#0d9488" d="M13.25 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M9 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2" /></svg>
            </div>User Details
          </div>
          <div onClick={eventLogout} tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-teal-50 hover:bg-opacity-80 focus:bg-teal-50 focus:bg-opacity-80 active:bg-teal-50 active:bg-opacity-80 hover:text-teal-900 focus:text-teal-900 active:text-teal-900 outline-none">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><g fill="#0d9488"><path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity="0.2" /><path d="M120 128V48a8 8 0 0 1 16 0v80a8 8 0 0 1-16 0m60.37-78.7a8 8 0 0 0-8.74 13.4C194.74 77.77 208 101.57 208 128a80 80 0 0 1-160 0c0-26.43 13.26-50.23 36.37-65.3a8 8 0 0 0-8.74-13.4C47.9 67.38 32 96.06 32 128a96 96 0 0 0 192 0c0-31.94-15.9-60.62-43.63-78.7" /></g></svg>
            </div>Log Out
          </div>
        </nav>
      </div>
    </>
  )
}

export default SideBar
