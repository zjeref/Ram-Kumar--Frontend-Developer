import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Loading from './Loading'

const Rocket = () => {
    const params = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [rocketData, setRocketData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.spacexdata.com/v4/ships/${params.id}`)
            .then(res => {
                setRocketData(res.data)
                setIsLoading(false);
            })
            .catch(err => console.log(err))

    }, [params])

    console.log(rocketData)
    return (
        <div className="w-full flex flex-col items-center my-4">
            {isLoading ?
                <Loading /> :
                <div className="max-w-5xl flex justify-center">
                    <div>
                        <img src={rocketData.image} alt={rocketData.name} />
                    </div>
                </div>
            }
        </div>
    )
}

export default Rocket
