import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // whether dark mode is enabled or not
  const [mode, setMode] = useState('light');  

  // get alert
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled!", "success");
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled!", "success");
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/" element={ */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze:" mode={mode} />
          {/* } /> */}
          {/* <Route path="/about" element={<About />} mode={mode} toggleMode={toggleMode} /> */}
        {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}


export default App;
