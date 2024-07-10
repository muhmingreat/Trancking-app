import images from '../Images/index'
import Image from 'next/image'

const Services = ({
  setCompleteModal,
  setGetModal,
  setStartModal,
  setOpenProfile
}) => {

  const team = [
    {avatar: images.compShipment},
    {avatar: images.getShipment},
    {avatar: images.startShipment},
    {avatar: images.userProfile},
    {avatar: images.shipCount},
    {avatar: images.send},
  ]

  const openModalBox = (text) => {
    if(text === 1) {
      setCompleteModal(true);
    } else if(text === 2) {
       setGetModal(true);
     } else if(text === 3) {
       setStartModal(true);
    } else if (text === 4) {
        setOpenProfile(true);
     }
  };

  return <section className='my-0 pb-14'>
    <div className='max-w-screen-xl
    mx-auto px-4 mt:px-0'>
      <div className="mt-12">
        <ul className="grid gap-4 sm:grid-cols-2
        md:grid-cols-3">
          {team.map((item, i)=> (
           <li key={i} >
            <div onClick={() =>openModalBox(i + 1)}
                 className='w-full h-60 sm:h-52 md:h-56'>
                <Image src={item.avatar}
                alt={item} className='w-full
                object-cover object-center shadow-md rounded-xl'/>
              </div>
           </li> 
          ))}
        </ul>
      </div>
    </div>
  </section>;
};

export default Services;
