import { notification } from "antd";

type NotifyType = "login_sucsses" | "login_wrong" | "wrong_confirm_password" | 406 | "register_sucsses"

export const notificationApi =()=>{
    const notify =(type:NotifyType)=>{
        switch (type) {
            case "login_sucsses":
                return notification.success({message:"You are logged in !"})
            case "register_sucsses":
                return notification.success({message:"You are register !"})
            case "login_wrong":
                return notification.error({message:"Password or Login wrong!"})
            case "wrong_confirm_password":
                return notification.error({message:"Error confirm password wrong!"})
            case 406:
                return notification.error({message:"Email already exsist"})
            
        }
    };
    return notify
}