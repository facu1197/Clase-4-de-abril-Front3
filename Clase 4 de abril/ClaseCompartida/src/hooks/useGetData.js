import React,{useEffect,useState} from "react";
import axios from 'axios';

export const useGetData = (endpoint) => {
    const [values, setValues] = useState(null);

    useEffect(()=>{
        axios.get(endpoint)
            .then(({data}) => {
            console.log(data);
            setValues(data);
        })
        .catch((error)=>{
            console.error(error);
        })
    },[]);

    return {
        values
    }

}