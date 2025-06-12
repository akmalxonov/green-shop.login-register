import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import type { AuthType } from "../../../@types";
import { useDispatch } from "react-redux";
import { setOpenAuthorizationModal } from "../../../redux/modal-slice";


 export const useLoginMutation = ()=>{
    const axios = useAxios()
    const dispatch = useDispatch()
      return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: { email: string; password: string }) =>
      axios({ url: "api/user/sign-in", method: "POST", body: data }),
    onSuccess: (res: { message: string; data: { token: string; user: AuthType } }) => {
      const { token, user } = res.data;
      console.log(token);
      console.log(user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(setOpenAuthorizationModal())
    },
  });
 }


 export const useRegisterMutation = ()=>{
    const axios = useAxios()
    const dispatch = useDispatch()
      return useMutation({
    mutationKey: ["register"],
    mutationFn: (data: {name:string;surname:string; email: string; password: string }) =>
      axios({ url: "api/user/sign-up", method: "POST", body: data }),
    onSuccess: (res: { message: string; data: { token: string; user: AuthType } }) => {
      const { token, user } = res.data;
      console.log(token);
      console.log(user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(setOpenAuthorizationModal())
    },
  });
 }