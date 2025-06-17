import { useNavigate, useParams } from "react-router-dom";
import type { DataType, ProductsType } from "../../../../../@types";
import { useQueryHandler } from "../../../../../hooks/useQuery";
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";
import "../product/product.scss";
import { useState } from "react";
import { ArrowLeft, Heart, Star } from "lucide-react";
import { Image } from "antd";
const Product = () => {
  const navigate = useNavigate();
  const { getParam } = useSearchParamsHandler();
  const { id } = useParams();
  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const { data }: DataType<ProductsType> = useQueryHandler<ProductsType>({
    pathname: `products${category}-${sort}-${type}-${range_min}-${range_max}`,
    url: `api/flower/category/${category}/${id}`,
    params: {
      sort,
      type,
      range_min,
      range_max,
    },
  });
  console.log(data);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "L", "XL"];
  if (!data) return <p>Loading...</p>;
  return (
    <div className="product-detail">
      <div className="container">
        <div onClick={() => navigate(`/`)} className="back-button">
          <ArrowLeft size={20} />
          <span>back to products</span>
        </div>

        <div className="content">
          <div className="left">
            <Image.PreviewGroup
              preview={{
                onChange: (current, prev) =>
                  console.log(`current index: ${current}, prev index: ${prev}`),
              }}
            >
              <div className="all-img">
                {data.detailed_images?.length >= 3 ? (
                  <>
                    <Image width={200} src={data.detailed_images[0]} />
                    <Image width={200} src={data.detailed_images[1]} />
                    <Image width={200} src={data.detailed_images[2]} />
                  </>
                ) : (
                  <p>No detailed images available</p>
                )}
              </div>
              <div className="main-img">
                <Image width={500} src={data.main_image} />
              </div>
            </Image.PreviewGroup>
          </div>

          <div className="right">
            <div className="title-rating">
              <div className="wrappper">
                <h1>{data.title}</h1>
                <div className="price-rating">
                  <span className="price">${data.price}</span>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="review">{data.views} customer review</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="description">
              <h3>Short description</h3>
              <p>{data.short_description}</p>
            </div>

            <div className="sizes">
              <h3>Size:</h3>
              <div className="size-buttons">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={selectedSize === size ? "active" : ""}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="actions">
              <div className="qty-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <button className="btn-buy">BUY NOW</button>
              <button className="btn-cart">Add To Cart</button>
              <button className="btn-heart">
                <Heart size={20} className="text-gray-600" />
              </button>
            </div>

            <div className="details">
              <div className="item">
                <span className="label">SKU:</span>
                <span className="value">66d09a759fa7aef6c5d0012f</span>
              </div>
              <div className="item">
                <span className="label">Categories:</span>
                <span className="value">house-plants</span>
              </div>
              <div className="item">
                <span className="label">Tags:</span>
                <span className="value">Home, Garden Plants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
