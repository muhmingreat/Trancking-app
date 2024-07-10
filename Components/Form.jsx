import {useState} from "react";
import Str1 from "./SVG/Str1";

const Form = ({createShipmentModal,setCreateShipmentModal, createShipment}) => {
  const[shipment,setShipment] = useState({
    receiver:'',
    pickUpTime:'',
    distance:'',
    price:''
  })
  
  const createItem = async () => {
    try{
      await createShipment(shipment)

      }catch(error){
        console.log('Error creating shipment')
    }
  }  
  
  return createShipmentModal ?  (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className='fixed inset-0 w-full
      h-full bg-black opacity-40 '
      onClick={()=> setCreateShipmentModal(false)}></div>
   <div className="flex items-center min-h-screen px-4 py-8">
    <div className="relative w-full max-w-lg p-4 mx-auto
        bg-white rounded-md
        shadow:lg">
          <div className="flex justify-end">
            <button className="p-2 txt-gray-400 rounded-md hover:bg-gray-100"
            onClick={()=> setCreateShipmentModal(false)}>
              <Str1/>
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3
          text-center">
            <h4 className="text-lg font-medium text-gray-800">
              Track Product, create shipment
            </h4>
            <p className='tex-[23px] text-gray-600'>
              best plantform
            </p>
            <form onSubmit={(e)=> e.preventDefault()}>
              <div className="relative mt-3">
                <input type="text"
                placeholder='receiver'
                className="w-full pl-5 my-2 text-gray-500 bg-transparent
                outline-none focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setShipment({
                  ...shipment,
                  receiver: e.target.value
                })} />
              </div>

              <div className="relative mt-3">
                <input type="date"
                placeholder='Pick Up Time'
                className="w-full pl-5 my-2 text-gray-500 bg-transparent
                outline-none focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setShipment({
                  ...shipment,
                  pickUpTime: e.target.value
                })} />
              </div>

              <div className="relative mt-3">
                <input type="text"
                placeholder='Distance'
                className="w-full pl-5 my-2 text-gray-500 bg-transparent
                outline-none focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setShipment({
                  ...shipment,
                  distance: e.target.value
                })} />
              </div>

              <div className="relative mt-3">
                <input type="text"
                placeholder='Price'
                className="w-full pl-5 my-2 text-gray-500 bg-transparent
                outline-none focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e)=> setShipment({
                  ...shipment,
                  price: e.target.value
                })} />
              </div>
              <button className="flex items-center
                justify-center gap-x-1 py-2 px-4
                text-white font-medium bg-blue-800
                hover:bg-gray-700 active:bg-blue-900
                rounded-full md:inline-flex" onClick={createItem}>Create Shipment</button>
              </form> 
          </div>
        </div>
   </div>
    </div>

  ):(
  ""  
  )
};

export default Form;
