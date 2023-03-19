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
    return (
        <div className="w-full flex flex-col items-center py-4 bg-secondary px-4">
            {isLoading ?
                <Loading /> :
                <div className="max-w-5xl  text-white">
                    <div className="text-center text-3xl my-2">
                        <h1>{rocketData.name}</h1>
                    </div>
                    <div className="flex justify-center">
                        <img src={rocketData.image} alt={rocketData.name} />
                    </div>
                    <div className="text-xl my-4">
                        <div className="space-y-2">
                            <p><span className="font-semibold">Name: </span><span>{rocketData.name}</span> </p>
                            <p><span className="font-semibold">Type: </span><span>{rocketData.type}</span></p>
                            <p><span className="font-semibold">Roles: </span><span>{rocketData.roles.map(role => {
                                return <span key={role}>{role} </span>
                            })}</span></p>
                            <p><span className="font-semibold">Active: </span> <span>{rocketData.active ? "True" : "False"}</span></p>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default Rocket
