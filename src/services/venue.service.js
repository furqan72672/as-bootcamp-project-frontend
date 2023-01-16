import axiosInstance from "./axiosHandler";

class Service{
    static async list(){
        return (await axiosInstance.get('/venue/list'))
    }
}

export default Service