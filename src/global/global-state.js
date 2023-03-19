import { createContext } from "react";

export const DataContext = createContext();

export const initialState = {
    data: {
        
    },
    query: {

    },
    options: {

    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "set_data": {
            return {
                ...state,
                data: action.payload
            }
        }
        case "set_query": {
            return {
                ...state,
                query: action.payload,
                options: {
                    pagination:"true"
                }
            }
        }
        case "set_options": {
            return {
                ...state,
                options: action.payload
            }
        }

        default: {
            return
        }
    }
}