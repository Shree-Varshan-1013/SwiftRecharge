import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import AdminService from '../../../services/AdminService';
import Swal from 'sweetalert2';

const UserDetails = ({ userName }) => {


  const { accessToken } = useSelector(state => state.global);

  const [searchTerm, setSearchTerm] = useState('');

  const [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const triggerSearch = () => {
    // const res = AdminService
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const res = await AdminService.getUsersInfos(accessToken);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Calculate indexes for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="w-full h-screen">
        <h1 className='text-xl pl-10 p-10 font-bold'>User Details</h1>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="">
            <div className="container mx-auto px-4 sm:px-8 mt-5">
              <div className="overflow-y-auto max-h-screen">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        UserName
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Mobile Number
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      currentUsers.map((user) => {
                        return (<><tr key={user.id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.userName}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.mobileNumber}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span aria-hidden
                              className="absolute inset-0 opacity-50 rounded-full"></span>
                            <span className="relative">{user.role[0].roleName}</span>
                          </td>
                        </tr></>)
                      })
                    }
                  </tbody>
                </table>
                {/* <div
                                    className="px-5 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span className="text-xs xs:text-sm text-gray-900">
                                        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, users.length)} of {users.length} Entries
                                    </span>
                                    <div className="inline-flex mt-2 xs:mt-0">
                                        <button
                                            onClick={prevPage} disabled={currentPage === 1}
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                            Prev
                                        </button>
                                        <button
                                            onClick={nextPage} disabled={indexOfLastItem >= users.length}
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                            Next
                                        </button>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails;