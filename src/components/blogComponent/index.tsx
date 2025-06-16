import img from "../../assets/image.png";
import CardComp from "./card";
import "../blogComponent/blog.scss"
const BlogComp = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <h1>Monetize your content <br /> with <span>GreenShop</span></h1>
        <p>GreenShop - a platform for buying and selling, publishing and monetizing all types of flowers: articles, <br /> notes, video, photos, podcasts or songs.</p>
        <button className="btn">Join GreenShop</button>
        <CardComp/>
      </div>
    </div>
  );
};

export default BlogComp;
