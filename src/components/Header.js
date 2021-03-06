import Logo from "../images/logo.png";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useSelector } from "react-redux";
import { auth } from "../firebase";

function Header() {

    const cart = useSelector((state) => state);

    const user = cart.cart.user?.email

    const items = cart.cart.cart.length;

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className=" z-50 sticky top-0 w-[100vw] ">
            <div className=" px-4 flex justify-between items-center bg-black text-[#888888] text-xs p-2 sticky z-20 top-0 ">
                <Link to="/">
                    <img src={Logo} alt="" className=" h-9 rounded-md " />
                </Link>

                <div className=" hidden lg:flex  px-4 items-center ">
                    <span>
                        <LocationOnIcon/>
                    </span>
                    <div className=" flex flex-col  ">
                        <span  className=" topText ">
                            We also deliver to
                        </span>
                        <span className=" bottomText ">
                            Zimbabwe
                        </span>
                    </div>
                </div>

                <div className=" hidden border-0 md:flex  flex-1 h-6 bg-white rounded-md mx-3 ">
                    <input type="text" className=" rounded-md flex-1 " />
                    <SearchIcon className=" bg-[#ff4d00] text-white rounded-r-md  " />
                </div>

                <div className=" flex  ">

                    <div className=" flex flex-col items-center ">
                        {/* <span className=" topText "> */}
                        <span className={` topText ${ user ? "text-[#ff4d00]" : "text-[#888888]" }`} >
                            {
                                user ? `Hello ${user}` : `Hello Guest`
                            }
                        </span>
                        <Link to={!user && "/login"} className=" text-[#888888] bottomText no-underline hover:text-[#ff4d00] ">         
                            <span onClick={handleAuthentication} className=" ">
                                {
                                    user ? "Sign Out" : "Sign In"
                                }
                            </span>
                        </Link>
                    </div>
                    
                    <Link to="/orders" className=" text-[#888888] bottomText no-underline hover:text-[#ff4d00] ">
                        <div className=" flex flex-col items-center px-4 ">
                            <span className=" topText ">
                                Track Your
                            </span>
                            <span className=" bottomText ">
                                Orders
                            </span>
                        </div>
                    </Link>
                    

                    
                       
                        <Link to="/checkout" className={`no-underline  ${items > 0 ? "text-[#ff4d00] hover:text-[#ff4d00]" : "text-[#888888] hover:text-[#888888]" }` }>
                            <div className=" justify-center ">
                                <ShoppingCartIcon  />
                                <span>{items}</span>
                            </div>
                        </Link>
                        
                   

                </div>
            </div>

            <div className=" bg-black pt-1 pb-2 md:hidden ">
                <div className="  border-0  flex h-6 bg-white rounded-md mx-3 ">
                    <input type="text" className=" rounded-md flex flex-1 " />
                    <SearchIcon className=" bg-[#ff4d00] text-white rounded-r-md  " />
                </div>
            </div>
            

        </div>
        
    )
}

export default Header
