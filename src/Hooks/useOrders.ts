import { getAllOrder } from "@/ApiServices";
import { useState } from "react";
import { useMutation } from "react-query";
import { useAuth } from ".";

const useOrders = () => {
    const [orders , setOrders] = useState([])
    const {userDetails} = useAuth()
    const {id} = userDetails

    const allOrdersMutation = useMutation(() => getAllOrder(id),{
        onError: (error) => {
            console.log('ERROR WHILE FETCHING ORDERS LIST',error)
        },
        onSuccess: (data) => {
            console.log('FETCHED ORDERS LIST',data)
            setOrders(data)
        }
    })

    return{
        orders,
        allOrdersMutation,
        userDetails
    }

}


export default useOrders