// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

// let name="udit Mishra";
function App() {
  const [mode,setMode]=useState('light');
 
  const toggleMode=()=>{
    if(mode=='light'){
    setMode('dark');
    document.body.style.backgroundColor='blue';
    showAlert("Dark Mode has been Enabled","success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
    }
  }


  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type
    })
  }

  return (
   /*  <>
    <h1>This is me </h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Udit Mishra
        </a>
      </header>
    </div>
    </> */

   /*  <h1>Hello everyone</h1>
 */
 
/*    
   <>
   <nav>
   <li>Home</li>
   <li>About</li>
   <li>Contact</li>
   </nav>

   <h1> Name is {name}</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque reiciendis maxime excepturi cum quod, molestias dicta aspernatur facilis deserunt sit alias, reprehenderit dolore mollitia, corporis explicabo magni. Magnam, soluta!</p>
   </> */
 
     <>

   <Navbar title="Text Utils"  About="AboutText"  mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>
<div className="container my-3" >
<TextForm  heading="Enter the text To Analyze"  mode={mode} />

<About></About>
</div>
  








{/* 
//<Navbar  About="AboutText"/>


//<Navbar title="Text Utils"/>


//<Navbar/> */}

</>
  );
}

export default App;
