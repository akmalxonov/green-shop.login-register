import { Card, Flex } from "antd";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useQueryHandler } from "../../../hooks/useQuery";
import type { blogType, DataType } from "../../../@types";
import "../card/card.scss"


const CardComp: React.FC = () => {
  const { data, isLoading }: DataType<blogType[]> = useQueryHandler<blogType[]>(
    {
      pathname: "categories",
      url: "api/user/blog",
       params: {
      search: "", 
    },
    }
  );
  console.log(data);
  return (
    <div className="all">
      {data?.map((value) => {
        const actions: React.ReactNode[] = [
          <span key="view"><MdOutlineRemoveRedEye /> {value.views}</span>,
          <span key="comments"><FaRegCommentDots /></span>,
          <span key="likes"><CiHeart /></span>,
        ];

        return (
          <Card
            key={value.__v}
            className="card"
            loading={isLoading}
            actions={actions}
            style={{ minWidth: 300 }}
          >
            <Card.Meta
              title={value.title}
              description={value.short_description}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default CardComp;
