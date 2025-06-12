import { Form, Input } from "antd";
import "../login/login.scss"
import { useLoginMutation } from "../../../../hooks/useQuery/useQueryAction";
import { Loader } from "lucide-react";

const Login = () => {
    const {mutate,isPending} = useLoginMutation()
    const login =(e:{email:string,password:string})=>{
        mutate(e)
    }
    return (
        <div className="login">
            <p>Enter your username and password to login.</p>
            <Form onFinish={login}>
                <Form.Item name={"email"} rules={[{required:true,message:"email kirit"}]} >
                    <Input placeholder="almamun_uxui@outlook.com"/>
                </Form.Item>
                <Form.Item name={"password"} rules={[{required:true,message:"parol kirit"}]} >
                    <Input.Password placeholder="**********"/>
                </Form.Item>
                <a href="#">Forgot Password?</a>
                <button className="btn">{isPending? <Loader className="animate-spin"/>:"Login"}</button>
            </Form>
        </div>
    );
}

export default Login;
