import './Profile.css'
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

export default function Profile() {
  return (
    <>
<Topbar />
<div className="profile">
  <Sidebar />
  <div className="profileRight">

    <div className="profilerightTop">
        <div className="profileCover">
<img src="https://www.nrdc.org/sites/default/files/styles/huge_16x9_100/public/2023-03/nrdc-nature-and-wildlife-1062342328.jpg.jpg?h=58c8a5e7&itok=r0rtlSiF" alt="" className='profileCoverImg' />
<img src="./src/assets/persons/10.jpeg" alt="" className='profileUserImg' />
</div>

<div className="profileInfo">
    <h4 className='profileInfoName'>Duxa</h4>
    <span className='profileInfoDesc'>HELLO</span>
</div>

    </div>

  <div className="profileRightBottom">
      <Feed />
      <Rightbar profile/>
  </div>

</div>
</div>


  </>
  )
}
