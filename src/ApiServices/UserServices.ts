import { UserSerialLizer } from "@/Utils";
import axiosClient from "./client";

export default class UserServices {
    static updateUser = (id: number, data: { name?: string, email?: string, referredId?: string, profileImage ?:string }) => {
        return axiosClient.patch(`volunteers/${id}`, data);
    }

    static getReferals = () => {
        return axiosClient.get("volunteers/referrals");
    }
}