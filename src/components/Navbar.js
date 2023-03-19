import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/rocket.png';

const Navbar = () => {
    

    return (
        <div className="w-full bg-black flex justify-center">
            <div className="w-full flex justify-between items-center max-w-5xl px-4 py-2">
                <div>
                    <Link to='/'>
                        <img src={logo} alt="" className='w-12 h-12 ' />
                    </Link>
                </div>
                <div className=" text-semiwhite flex space-x-4 text-xl">
                    <div className="font-semibold cursor-pointer hover:underline">
                        <Link to={'/'}>
                            <p>Home</p>
                        </Link>
                    </div>
                    <div className="font-semibold cursor-pointer hover:underline">
                        <p>Search</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
