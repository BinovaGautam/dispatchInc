import { getAllOrder } from "@/ApiServices";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useAuth } from ".";

const useOrders = () => {
    const [orders , setOrders] = useState([])
    const {userDetails} = useAuth()
    const {id} = userDetails


    const allOrdersQuery = useQuery('allOrders',() => getAllOrder(id))

    return{
        orders,
        allOrdersQuery,
        userDetails
    }

}


export default useOrders