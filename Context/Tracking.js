import React,{ useState,useEffect} from 'react'
import Web3Modal from 'web3modal'
import {ethers } from 'ethers'

import tracking from '../Context/Tracking.json'
const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const abi = tracking.abi;

// FETCHING SMART CONTRACT

const fetchContract = (signerOrProvider) => new ethers.Contract(address, abi, signerOrProvider);
 
export  const TrackingContext = React.createContext() ;

export const TrackingProvider = ({children}) => {
    // state variable
    const DAppName = 'Product Tracking app'

    const [currentUser, setCurrentUser] = useState('');
    
    const createShipment = async (items) => {
        console.log(items)

        const {receiver,pickUpTime, distance, price} = items

        try{
        const web3Modal = new Web3Modal() 
        const connection = await web3Modal.connect()
        const provider =  new ethers.providers.Web3Provider(connection)
        const signer  = provider.getSigner();
        const contract = fetchContract(signer)
    
        const createItem = await contract.createShipment(
            receiver,
            new Date(pickUpTime).getTime(),
            distance,
            ethers.utils.parseUnits(price, 18),
            {
                value: ethers.utils.parseUnits(price, 18),
            } 
        )
            await createItem.wait()
            console.log(createItem)
      }catch(error) {
        console.log('Something went Wrong ', error)
        }
    }

    const getAllShipment = async  () => {
        try{
           const provider = new ethers.providers.JsonRpcProvider()
           const contract =  fetchContract (provider)
           const shipments = await contract.getAllTransactions();

           const allShipment = shipments.map((shipment) => ({
            sender: shipment.sender,
            receiver: shipment.receiver,
            pickUpTime: shipment.pickUpTime.toNumber(),
            deliveryTime: shipment.deliveryTime.toNumber(),
            distance: shipment.distance.toNumber(),
            price: ethers.utils.formatEther(shipment.price.toString()),
            status: shipment.status,
            isPaid: shipment.isPaid,
                }))
           return allShipment
        }catch(error) {
            console.log('Can not get Shipment',error)
        }
    }
        const getShipmentCount = async () => {
            try{
                if(!window.ethereum) return 'Install Metamask'
            
                const accounts = await window.ethereum.request({
                    method:'eth_accounts',
                })

                const provider = new ethers.providers.JsonRpcProvider();
                const contract =  fetchContract(provider);
                const shipmentCount = await contract.getShipmentCount(
                  accounts[0]
                );
                   
                return shipmentCount.toNumber();
            }catch(error){
                console.log('error getting shipment ')
            }
        }

        const completeShipment = async (completeShip) => {
           console.log(completeShip)

           const {receiver, index} = completeShip 
           try{
                if(!window.ethereum) return 'install metamask'

                const accounts = await window.ethereum.request({
                   method:'eth_accounts' 
                })
                const web3Modal = new Web3Modal()
                const  connection = await web3Modal.connect()
                const provider = new ethers.providers.Web3Provider(connection)
                const signer = provider.getSigner()
                const contract = fetchContract(signer)

                const transaction = await contract.completeShipment(
                    accounts[0],
                    receiver,
                    index,
                    {
                        gasLimit:300000,
                    }

                )
                transaction.wait()
                console.log(transaction)
           }catch(error) {
                console.log('wrong Complete shipment', error);
           } 
        };
    

    const getshipment = async (index) => {
        console.log(index * 1)
        try{
            if(!window.ethereum)  return 'Install Metamask'
            const accounts = await window.ethereum.request({
                method: 'eth_accounts',
            })

            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider)
            const shipment = await contract.getShipment(accounts[0], index * 1);

            const SingleShipment = {
              sender: shipment[0],
              receiver: shipment[1],
              pickUpTime: shipment[2].toNumber(),
              deliveryTime: shipment[3].toNumber(),
              distance: shipment[4].toNumber(),
              price: ethers.utils.formatEther(shipment[5].toString()),
              status: shipment[6],
              isPaid: shipment[7],
            };
            return SingleShipment
        }catch(error){
            console.log('Sorry no Shipment');
        }
    };

    const startShipment = async (getProduct) => {
        const {receiver, index} = getProduct
        // console.log(index)
        try{
            if(!window.ethereum) return 'Install Metamask'
            const accounts = await window.ethereum.request({
                method:'eth_accounts',

            })
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner()
            const contract = fetchContract(signer);
            const shipment = contract.startShipment(
                accounts[0],
                receiver,
                index * 1

            )
            shipment.wait()
            console.log(shipment);
        }catch(error){
            console.log('sorry no shipment', error);
        }
    };

    // CHECK WALLET CONNECTED

    const checkIfWallectConnected =  async () => {
        try{
           if(!window.ethereum) return 'install Metamask';
           
           const accounts = await window.ethereum.request({
            method:'eth_accounts',
           })

           if(accounts.length){
            setCurrentUser (accounts[0])
           }else{
            return 'No account'
           }
        }catch(error){
        };

    };
    //  CONNECT WALLET FUNCTION

    const connectWallet = async () => {
        try{
            if(!window.ethereum) return 'intall Metamask'
            
            const accounts = await window.ethereum.request({
                method:'eth_requestAccounts',
            });

            setCurrentUser(accounts[0])
        }catch(error){
        return  'Something went  wrong'
        };
    };

    useEffect(()=> {
        checkIfWallectConnected();
    },[]);

    return (
      <TrackingContext.Provider
        value={{
          createShipment,
          getAllShipment,
          startShipment,
          getShipmentCount,
          getshipment,
          completeShipment,
          connectWallet,
          DAppName,
          currentUser,
        }}
      >
        {children}
      </TrackingContext.Provider>
    );
};