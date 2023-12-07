import{IoLocationSharp} from "react-icons/io5"
import { BsBagPlus, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdManageHistory } from "react-icons/md";
import { Link } from "react-router-dom";
function Footer(){
    return(
    <div className="bg-blue-600">
        <footer className="max-w-6xl mx-auto footer grid-cols-1 md:grid-cols-3 p-10 text-white">
  <nav>
    <div className="h-full flex items-center">
    <div className="flex items-center gap-1">
   {/* */}
   <IoLocationSharp size={25}/>
   <p>IIUC,Kumira,Chattogram</p>
   </div>
   </div>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <Link to={'/contact-us'}><span className="flex items-center gap-1"><IoLocationSharp size={15}/>Contact</span></Link>
    <Link to={'/manage-products'}><span className="flex items-center gap-1"><MdManageHistory size={15}/>Manage Products</span> </Link>
    <Link to={'/add-product'}><span className="flex items-center gap-1"><BsBagPlus size={15}/>Add Product</span> </Link>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <p>Welcome to Car Hub Rental - your go-to destination for easy and efficient vehicle rentals online. Explore a fleet of quality cars, streamlined booking, and personalized service for a smooth journey.</p>
    <div className="flex justify-between">
    <BsFacebook size={15} style={{marginRight:4}}/>
    <BsTwitter size={15} style={{marginRight:4}}/>
    <BsInstagram size={15} style={{marginRight:4}}/>
    </div>
  </nav>
</footer>
    </div>
    )
}
export default Footer;