import YTLogo from '../Images/YTLogo.png'
import '../Styles/navbar.css'
import notification from '../Images/notification.png'
import create from '../Images/create.png'


function Navbar()
{
    return (
        <div className="navbar">

            <div className="logo">
                <img width={150} src={YTLogo} alt="" />
            </div>
            <div className="searchBar">
                <input type="text" placeholder="search" />

            </div>
            <div className="userOption">
            <img width={35} src={create} alt="" />
            <img width={35} src={notification} alt="" />
              
              <div className="profile">
                <h3>Y</h3>
              </div>
            </div>

        </div>
    )
}
export default Navbar;