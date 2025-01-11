import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import { useContext, useEffect } from 'react' 
import { useNavigate } from 'react-router-dom'

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate() 
    useEffect(()=>{
        axiosSecure.interceptors.response.use(
            (response) => {
                return response
            },
            async(error) => {
                console.log(error.response);
                if(error.response.status === 401 || error.response.status === 403){
                   logOut()
                    navigate('/login')
                }
            }
        )
    },[logOut,navigate])
    return axiosSecure
}

export default useAxiosSecure