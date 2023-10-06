import { useState } from "react"
import Nav from "./components/nav/nav"
import {empty, processing} from "../assets/index"
import "./index.css"
import Row from "./components/row/row"
import { sampleData,headers } from "./components/data"
import Modal from "./components/modal/modal"
import CustomWebcam from "./components/webcam/webcam"
const WebAppIndex = () => {
     const [data,setData] = useState(["test"])
     const [showCamera,setShowCamera] = useState(false)

     const handleTakePicture = () => {
          setShowCamera(!showCamera)
     }
 

     return <>
     <Nav/>
{/* <Modal showCross={false} content={
     <>
     <h2>Please wait processing image...</h2>
     <img alt="processing" className="large" src={processing}/>
     </>
}/> */}

{
     showCamera ? <Modal showCross={false} content={
          <>
          <CustomWebcam/>
          </>
     }/>: null
}
     <div className="main-box">
          <div className="headers even_grid">
               {headers.map((h) => <span key={h}>{h}</span>)}
          </div>
          <div className="content">
               {data.length===0 ?<div className="empty-img"><img src={empty} alt="empty"/></div>:
               <>
               {sampleData.map((obj) => (
               <>
               <Row key={obj.name} obj={obj}/>
               <div className="divider"></div>
               </>))}
               </>

               }
               <div className="even_flex arrows">
               <i className="fa-solid fa-caret-left fa-2xl"></i>
               <i className="fa-solid fa-caret-right fa-2xl"></i>
               </div>

               <div className="camera-box center_flex" onClick={handleTakePicture}>
                    <i className="fa-solid fa-camera fa-lg"></i>
               </div>
          </div>
     </div>
     </>
}

export default WebAppIndex