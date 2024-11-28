'use client'

import axios from "axios";
import { useEffect, useState, useCallback } from "react";
const Page = () => {
    const [users, setUsers] = useState([])
    const getAllUsersHandle =  useCallback(async() =>{
        try {
            const {data:users} = await axios.get('/api/users/user-all', {
                headers: {  
                  'Content-Type': 'application/json',
                  Accept: '*/*', 
                }
            })
            setUsers(users)
        } catch (error) {
            console.log("🚀 ~ getAllUsersHandle ~ error:", error)
            setUsers([])
        }
    },[])

    useEffect(() => {
        getAllUsersHandle()
    }, [getAllUsersHandle])
    
    
  return (
    <div className="flex justify-center items-center">
        {
            users.map( (user, index) =>(
                <div key={index} className="bg-sky-600 p-4 text-white rounded-sm flex flex-col justify-center items-center">
                    <p className="text-lg font-semibold mb-2">{user.nombre} {user.apellido}</p>
                    <p className="mb-2">{user.email}</p>
                    <p>{user.celular}</p>
                </div>
            ) )
        }
    </div>
  )
}

export default Page