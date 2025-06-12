import { Form, Input } from "antd";
import "../login/login.scss"
import { useRegisterMutation } from "../../../../hooks/useQuery/useQueryAction";
import { Loader } from "lucide-react";
import "../register/regiter.scss"
const Register = () => {
    const {mutate,isPending} = useRegisterMutation()
    const register =(e:{email:string,password:string,name:string,surname:string})=>{
        mutate(e)
    }
    return (
        <div className="register">
            <p>Enter your email and password to register.</p>
            <Form onFinish={register}>
                <Form.Item name={"name"} rules={[{required:true,message:"Ismingizni kiriting"}]} >
                    <Input placeholder="Name"/>
                </Form.Item>
                <Form.Item name={"surname"} rules={[{required:true,message:"familyangizni kiriting"}]} >
                    <Input placeholder="Surname"/>
                </Form.Item>
                <Form.Item name={"email"} rules={[{required:true,message:"Emailingizni kiriting"}]} >
                    <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item name={"password"} rules={[{required:true,message:"parolingizni kiriting"}]} >
                    <Input.Password placeholder="**********"/>
                </Form.Item>
                <button className="btn">{isPending? <Loader className="animate-spin"/>:"Register"}</button>
            </Form>
        </div>
    );
}

export default Register;
