import {useState} from "react";
import Str1 from "./SVG/Str1";

const GetShipment = ({getModal, setGetModal, getshipment}) => {

  const [index, setIndex] = useState(0)
  const [singleShipmentData,setSingleShipmentData] = useState()

     const getShipmentData = async () => {
      const getData = await getshipment(index);
    
      setSingleShipmentData(getData)
      console.log(getData)
     }

     const convertTime = (time) => {
       const newTime = new Date(time);
       const dataTime = new Intl.DateTimeFormat("en-US", {
         year: "numeric",
          month: "2-digit",
          day: "2-digit",
           }).format(newTime);
  
       return dataTime;
      };
        console.log(singleShipmentData)

  return getModal ? (
    <div
      className="fixed inset-0  z-10
      overflow-y-auto  "
    >
      <div
        className="fixed inset-0 w-full h-full 
       bg-black opacity-40"
        onClick={() => setGetModal(false)}
      ></div>
      <div
        className="flex items-center 
         min-h-screen px-4 py-8"
      >
        <div
          className="relative w-full max-w-lg bg-white p-4
        rounded-md shadow-lg"
        >
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400 rounded-md
             hover:bg-gray-100"
              onClick={() => setGetModal (false)}
            >
              <Str1 />
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 text-center">
            <h4 className="text-lg font-medium text-gray-800">
              Product Tracking Details
            </h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative mt-3">
                <input
                  type="number"
                  placeholder="Id"
                  className="w-full pl-5 py-2 text-gray-500 pr-3
                bg-transparent outline-none focus:border-indigo-100
                shadow-md rounded"
                  onChange={(e) => setIndex(e.target.value)}
                />
              </div>
              <button
                onClick={ getShipmentData}
                className="block w-full mt-3 py-3 px-4
                   font-medium text-sm text-center
                    text-white bg-indigo-400
                   hover:bg-indigo-500 active:bg-indigo-700 
                     rounded-lg ring-effect-2 ring-indigo-400 focus:ring-2"
              >
                {" "}
                Get Details
              </button>
            </form>
            {singleShipmentData == undefined ? (
              " "
            ) : (
              <div className="text-left ">
                <p>Sender: {singleShipmentData.sender.slice(0,25)}...</p>
                <p>Receiver: {singleShipmentData.receiver.slice(0, 25)}...</p>
                <p>
                  Pick Up Time: {convertTime(singleShipmentData.pickUpTime)}
                </p>
                <p>
                  Delivery Time {convertTime(singleShipmentData.deliveryTime)}
                </p>
                <p>Distance: {singleShipmentData.distance}</p>
                <p>Price: {singleShipmentData.price}</p>
                <p>Status: {singleShipmentData.status}</p>
                <p>
                  Paid{" "}
                  {singleShipmentData.isPaid ? "Completed" : "Not Completed "}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default GetShipment;
