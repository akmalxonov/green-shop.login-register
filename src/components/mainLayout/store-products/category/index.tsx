import type { CategoriesType, DataType } from "../../../../@types";
import useLoader from "../../../../generic/loader";
import { useQueryHandler } from "../../../../hooks/useQuery";
import "../category/category.scss";
import Discount from "./discount";
import SliderC from "./price";
const Categories = () => {
  const { data, isLoading, isError }: DataType<CategoriesType[]> =
    useQueryHandler<CategoriesType[]>({ 
      pathname: "categories",
      url: "api/flower/category",
    });
//   console.log(data);
  const { categories_loader } = useLoader();
  return (
    <div className="categories">
      <h2>Categories</h2>
      {isLoading || isError
        ? categories_loader()
        : data?.map((value) => (
            <div className="list" key={value._id}>
              <h5>{value.title}</h5>
              <h5>{value.count}</h5>
            </div>
          ))}
      <SliderC />
      <Discount/>
    </div>
  );
};

export default Categories;
