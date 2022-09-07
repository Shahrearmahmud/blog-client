import "./header.css"
import image from "../../images/img2.jpg"

export default function Header() {
  return (
    <div className='header' >
      <div className="headerTitles">
      <span className="headerTitleSm">Traveling </span>
      <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={image} alt="" />
    </div>
  );
}
