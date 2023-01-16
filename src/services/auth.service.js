import axiosInstance from "./axiosHandler";

class Service{
    static async login(payload){
        return (await axiosInstance.post('/auth/login',payload))
    }

    static async signup(payload){
        return (await axiosInstance.post('/auth/register',payload))
    }
}

export default Service