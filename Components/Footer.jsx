import {Fot1, Fot2} from '../Components/index'

const Footer = () => {
  const footerNavs = [
    {href:'#', name:"Terms"},
    {href:'#', name:"Licensse"},
    {href:'#', name:"Privacy"},
    {href:'#', name:"About Us"},
  ]
  const date = new Date().getFullYear()
  return <div className="mt-10 ">
    <div className='max-w-screen-xl mx-auto
    px-4 text-gray-600 md:px-0'>
      <div className=' flex justify-between sm:flex'>
        <div className='space-y-0'>
          <img src='https://www.floatui.com/logo.svg'
          className='w-32 text-center'/>
          <p className='max-w-md'>Hello this is the best
          platform ever we promise you we not regret 
          using this platform</p>
          <ul className='flex flex-wrap items-center
          gap-4 text-sm sm:text-base'>
            {footerNavs.map((item, i) => (
             <li key={i +1 }>
              <a href={item.href}>
                {item.name}
              </a>

             </li> 
            ))}
          </ul>
        </div>
        <div className='mt-8'>
          <p className='text-gray-700 font-semibold'>
            Get the App
          </p>
          <div className='flex items-center
          gap-3 mt-3 sm:block'>
            <a href='#'><Fot1/></a>
            <a href='#'><Fot2/></a>
            
          </div>
        </div>
      </div>
            <div className='mt-10 py-10 border-t'>
            <p className='text-center'> c{date} Muhmin Soliu. All Right reserve</p>

            </div>
    </div>
  </div>
};

export default Footer;
