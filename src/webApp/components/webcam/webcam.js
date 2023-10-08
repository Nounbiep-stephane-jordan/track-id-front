import Webcam from "react-webcam";
import { useCallback, useRef,useState } from "react"; 
import axios from "axios"
const CustomWebcam = () => {
     const webcamRef = useRef(null);
     const [imgData, setImgData] = useState(null); 

     const capture = useCallback(() => {
          const imageSrc = webcamRef.current.getScreenshot();
          setImgData(imageSrc);
          sendImageForProcessing(imageSrc)
        }, [webcamRef]);

        const retake = () => {
          setImgData(null);
        };

    const sendImageForProcessing = (img) => {
      let nodeUrl = `http://localhost:4000/process_image` 
      let prodUrl ="https://track-id-back.vercel.app/process_image"
      let flaskUrl = "http://localhost:5000/process_image"
      console.log(img,"let see base64")
      if(img == null) return
      let base64Image = img.split(",")[1];
      let data = {
        image: base64Image
      };
 
      axios.post(flaskUrl,data,{
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        }
      })
      .then((result) => {console.log(result,"result in sen img")})
      .catch((err) => console.log(err,"err in send img"))
    }

  const videoConstraints = {
    facingMode:"environment"
  }


 
 

  return (
     
<>
{imgData ? (
       <img src={imgData} alt="webcam" className="webcam-img" width={500} height={200} />
     ) : (
       <Webcam height={500} width={500} videoConstraints={videoConstraints} ref={webcamRef} screenshotFormat={"image/jpg"} screenshotQuality={1}/>
     )}
     <div className="mt">
       {imgData ? (
         <button onClick={retake} className="green-btn">Retake photo</button>
       ) : (
         <button onClick={capture} className="green-btn">Capture photo</button>
       )}
     </div>
</>
 
  );
};

export default CustomWebcam;






















 

 