import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone1 from '../../../assets/qZone1.png'
import Qzone2 from '../../../assets/qZone2.png'
import Qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3'>
                <h2 className="text-2xl">login With</h2>
                <button className="btn btn-outline w-full ">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <div>
                    <button className="btn btn-outline w-full">
                        <FaGithub></FaGithub>
                        Githhub
                    </button>
                </div>
            </div>
            <div className='p-4 space-y-3'>
                <h2 className="text-2xl">Find us on</h2>
                <a className='p-2 flex text-lg items-center border rounded-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <div>
                    <a className='p-2 flex text-lg items-center border rounded-lg' href="">
                        <FaTwitter className='mr-3'></FaTwitter>
                        Twitter
                    </a>
                </div>
                <div>
                    <a className='p-2 flex text-lg items-center border rounded-lg' href="">
                        <FaInstagram className='mr-3'></FaInstagram>
                        Instagram
                    </a>
                </div>
            </div>
            {/* Q-Zone */}
            <div className='p-4 space-y-3'>
                <h2 className="text-2xl">Q-Zone</h2>
               <img src={Qzone1} alt="" />
               <img src={Qzone2} alt="" />
               <img src={Qzone3} alt="" />
            </div>

        </div>

    );
};

export default RightSideNav;