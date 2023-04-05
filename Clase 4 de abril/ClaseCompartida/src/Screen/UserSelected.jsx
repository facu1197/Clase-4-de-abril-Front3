import React,{useEffect,useState} from "react";
import { useParams,Link} from "react-router-dom";
import { endpoint } from "./Home";
import axios from 'axios';
import { useGetData } from "../hooks/UseGetData";

const UserSelected = () => {
    const {login} = useParams();
    const {values} = useGetData(`${endpoint}/${login}`)
    
    return (
        <div>UserSelected
        <div>
            <p>{values?.login}</p>
            <p>{values?.followers}</p>
            <p>{values?.following}</p>
            <img src={values?.avatar_url}/>
            <Link to="/home">Volver</Link>
        </div>
        </div>
    )
};

export default UserSelected;