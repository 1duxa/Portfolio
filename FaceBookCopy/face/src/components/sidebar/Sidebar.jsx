import './sidebar.css'
import { RssFeed, Album, Apple, Archive, Article, Balance } from "@mui/icons-material"
import { Users } from "../../dummyData"
import CloseFriend from '../closeFriends/CloseFriend'
export default function Sidebar() {
  return (
    <div className='sidebar'>

      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon' />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Apple className='sidebarIcon' />
            <span className="sidebarListItemText">Apple</span>
          </li>
          <li className="sidebarListItem">
            <Album className='sidebarIcon' />
            <span className="sidebarListItemText">Albums</span>
          </li>
          <li className="sidebarListItem">
            <Archive className='sidebarIcon' />
            <span className="sidebarListItemText">Archive</span>
          </li>
          <li className="sidebarListItem">
            <Article className='sidebarIcon' />
            <span className="sidebarListItemText">Article</span>
          </li>
          <li className="sidebarListItem">
            <Balance className='sidebarIcon' />
            <span className="sidebarListItemText">Judge</span>
          </li>
        </ul>

        <button className="sidebarButton">Show more</button>
        <hr className='sidebarHr' />

        <ul className='sidebarFriendList'>
      {Users.map(u=>(
        <CloseFriend key={u.id} user={u}/>
      ))}
        </ul>

      </div>

    </div>
  )
}
