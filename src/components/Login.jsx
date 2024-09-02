import React,{useState,useEffect} from 'react'
import MartBg from "../assets/mart-bg.jpeg"
import blackShade from "../assets/black-shade.png"
import Footer from './Footer'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { toast } from "react-toastify";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [showPassword, setShowPassword] = useState(false)

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => unsubscribe();
      }, []);

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log('Admin Logged Successfully');
          window.location.href="/"
          toast.success("Admin Logged Successfully", {
            position: "top-center"
          });
        } catch (error) {
          console.error("Error logging in:", error);
          toast.error("Incorrect Username or Password", {
            position: "top-center"
          });
        }
      };

    const showHidePassword = () => {
        setShowPassword(prevPassword => !prevPassword )
    }

  return (
    <div>
      <section>
        <div className='flex justify-center items-center relative pt-28'>
            <div className=' absolute top-0 left-0 right-0 bottom-0 -z-20'>
                <img src={MartBg} className=' w-full h-full object-cover md:opacity-80 md:blur-[2px] blur-[3px]' alt="" />
            </div>
            <div className=' absolute top-0 left-0 right-0 bottom-0 -z-10'>
                <img src={blackShade} className=' w-full h-full object-cover' alt="" />
            </div>
            <div className='md:flex justify-center items-center w-full px-6 lg:max-w-[1200px] lg:mx-auto py-10 md:gap-10'>
                <div className='w-full mb-10'>
                    <div className='text-center mb-5 text-[42px] titleText2 leading-tight text-[#ffffff]'>Login</div>
                    <form action="" className=' flex flex-col justify-center items-center gap-5 w-full' autocomplete="off" onSubmit={handleSubmit}>
                        <input type="text" placeholder='Username' required
                        onChange={(e)=>setEmail(e.target.value)}
                        className=' w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00] lg:w-[600px] lg:mx-auto' autoComplete='off'/>
                        <div className='w-full relative flex flex-col justify-center items-center'>
                            <input 
                            type={showPassword ? "text" : "password"} placeholder='Password' className='w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00] lg:mx-auto lg:w-[600px]' autoComplete='off'
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                            <span className='absolute right-5 cursor-pointer' onClick={showHidePassword}>
                                {showPassword ? <FaEye/> : <FaEyeSlash/>}
                            </span>
                        </div>

                        <div>
                            <button className='px-8 py-2 rounded-3xl bg-[#fff] font-bold text-[#FF6C00] shadow-lg' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
      </section>

      <section className='bg-[#FF6C00]'>
        <Footer/>
      </section>

    </div>
  )
}

export default Login
