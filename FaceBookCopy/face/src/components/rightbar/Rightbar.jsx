import './rightbar.css'
import { Cake } from "@mui/icons-material"
import {Users} from "../../dummyData"
import Online from "../online/Online"
export default function Rightbar({profile}) {

const HomeRightBar =()=>{
  return (
<>
<div className="birthdayContainer">
          <Cake className='birthdayImg' />
          <span className="birthdayText"><b>Bob</b> and <b>3 others</b> have a birthday</span>
        </div>

        <img src="https://www.pngmart.com/files/21/Advertise-PNG-Transparent.png" alt="" className="rightbarAd" />
        <h4 className='rightbarTitle'>Friends online</h4>
        <ul className="rightbarFriendList">
   {Users.map(u=>(
    <Online key={u.id} user={u}/>
   ))}
        </ul>
</>
  )
};
const ProfileRightBar=()=>{
  return (
  <>
  <h4 className='rightbarTitle'>User Information Title</h4>
  <div className="rightbarInfo">
  <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">City:</span>
    <span className="rightbarInfoValue">New York</span>
  </div>
  <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">From:</span>
    <span className="rightbarInfoValue">Nepak</span>
  </div>
  <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">Relationship:</span>
    <span className="rightbarInfoValue">mad</span>
  </div>
  </div>
  <h4 className='rightbarTitle'>User Friends</h4>
<div className="rightbarFollowings">

<div className="rightbarFollowing">

<img src="./src/assets/persons/1.jpeg" className='rightbarFollowingImg' alt="" />
<span className="rightbarFollowingName">John Cena</span>
</div>

<div className="rightbarFollowing">

<img src="./src/assets/persons/10.jpeg" className='rightbarFollowingImg' alt="" />
<span className="rightbarFollowingName">John 2Cena</span>
</div>

<div className="rightbarFollowing">

<img src="./src/assets/persons/1.jpeg" className='rightbarFollowingImg' alt="" />
<span className="rightbarFollowingName">John3 Cena</span>
</div>

<div className="rightbarFollowing">

<img src="./src/assets/persons/10.jpeg" className='rightbarFollowingImg' alt="" />
<span className="rightbarFollowingName">John4 Cena</span>
</div>

<div className="rightbarFollowing">

<img src="./src/assets/persons/1.jpeg" className='rightbarFollowingImg' alt="" />
<span className="rightbarFollowingName">John5 Cena</span>
</div>

<div className="rightbarFollowing">

<img src="./src/assets/persons/10.jpeg" className='rightbarFollowingImg' alt="" />
<span className="rightbarFollowingName">John6 Cena</span>
</div>

</div>
  
  </>
  
    )
}
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
<ProfileRightBar/>
      </div>
    </div>
  )
}
