import Logo from "../images/logo.png";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className=" px-4 flex items-center bg-black text-[#757473] text-xs p-2 sticky z-20 top-0 ">
            
            <img src={Logo} alt="" className=" h-9 rounded-md " />

            <div className=" hidden lg:flex  px-4 ">
                <span>
                    #
                </span>
                <div className=" flex flex-col ">
                    <span>
                        We also deliver to
                    </span>
                    <span>
                        Zimbabwe
                    </span>
                </div>
            </div>

            <div className=" flex flex-1 h-6 bg-white rounded-md mx-3 ">
                <input type="text" className=" rounded-md flex-1 " />
                <SearchIcon className=" bg-[#c4c4c4] text-black rounded-r-md  " />
            </div>

            <div className=" flex ">

                <div className=" flex flex-col ">
                    <span className="">
                        Hello Guest
                    </span>
                    <span>
                        Sign In
                    </span>
                </div>

                <div className=" flex flex-col px-4 ">
                    <span>
                        Track Your
                    </span>
                    <span>
                        Orders
                    </span>
                </div>

                <div>
                    <ShoppingCartIcon className=" " />
                    <span>0</span>
                </div>

            </div>
        </div>
    )
}

export default Header
