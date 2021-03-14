import React, { useState,useEffect } from "react";
import Webcam from "react-webcam";
import './cam.css'

const WebcamCapture = () => {

    const [clicked, setclicked] = useState(false)
    
    useEffect(() => {
        if (clicked) {
        setTimeout(() => {
            setclicked(!clicked)
        }, 200);
        }
    }, [clicked])

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  

    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);

      setclicked(!clicked)

    }, [webcamRef, setImgSrc]);
  
    return (
      <>
        <div className='content-raper'>
        <Webcam
          audio={false}
          ref={webcamRef}
          height={window.screen.availHeight}
          width={window.screen.availWidth}
          screenshotFormat="image/jpeg"
        />
        <div  className={`cap-rap ${clicked?'clicked':''}`} ><div onClick={capture} className='pic'></div></div>
        </div>
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
      </>
    );
  };
  
  export default WebcamCapture