import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import AdminService from '../../../services/AdminService';

const RechargeHistory = ({ userName }) => {

  const { accessToken } = useSelector(state => state.global);

  const [searchTerm, setSearchTerm] = useState('');

  const [recharges, setRecharges] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const fetchRecharges = async () => {
    try {
      const res = await AdminService.getRecharges(accessToken);
      setRecharges(res.data);
    } catch (error) {
      console.error("Error fetching recharges:", error);
    }
  };
  useEffect(() => {
    fetchRecharges();
  }, [currentPage]);


  // Calculate indexes for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecharges = recharges.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const eventShowAddon = (addon) => {
    Swal.fire({
      html: `
            <div class="bg-white rounded-lg shadow-lg p-6">
                <h2 class="text-xl font-semibold mb-4">${addon.addonName}</h2>
                <p class="text-gray-700 mb-2"><span class="font-semibold">Price:</span> $${addon.addonPrice}</p>
                <p class="text-gray-700 mb-2"><span class="font-semibold">Validity:</span> ${addon.addonValidity}</p>
                <p class="text-gray-700 mb-2"><span class="font-semibold">Data:</span> ${addon.data}</p>
                <p class="text-gray-700 mb-2"><span class="font-semibold">Operator:</span> ${addon.operatorName}</p>
                <p class="text-gray-700 mb-2"><span class="font-semibold">Details:</span> ${addon.addonDetails}</p>
            </div>
        `,
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: 'Ok',
      confirmButtonColor: '#556cd6',
    });
  }

  const eventShowPlan = (plan) => {
    Swal.fire({
      html: `
            <div class="bg-white rounded-lg shadow-lg p-6">
                <h2 class="text-xl font-semibold mb-4">${plan.planName}</h2>
                <p class="text-gray-700 mb-2"><span class="font-semibold">Price:</span> $${plan.planPrice}</p>
                <p class="text-gray-700 mb-2"><span class="font-semibold">Validity:</span> ${plan.planValidity}</p>
                <p class="text-gray-700 mb-2"><span class="font-semibold">Data:</span> ${plan.planData}</p>
                <p class="text-gray-700 mb-2"><span class="font-semibold">Operator:</span> ${plan.operatorName}</p>
                <p class="text-gray-700 mb-2"><span class="font-semibold">Details:</span> ${plan.planDetails}</p>
            </div>
        `,
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: 'Ok',
      confirmButtonColor: '#556cd6',
    });
  }

  return (
    <>
      <div className=" w-full h-screen">
        <h1 className='text-xl pl-10 p-10 font-bold'>Recharge History</h1>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="">
            <div className="container mx-auto px-4 sm:px-8 mt-5">
              <div className="overflow-y-auto max-h-screen">
                <table className="min-w-full leading-normal font-anuphan">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Customer Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Operator
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRecharges.map((recharge) => (
                      <tr key={recharge.rechargeId}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{recharge.app_user?.userName}</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">₹{recharge.rechargePrice}</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"><span
                          className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                          <span className="relative">{recharge.status}</span>
                        </span></td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{recharge.date}</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{recharge.plan && recharge.plan.operatorName}</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex justify-evenly">
                            {
                              recharge.plan && <div className='flex justify-center items-center'>
                                <button
                                  onClick={() => eventShowPlan(recharge.plan)}
                                  className="block text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-teal-600 hover:bg-gradient-to-r hover:from-teal-600 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-teal-600 transition-all ease-out duration-300"
                                >
                                  Plan
                                </button>
                              </div>
                            }
                            {
                              recharge.addon && <button
                                onClick={() => eventShowAddon(recharge.addon)}
                                className="block text-sm font-medium rounded px-5 py-2.5 overflow-hidden group bg-teal-600 hover:bg-gradient-to-r hover:from-teal-600 hover:to-purple text-white hover:ring-2 hover:ring-offset-2 hover:ring-teal-600 transition-all ease-out duration-300"
                              >
                                Addon
                              </button>
                            }
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div
                  className="px-5 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, recharges.length)} of {recharges.length} Entries
                  </span>
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button
                      onClick={prevPage} disabled={currentPage === 1}
                      className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                      Prev
                    </button>
                    <button
                      onClick={nextPage} disabled={indexOfLastItem >= recharges.length}
                      className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default RechargeHistory;