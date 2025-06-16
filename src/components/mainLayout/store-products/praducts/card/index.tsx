import { Card } from "antd";
import type { DataType, ProductsType } from "../../../../../@types";
import { useQueryHandler } from "../../../../../hooks/useQuery";

const CardComp = () => {
  const { data, isLoading }: DataType<ProductsType[]> = useQueryHandler<
    ProductsType[]
  >({
    pathname: "categories",
    url: "api/user/products",
  });
  console.log(data);

  const { Meta } = Card;
  return (
    <>
      {data?.map((value) => (
        <div className="wrapper"  key={value._id}>
            
          <Card
          
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={value.main_image}
              />
            }
          >
            <Meta title={value.title} description={value.price} />
          </Card>
        </div>
      ))}
    </>
  );
};

export default CardComp;
