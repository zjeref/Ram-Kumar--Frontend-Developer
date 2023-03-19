import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RocketCard = ({ data }) => {
    const [rocketData] = useState(data);
    const navigate = useNavigate();
    return (
        <>
        {rocketData.image?
            <div className='max-w-xl max-h-full relative cursor-pointer hover:scale-105 delay-150 transition-all ease-in-out' onClick={()=> navigate(`/${rocketData.id}`)}>
                <div>
                    <img src={rocketData.image} alt="" className='' />
                </div>
                <div className='w-full text-center bg-black text-white -mt-10 absolute' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <p className='text-xl py-2'>{rocketData.name}</p>
                </div>
            </div>:
            ""
        }
        </>
    )
}

export default RocketCard
