import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import Logo from "../images/logo.png"

function Footer() {
    return (
        <div className=" w-[100vw] flex ">
            <div className=" w-[100vw] mt-4 py-4 border-t-2 text-white md:flex md:justify-between "> 
                    <div className=" ml-[5%] flex-col justify-between "> 
                        <h1 className=" text-[25px] md:text-[40px] ">CONTACT US</h1>
                        <div className=" flex flex-col ">
                            <div><span><MailOutlineIcon/></span>  <span>enquiries@sparesnation.co.za</span></div>
                            <div><WhatsAppIcon /> <span> +27 (61) 123 4567</span></div>
                            <div><PhoneIcon /> <span> +27 (61) 123 4567</span></div>
                        </div>
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

                <div className=" mr-[5%] flex-col hidden md:flex ">

                    <img src={Logo} alt="" className=" max-w-[400px] rounded-lg " />

                </div>

            </div>
        </div>
        
    )
}

export default Footer
