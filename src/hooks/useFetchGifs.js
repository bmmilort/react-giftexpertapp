import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs";


export const useFecthGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
        
    });

    useEffect ( ()=> {

        getGifs(category)
        .then (imgs => {
                                    
                setState({
                data: imgs,
                loading: false
            });  
        })
            
    }, [category])



    return state;  //state es { data: [], loading: true};
}