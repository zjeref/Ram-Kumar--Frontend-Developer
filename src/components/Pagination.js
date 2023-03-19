import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { DataContext } from '../global/global-state'

const Pagination = () => {
    const { data, dispatch } = useContext(DataContext)
    const [currentData, setCurrentData] = useState(null)
    useEffect(()=> {
        setCurrentData(data);
    }, [data])

    const handlePage = (i) => {
        const value = i * 10;
        const payload = {
            offset: value,
            pagination: true
        }
        dispatch({ type: "set_options", payload: payload })
    }


    const handleArrows = (action) => {
 
        switch (action) {
            case "back": {
                
                let payload = {
                    offset: currentData.options.offset,
                    pagination: true
                }

                if (currentData.options.value >= 0) {
                    payload = {
                        offset: currentData.options.offset - 10,
                        pagination: true
                    }
                }
                return dispatch({type:"set_options", payload: payload})

            }
            case "forward": {
                let payload = {
                    offset: currentData.options.offset,
                    pagination: true
                }
                if (currentData.options.offset <= currentData.data.totalPages - 1 * 10) {
                    payload = {
                        offset: currentData.options.offset + 10,
                        pagination: true
                    }
                }
                return dispatch({type:"set_options", payload: payload})
            }
        }
    }

    return (
        <div className="flex items-center text-xl font-semibold my-4 border-t-4 border-b-4">
            <div className="px-3 py-2 mx-1 hover:bg-slate-200 cursor-pointer" onClick={() => handleArrows("back")}>
                <AiOutlineLeft />
            </div>
            {[...Array(data.data.totalPages)].map((_, i) => (
                <div className="px-4 py-1 mx-1 hover:bg-slate-200 cursor-pointer" key={i} onClick={() => handlePage(i)}>
                    {i + 1}
                </div>
            ))}
            <div className="px-3 py-2 mx-1 hover:bg-slate-200 cursor-pointer" onClick={() => handleArrows("forward")}>
                <AiOutlineRight />
            </div>
        </div>
    )
}

export default Pagination
