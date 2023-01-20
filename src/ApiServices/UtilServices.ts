import { UserSerialLizer } from "@/Utils";
import axiosClient from "./client";

export default class UtilServices {
   static uploadAsset = async(data : {location ?: string , file : any}) => {
        let {location , file} = data;
        location = location || 'usersProfile';
        console.log('FILE from upload',file);
        let formData = new FormData();
        formData.append('file', file);

       const response = await axiosClient.post(`assets/upload/${location}`, formData ,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return response.data;
   }
}