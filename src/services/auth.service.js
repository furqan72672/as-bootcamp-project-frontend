import axiosInstance from "./axiosHandler";

class Service{
    static async login(payload){
        return (await axiosInstance.post('/auth/login',payload))
    }

    static async signup(payload){
        return (await axiosInstance.post('/auth/register',payload))
    }

    static async forgotPassword(payload){
        return (await axiosInstance.post('/auth/forgot-password',payload))
    }

    static async verify(payload){
        return (await axiosInstance.post('/auth/verify',payload))
    }

    static async reset(payload){
        return (await axiosInstance.post('/auth/reset-password',payload))
    }
}

export default Service