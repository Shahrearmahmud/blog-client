import "./post.css";
import image from "../../images/b.jpg"

export default function Post() {
    return (
        <div className="posts" >
            <div className="postImg">
                <img className="postImg" src={image} alt="" />

            </div>

            <div className="postInfo">

                <div className="postCats">

                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>

            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam cum dolor facere labore sapiente quo provident dolore sint a laborum saepe dignissimos veritatis magni beatae, distinctio numquam totam repellat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, voluptatum impedit eveniet adipisci minus voluptates? Autem beatae, aliquam culpa, officia unde voluptatem soluta commodi amet nulla recusandae mollitia distinctio quia.  
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam cum dolor facere labore sapiente quo provident dolore sint a laborum saepe dignissimos veritatis magni beatae, distinctio numquam totam repellat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, voluptatum impedit eveniet adipisci minus voluptates? Autem beatae, aliquam culpa, officia unde voluptatem soluta commodi amet nulla recusandae mollitia distinctio quia.  
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam cum dolor facere labore sapiente quo provident dolore sint a laborum saepe dignissimos veritatis magni beatae, distinctio numquam totam repellat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, voluptatum impedit eveniet adipisci minus voluptates? Autem beatae, aliquam culpa, officia unde voluptatem soluta commodi amet nulla recusandae mollitia distinctio quia.  </p>


        </div>
    );
}
