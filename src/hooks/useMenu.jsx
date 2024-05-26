import { useQuery } from "@tanstack/react-query";

import { useEffect, useState} from "react";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {

    // const [menu, setMenu] = useState([])
    const [loading ] = useState(true)
    const axiosPublic = useAxiosPublic()

  
    useEffect(()=> {

        // axios.get('http://localhost:5000/menu')
        // .then(data => {
        
        //     setMenu(data.data)

        //     setLoading(false)

        // })

      


    },[])

    const {data : menu = [], refetch} = useQuery({
        queryKey : ['menu'],
        queryFn : async () =>{

            const res = await axiosPublic.get('/menu')

            return res.data

            

        }
    })

    


    return [menu, loading, refetch]
};

export default useMenu;