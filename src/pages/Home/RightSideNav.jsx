import { FaGoogle, FaGithub,FaFacebook,FaTwitter, FaInstagram  } from 'react-icons/fa';
import pic1 from "../../assets/qZone1.png"
import pic2 from "../../assets/qZone2.png"
import pic3 from "../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div className='p-2'>
            <div>
                <p className="text-xl font-semibold">Login With</p>
                <button className="btn border border-black w-full my-3">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn border border-black w-full mb-3">
                    <FaGithub />
                    Github
                </button>
            </div>


            <div className='mt-8'>
                <p className="text-xl font-semibold">Find Us On</p>
              <div className='mt-5'>
                  <a className='flex items-center text-lg border rounded-t-lg border-black p-3' href="">
                    <FaFacebook className='mr-5'></FaFacebook>
                    Facebook
                </a>
                <a className='flex items-center text-lg border-x border-black p-3' href="">
                    <FaTwitter className='mr-5'></FaTwitter>
                    Twitter
                </a>
                <a className='flex items-center text-lg border rounded-b-lg border-black p-3' href="">
                    <FaInstagram className='mr-5'></FaInstagram>
                    Instragram
                </a>
              </div>
            </div>

            <div className='mt-8'>
                <p className='text-xl font-semibold'>Q-Zone</p>
                <div>
                    <img src={pic1} alt="" />
                    <img src={pic2} alt="" />
                    <img src={pic3} alt="" />

                </div>
            </div>
        </div>
    );
};

export default RightSideNav;