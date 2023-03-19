import React, { useEffect, useState, useContext} from 'react'
import { DataContext } from '../global/global-state'


import axios from 'axios'

import RocketCard from './RocketCard'
import Loading from './Loading'
import Pagination from './Pagination'
import Search from './Search'

const RocketList = () => {
    const [rocketData, setRocketData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const { data, dispatch } = useContext(DataContext)

    useEffect(() => {
        setRocketData(null)
        setLoading(true)
        axios.post(`https://api.spacexdata.com/v4/ships/query`, { options: data.options })
            .then(res => {
                dispatch({ type: "set_data", payload: res.data })
                setRocketData(res.data.docs)
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [data.options])

    return (
        <div className="w-full flex flex-col items-center ">
            <Search />

            {!isLoading && <Pagination />}
            {isLoading ? <Loading /> :
                <div className='max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4'>
                    {
                        rocketData.map((data) => {
                            return <RocketCard key={data.id} data={data} />
                        })
                    }

                </div>
            }
            {!isLoading && <Pagination />}
        </div>
    )
}

export default RocketList
