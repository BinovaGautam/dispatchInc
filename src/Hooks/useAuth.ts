import { loginService } from "@/ApiServices"
import { loginSlice } from "@/Store/auth"
import jwtDecode from "jwt-decode"
import { useState } from "react"
import { useMutation } from "react-query"
import { useDispatch, useSelector } from "react-redux"

const useAuth = () => {
   const [email , setEmail] = useState('')
   const [password , setPassword] = useState('')
   const dispatch = useDispatch()

   const { isLoggedIn, user } = useSelector((state : any) => state.auth)
   const userDetails =  user ? jwtDecode(user?.jwt) : null

   const loginMutation = useMutation(() =>  loginService(email , password), {
      onSuccess: (data) => {
         dispatch(loginSlice(data))
         console.log(data)
      },
      onError: (error) => {
         console.log(error)
      }
   })

   const handleSubmit = (isLogin ?:boolean) => {
      if (isLogin) {
         loginMutation.mutate()
      } else {
         console.log('Signup')
      }
   }


   const handleChangeText = (text : string, type : string) => {
      if (type === 'email') {
         setEmail(text)
      } else if (type === 'password') {
         setPassword(text)
      }
   }

   return{
      isLoggedIn,
      user,
      email,
      password,
      handleSubmit,
      loginMutation,
      handleChangeText,
      userDetails : userDetails?.data
   }
   
}

export default useAuth