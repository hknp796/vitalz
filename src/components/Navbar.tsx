
import { FaHome, FaUserPlus } from 'react-icons/fa'

function Navbar() {
  return (
    <div>
      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-[#1377FF]  rounded-[10px] bottom-4 left-1/2 ">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <button type="button" className="inline-flex flex-col items-center text-black justify-center px-5 rounded-l-full hover:text-white">
           <FaHome />
            <span className="sr-only">Home</span>
          </button>


          <button type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-r-full text-black hover:text-white">
            <FaUserPlus/>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Navbar