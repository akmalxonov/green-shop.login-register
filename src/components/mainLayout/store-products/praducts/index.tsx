import { Select } from "antd";
import "../praducts/products.scss"
import CardComp from "./card";
const Products = () => {
  return (
    <div className="products">
        <div className="top">
          <ul className="list">
            <li className="item">All Plants</li>
            <li className="item">New Arrivals</li>
            <li className="item">Sale</li>
          </ul>
          <label className="sort-dropdown__label">Sort by:</label>
          <Select
            showSearch
            placeholder="Select a person"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "1", label: "Default Sorting" },
              { value: "2", label: "The Cheapest" },
              { value: "3", label: "Most Expensive" },
            ]}
          />
        </div>
        <CardComp/>
    </div>
  );
};

export default Products;
