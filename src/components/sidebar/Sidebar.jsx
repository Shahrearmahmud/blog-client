import "./sidebar.css"
import image from "../../images/me.jpg"

export default function Sidebar() {
    return (
        <div className="sidebar" >

            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img src={image} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quis magnam cumque repellendus molestiae molestias mollitia possimus, voluptas placeat atque?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    CATAGORIES
                </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">

                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>

                </div>
            </div>
        </div>
    );
}


