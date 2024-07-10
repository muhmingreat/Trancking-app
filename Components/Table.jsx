const Table = ({setCreateShipmentModal, allShipmentsdata}) => {
 const convertTime = (time) => {
  const newTime = new Date(time)
  const dataTime = new Intl.DateTimeFormat('en-US',{
    year:'numeric',
    month:'2-digit',
    day:'2-digit'
  }).format(newTime)

  return dataTime
 }
 console.log(allShipmentsdata);

  return (
  <div className=" py-4 md:px-0 max-w-screen-xl mx-auto">
    <div className="items-start justify-between md:flex">
      <div className="max-w-lg">
        <h3 className="text-gray-800
        text-xl font-bold sm:text-2xl">
          Create Tracking
        </h3>
        <p className="text-gray-600 mt-2">
         Track your shipment with web3 for transparence  
        </p>
      </div>
      <div className="mt-3 md:mt-0">
        <p onClick={()=> setCreateShipmentModal(true)}
          href='#' className="inline-block
          px-4 py-2 text-white duration-150
          font-medium bg-gray-600
          hover:bg-gray-700 active-gray-900
          md:text-sm rounded-lg md:inline-flex" >
            Add Tracking
          </p>
      </div>
    </div>
    <div className="mt-12 shadow-sm border rounded-lg
          overflow-x-auto">
            <table className="w-full table-auto
                     text-sm text-left">
                     <thead className="bg-gray-50 
                     text-gray-600 font-medium border-b ">
                      <tr>
                        <th className="py-3 px-6">Sender</th>
                        <th className="py-3 px-6">Receiver</th>
                        <th className="py-3 px-6">PickUpTime</th>
                        <th className="py-3 px-6">Distanse</th>
                        <th className="py-3 px-6">Price</th>
                        <th className="py-3 px-6">Delivery Time</th>
                        <th className="py-3 px-6">Paid</th>
                        <th className="py-3 px-6">Status</th>
                      </tr>
                      </thead> 
                      <tbody className="text-gray-600 divide-y">
                        {allShipmentsdata?.map((shipment, i) =>(
                          <tr key={i }>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {shipment.sender.slice(0,15)}...
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {shipment.receiver.slice(0,15)}...
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {convertTime(shipment.pickUpTime)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {shipment.distance} Km
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {shipment.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {shipment.deliveryTime}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {shipment.isPaid ? "Completed" : " Not Completed"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {shipment.status === 0 ? 'PENDING':
                              shipment.status === 1 ? 'IN_TRANSIT':
                              'DELIVERED' }
                            </td>
                          </tr>
                        ))}
                      </tbody>
            </table>
    </div>
  </div>
  )
};

export default Table;
