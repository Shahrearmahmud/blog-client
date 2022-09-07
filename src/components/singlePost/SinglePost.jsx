import "./singlePost.css";
import image from "../../images/1.jpg"

export default function SinglePost() {
    return (
        <div className="singlePost" >
            <div className="singlePostWrapper">
                <img src={image} alt="" className="singlePostImg" />

                <h1 className="singlePostTitle">Lorem ipsum dolor sit 
                
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
                
                </h1>

            <div className="singlePostInfo">

                <span className="singlePostAuthor" > Author: <b>Asif</b></span>
                <span className="singlePostDate" > 1 hour ago</span>

            </div>
            <p className="singlePostDesc" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempore nam cum. Minus odit fugit sunt accusamus iusto molestias nesciunt aliquam asperiores architecto, ut nemo esse voluptates, eos praesentium sit. Tempore quidem facilis obcaecati accusantium soluta sunt maxime nulla rem atque in maiores pariatur eius expedita voluptates blanditiis dolore repudiandae animi veniam, nam quos doloribus alias vitae amet reiciendis! Excepturi similique voluptatem ipsum consectetur cum dolor praesentium, fugit tenetur, iusto dolores optio tempore eos ullam. Ea sunt sequi veniam minima labore laudantium eius quae aspernatur, doloribus delectus quisquam ut, temporibus cumque molestias totam blanditiis officia consequatur autem perspiciatis! Quaerat, cupiditate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quam magni labore iste numquam eveniet impedit animi, facere eaque fugit deleniti temporibus error ad? Error debitis cumque eligendi in Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, mollitia, nam aspernatur non sequi voluptatibus veniam autem reiciendis temporibus architecto praesentium saepe vero pariatur eaque itaque assumenda officia consequuntur dolor eos ipsa quaerat fugit obcaecati tempore exercitationem. Ad libero maxime quae iste. Fugit sit qui optio neque ullam illum, harum asperiores dolorum. Laborum voluptatum aspernatur quos error. Quod ipsa dolorum mollitia fugit aspernatur sed, minima consequuntur veritatis ut incidunt, eius laborum autem at nulla debitis odio. Maiores ratione magni veritatis quisquam. Saepe, nisi. Incidunt expedita voluptates quos ex quod suscipit. Sequi quod natus modi rem non? Nisi dicta iure voluptas.</p>
                

            </div>

        </div>
    );
}
