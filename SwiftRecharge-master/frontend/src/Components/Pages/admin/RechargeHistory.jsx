import React from 'react';

function RechargeHistory() {
  return (
    <div className='flex justify-center items-center'>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Recharge History</h2>
        <p className="text-lg mb-6">Check the status of recent recharges and view details of each transaction.</p>

        <div className="border border-gray-200 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Recent Recharges</h3>
          <div className="overflow-x-auto">
            <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-200 pb-4 mb-4">
              <div className="flex flex-col mb-4 md:mb-0">
                <h4 className="text-lg font-semibold mb-2">Recharge on February 20, 2024</h4>
                <p className="text-sm"><span className="font-semibold">Date:</span> February 20, 2024</p>
                <p className="text-sm"><span className="font-semibold">Transaction ID:</span> RC00012345</p>
                <p className="text-sm"><span className="font-semibold">Amount:</span> $20.00</p>
              </div>
              <div className="flex items-center">
                <a href="#" className="text-teal-600 hover:underline">View Details</a>
              </div>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Mobile Number</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Info</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">9876543210</td>
                  <td className="px-4 py-2">$20.00</td>
                  <td className="px-4 py-2">Success</td>
                  <td className="px-4 py-2">
                    <a href="#" className="text-teal-600 hover:underline">View Details</a>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">9876543210</td>
                  <td className="px-4 py-2">$30.00</td>
                  <td className="px-4 py-2">Failed</td>
                  <td className="px-4 py-2">
                    <a href="#" className="text-teal-600 hover:underline">View Details</a>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">9876543210</td>
                  <td className="px-4 py-2">$50.00</td>
                  <td className="px-4 py-2">Success</td>
                  <td className="px-4 py-2">
                    <a href="#" className="text-teal-600 hover:underline">View Details</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RechargeHistory;
