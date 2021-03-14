import React ,{useContext, useState} from 'react';
// import Form from './componenet/form'
// import Mouse from './componenet/mouse';
// import Button from './componenet/Button';
// import Reduser from './componenet/reduser';
import Calender from './componenet/Calender/Calender';
import FMK from './componenet/FMK';
import Sidebar from './componenet/sidebar/Sidebar';
import WebcamComponent from './componenet/cam';
import Webcam from "react-webcam";
import WebcamCapture from './componenet/cam';

export const ThemeContext=React.createContext();
export const IdContext=React.createContext();

function App() {
  const nav = ['main','menu','about us','catigoires','home','main','menu','about us','catigoires','home'];
  // localStorage.setItem("theme", false);
  // localStorage.setItem("name", "thaer");
  return (
    <div className="App ">

     {/* <Calender/> */}
     {/* <Sidebar  menulist={nav} text="#fff" main="gray" hover='#555' secound='#2dd' fontSize='5em'  /> */}
      
     {/* <FMK /> */}
     <WebcamCapture />
      {/* except names of title of the bar */}
    </div>
  );
}


export default App;
