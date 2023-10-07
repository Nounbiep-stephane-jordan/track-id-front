

const Modal = ({setShow,content,showCross}) => {
     const handleclosemodal = () => {
          setShow(false)
     }
     return <>
    
     <>
     <div className="overlay"></div>
     <div className="modal small-modal">
         {showCross ? <div className="modal-close" onClick={handleclosemodal}><i className="fa-solid fa-circle-xmark"></i></div>:null} 
          {content}
     </div>
     </>  
     </>
}

export default Modal