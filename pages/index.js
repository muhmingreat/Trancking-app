import React,{useState, useEffect, useContext} from "react";
import {Table, Form,
  Services, Profile,
  CompleteShipment,
  GetShipment,
  StartShipment,

} from '../Components/index'
import { TrackingContext } from "../Context/Tracking";

const index = () => {

  const {
    currentUser,
    createShipment,
    getAllShipment,
    getshipment,
    completeShipment,
    startShipment,
    getShipmentCount,
  } = useContext(TrackingContext);

//  state variable
   const [createShipmentModal,setCreateShipmentModal] = useState(false)
   const [openProfile, setOpenProfile] = useState(false)
   const [startModal, setStartModal] = useState(false)
   const [completeModal, setCompleteModal] = useState(false)
   const [getModal, setGetModal] = useState(false) 
 
    const [allShipmentsdata, setAllShipmentsdata] = useState()

    useEffect(()=> {
      const getCampaignData = getAllShipment()
      return async () => {
        const allData = await getCampaignData;
        setAllShipmentsdata(allData)
      }
    },[])
   return (
     <div>
       <Services
         setOPenProfile={setOpenProfile}
         setCompleteModal={setCompleteModal}
         setGetModal={setGetModal}
         setStartModal={setStartModal}
       />

       <Table
         setCreateShipmentModal={setCreateShipmentModal}
         allShipmentsdata={allShipmentsdata}
       />

       <Form
         createShipmentModal={createShipmentModal}
         createShipment={createShipment}
         setCreateShipmentModal={setCreateShipmentModal}
       />

       <GetShipment
         getModal={getModal}
         setGetModal={setGetModal}
         getshipment={getshipment}
       />

       <Profile
         openProfile={openProfile}
         setOpenProfile={setOpenProfile}
         currentUser={currentUser}
         getShipmentCount={getShipmentCount}
       />

       <CompleteShipment
         completeModal={completeModal}
         setCompleteModal={setCompleteModal}
         completeShipment={completeShipment}
       />
       <StartShipment
         startModal={startModal}
         setStartModal={setStartModal}
         startShipment={startShipment}
       />
     </div>
   );
};

export default index;
