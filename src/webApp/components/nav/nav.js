import { useState } from "react";
import "./nav.css"
import Modal from "../modal/modal";
import { google } from "../../../assets";

const Nav = () => {
     const [showmenu, setShowmenu] = useState(false);
     const [showFiltermenu, setFilterShowmenu] = useState(false);
     const [showProfileModal,setShowProfileModal] = useState(false)



     const handleShowProfile = () => {
          setShowProfileModal(true)
     }

     return <>
     {showProfileModal ? <>
          <Modal showCross={true} setShow={setShowProfileModal} content={
          <>
          <h2>Connect with us</h2>
          <div className="inputs even_flex_column">
               <div className="inputs-row start_flex_column">
               <span>Name</span>
               <input type="text"/>
               </div>
               <div className="inputs-row start_flex_column">
               <span>Password</span>
               <input type="password"/>
               </div>
          </div>

          <button className="btn green-btn">Connect</button>
          <div className="modal-divid">
          <span>OR</span>
          <div className="modal-divider"> </div>
          </div>
          <img src={google} className="img" alt="google"/>
          </>
     }/>
     </>:null}
     <nav className="center_flex normal-menu">
       <h2>Track-ID</h2>
       <div className="input-box">
       <i className="fa-solid fa-magnifying-glass"></i>
       <input type="text" placeholder="search"/>
       </div>
       <div className="nav-profile center_flex" onClick={handleShowProfile}>
       <i className="fa-solid fa-user"></i>
       </div>
       <div className="nav-filter center_flex" onClick={()=>setFilterShowmenu(!showFiltermenu)}>
       <i className="fa-solid fa-filter"></i>
       {showFiltermenu ? <div className="filter-menu">
          <div className="even_flex filter-menu-item">
               <span>A-Z</span>
               <i className="fa-solid fa-arrow-down-a-z"></i>
          </div>
          <div className="even_flex filter-menu-item">
               <span>Z-A</span>
               <i className="fa-solid fa-arrow-up-a-z"></i>
          </div>
          <div className="even_flex filter-menu-item">
               <span>1-9</span>
               <i className="fa-solid fa-arrow-down-1-9"></i>
          </div>
          <div className="even_flex filter-menu-item">
               <span>9-1</span>
               <i className="fa-solid fa-arrow-up-1-9"></i>
          </div>
       </div>:null}
 
       </div>
     </nav>

     <nav className="even_flex small-menu">
          <div className="nav-logo">
               <h2>Track-ID</h2>
          </div>
          <i
            className="fa-solid fa-bars"
            onClick={() => setShowmenu(!showmenu)}
          ></i>
          {
               showmenu?(<>
               <div className="small-menu-div">
               <div className="input-box">
       <i className="fa-solid fa-magnifying-glass"></i>
       <input type="text" placeholder="search"/>
       </div>
       <div className="even_flex profile-filter-even">
       <div className="nav-profile center_flex" onClick={handleShowProfile}>
       <i className="fa-solid fa-user"></i>
       </div>
       <div className="nav-filter center_flex" onClick={()=>setFilterShowmenu(!showFiltermenu)}>
       <i className="fa-solid fa-filter"></i>
       {showFiltermenu ? <div className="filter-menu">
          <div className="even_flex filter-menu-item">
               <span>A-Z</span>
               <i className="fa-solid fa-arrow-down-a-z"></i>
          </div>
          <div className="even_flex filter-menu-item">
               <span>Z-A</span>
               <i className="fa-solid fa-arrow-up-a-z"></i>
          </div>
          <div className="even_flex filter-menu-item">
               <span>1-9</span>
               <i className="fa-solid fa-arrow-down-1-9"></i>
          </div>
          <div className="even_flex filter-menu-item">
               <span>9-1</span>
               <i className="fa-solid fa-arrow-up-1-9"></i>
          </div>
       </div>:null}
 
       </div>
       </div>
               </div>
               </>):null
          }
     </nav>
     </>
}


export default Nav