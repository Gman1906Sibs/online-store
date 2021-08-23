import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import Logo from "../images/logo.png"

function Footer() {
    return (
        <div className=" mt-4 py-4 border-t-2 text-white md:flex "> 
            <div className=" ml-[5%] flex justify-between ">
                <div>
                    <h1 className=" text-[25px] md:text-[40px] ">CONTACT US</h1>
                    <div className=" flex flex-col ">
                        <div><span><MailOutlineIcon/></span>  <span>enquiries@sparesnation.co.za</span></div>
                        <div><WhatsAppIcon /> <span> +27 (61) 123 4567</span></div>
                        <div><PhoneIcon /> <span> +27 (61) 123 4567</span></div>
                    </div>
                </div>

                <img src={Logo} className=" rounded-xl max-w-[100px] object-contain mr-[5%] md:hidden " alt="" />
                
            </div>

            <div className=" ml-[5%] hidden lg:flex ">
                <form action="">
                    <label htmlFor="Emaii">Email Address</label> <br/>
                    <input type="email" id="Email" placeholder="Enter email" className=" py-1 rounded-lg px-3 w-full " />
                    <p className=" text-xs font-extralight py-2 ">We will never share your email with anyone else</p>
                    <label htmlFor="Message">Message</label><br/>
                    <textarea name="" id="Message" cols="30" rows="10" className=" py-1 px-3 rounded-lg resize w-full " rows="4" ></textarea><br/>
                    <button className=" py-1 px-3 rounded-lg bg-[#ff4d00] " >Send</button>
                        
                </form>
            </div>

            <div className=" ml-[5%] flex-col hidden md:flex ">

                <img src={Logo} alt="" className=" max-w-[400px] rounded-lg " />

            </div>

        </div>
    )
}

export default Footer
