import {  TaskSerializer } from "@/Utils";
import axiosClient from "./client";

export const getAllOrder = async (assigneeId : number) => {
    const res = await axiosClient.get('/work_orders/assignee.php/?assignee=' + assigneeId);
    return res.data;
}