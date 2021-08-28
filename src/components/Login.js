import { useState } from "react";
import Logo from "../images/logo.png";
import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth)=> {
            history.push("/")
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // if user successfully created
            // console.log(auth);
            if (auth) {
                history.push("/")
            }
        }).catch(error => alert(error.message))
    }

    return (
            <div className=" flex-col max-w-[100vw] max-h-[100vh] m-3 md:p-5 ">

                <Link to="/">
                    <div className=" max-h-15 flex justify-center ">
                        <img 
                            src={Logo}
                            alt="" 
                            className=" max-w-[130px] rounded-lg "
                        />
                    </div>
                </Link>

                <div className=" flex justify-center ">
                    <div className=" flex-col max-w-[100vw] md:max-w-[400px] p-3 border-[2px] border-gray-100 m-3 rounded-lg ">
                        
                        <h1>Sign-In</h1>

                        <form className=" my-2 ">
                            <label htmlFor="email" className=" w-full p-1 ">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className=" w-full p-1 border-1 rounded-md " 
                                value={email}
                                onChange = {e => setEmail(e.target.value)}
                            />

                            <label htmlFor="password" className=" w-full p-1 ">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className=" w-full p-1 border-1 rounded-md "
                                value= {password}
                                onChange= {e => setPassword(e.target.value)}
                            />
                        </form>

                        <button 
                            className=" rounded-md bg-[#ff4d00] w-full p-1 my-2 border-2 border-gray-400 "
                            type="submit"
                            onClick= {signIn}
                        >
                            Continue
                        </button>
                        
                        <div className=" flex justify-center ">
                            <p className=" text-xs font-extralight py-2 "> 
                                If you are new to Spares Nation, Enter Email and Password and click the button below. 
                                We will never share your email with anyone else.
                            </p>
                        </div>

                    </div>
                </div>

                <div className=" flex justify-center ">
                    <div className=" flex-col max-w-[100vw] md:max-w-[400px] p-3 m-3 ">
                        
                        <div className=" flex justify-center "> 
                            <p>New to Spares Nation?</p>
                        </div>
                        
                        <button 
                            className=" text-sm rounded-md bg-gray-100 w-full p-1 my-1 border-2 border-gray-400 "
                            onClick= {register}
                        >
                            Create your Spares Nation Account
                        </button>
                    </div>
                </div>
            </div>

    )
}

export default Login
