import { Slider } from "antd";
import "../price/price.scss"

const SliderC = () => {
    const onChange = (value:number|number[])=>{
        console.log("onChange:",value);
    }
    return (
        <div className="slider">
            <h2>Price Range</h2>
            <Slider range defaultValue={[0,1000]} min={0} max={1000} onChange={onChange} />
            <h5>
                Price:{""}
                <span className="price"> 
                    0$-1000$
                </span>
            </h5>
            <button className="btn" >Filter</button>
        </div>
    );
}

export default SliderC;
