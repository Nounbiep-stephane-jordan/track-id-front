import { useState } from "react"
import Modal from "../modal/modal"
import { headers } from "../data"


const Row = ({obj}) => {
     const [rowAction,setRowActions] = useState(false)
     const [showEditModal,setShowEditModal] = useState(false)



     const actions = [{name:"delete",icon:<i className="fa-solid fa-trash"></i>},{name:"edit",icon:<i className="fa-solid fa-pen-to-square"></i>}]

     const handleAction = (type) => {
      if(type === "edit") {
        setShowEditModal(true)
      }

        setRowActions(false)
     }
     return <>

     {showEditModal  ?      <Modal showCross={true} setShow={setShowEditModal} content={
          <>
          <div className="modal-content">
          <h2>Edit entry</h2>
          <div className="inputs even_flex_column">
               {headers.map((h) => 
               <>
               <div key={h} className="inputs-row start_flex_column">
               <span>{h}</span>
               <input type="text"/>
               </div>
               </>
               )}
          </div>

          <button className="btn green-btn">Edit</button>
          </div>

          </>
     }/>:null}
               <div className="row even_grid">
               <span>{obj.name}</span>
               <span>{obj.age}</span>
               <span>{obj.sex}</span>
               <span>{obj.at}</span>
               <span>{obj.et}</span>
               <div className="row-actions row-actions-small center_flex" onClick={()=>setRowActions(!rowAction)}>
               <i class="fa-solid fa-caret-down fa-2xl"></i>
               {rowAction?
               <>
               <div className="row-actions-menu row-actions-menu-small">
                {actions.map((a) => 
                <>
                   <div key={a.name} className="even_grid_2Col" onClick={()=>handleAction(a.name)}>
                     <span>{a.name}</span>
                     {a.icon}
                   </div>
                   <div className="divider"></div>
                </>
                   )}
                 </div>
               </>:null}
               
               </div>
               </div>
     </>
}

export default Row