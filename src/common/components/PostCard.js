// import StartFunctionOnClick from "./on_click";
import React from "react";


const PostCard = () => {

    return (
        <div class="card" style="width: 18rem;">
            
            <div className="row">
                <div className="col-3">
                    <p> row for avatar</p>
                </div>
                <div className="col-9">
                    <div className="row">
                        <p>row for username</p>
                    </div>
                    <div className="row">
                        <p>row for user comment</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <p> icons and view more</p>
            </div>

            <div className="row card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default PostCard;