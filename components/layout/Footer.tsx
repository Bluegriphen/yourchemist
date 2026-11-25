import Link from "next/link"
import ChevronRight from "../icons/ChevronRight"

const Footer = () => {
  return (
    <footer className="bg-main flex w-full justify-center items-center ">
      <div className="container-page px-8.5 py-15  flex gap-2.5">
        <div className="flex flex-col gap-3">
          {/* top  */}
          <div className="flex gap-16">
            {/* left  */}
            <div className="flex  gap-13">
              <div className="flex flex-col gap-5">
                <h2 className="pb-[0.88px] text-concrete text-[20px] font-normal ">Legal & Safety</h2>
               <ul className="flex flex-col gap-3">
                <li>
                  <Link href="#" className="flex items-center">
                    <span className="pr-1.25"><ChevronRight/></span>
                    <p className="text-concrete font-[400]text-[14px] pl-1.25">Terms & Conditions</p>
                  </Link>
                </li>


                 <li>
                  <Link href="#" className="flex items-center">
                    <span className="pr-1.25"><ChevronRight/></span>
                    <p className="text-concrete font-[400]text-[14px] pl-1.25">Privacy Policy</p>
                  </Link>
                </li>


                 <li>
                  <Link href="#" className="flex items-center">
                    <span className="pr-1.25"><ChevronRight/></span>
                    <p className="text-concrete font-[400]text-[14px] pl-1.25">Cokkie Policy</p>
                  </Link>
                </li>
               </ul>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            {/* right  */}
            <div className=" flex "></div>
          </div>
          {/* bottom  */}
          <div></div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer