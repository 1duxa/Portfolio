import "./Post.css"
import { MoreVert } from "@mui/icons-material"
import {Users} from "../../dummyData"
import { useState } from "react"

export default function Post({post}) {

 const [like,setLike] = useState(post.like);
 const [isLiked,setIsLiked] = useState(false);

const likeHandler =()=>{
  setLike(isLiked ? like-1 : like + 1 )
  setIsLiked(!isLiked)
}

  return (
    <div className="post">
      <div className="postWrapper">

        <div className="postTop">

          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
            <span className="postUserName">{Users.filter(u=>u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>

          <div className="postTopRight"></div>
          <MoreVert />
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>

        <div className="postBottom">

          <div className="postBottomLeft">
            <img className="likeIcon" onClick={likeHandler} src="https://static.vecteezy.com/system/resources/previews/021/013/524/original/like-icon-on-transparent-background-free-png.png" alt="" />
            <img className="likeIcon" onClick={likeHandler} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Heart-SG2001-transparent.png/640px-Heart-SG2001-transparent.png" alt="" />
            <span className="postLikeCounter">{like} people liked</span>
          </div>

          <div className="postBottomRight"></div>
          <span className="postCommentText">{post.comment} comments</span>
        </div>

      </div>



    </div>
  )
}
