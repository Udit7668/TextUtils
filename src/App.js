// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { useNavigate } from 'react-router-dom';



// let name="udit Mishra";
function App() {
  const [mode,setMode]=useState('light');
 
  const toggleMode=()=>{
    if(mode=='light'){
    setMode('dark');
    document.body.style.backgroundColor='blue';
    showAlert("Dark Mode has been Enabled","success");
    document.title="TextUtils-DarkMode";

  //    setTimeout(()=>{
  //  document.title="TextUtils id good app"
  //    },2000)

  //    setTimeout(()=>{
  //     document.title="Install TextUtils it is good app"
  //    },1500)

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
      document.title="TextUtils-LightMode";
    }
  }


  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000);
  }

  return (
    
   /*  <>
    <h1>This is me </h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
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

<Router>
<React.StrictMode>
   <Navbar title="Text Utils"  About="AboutText"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3" >
          <Switch>
          <Route exact path="/about">
            <About   mode={mode}/>
          </Route>
          <Route path="/">
          <TextForm  heading="Enter the text To Analyze"  mode={mode}   showAlert={showAlert} />
          </Route> 
          </Switch>
        
        </div>
        
  





        </React.StrictMode>


{/* 
//<Navbar  About="AboutText"/>


//<Navbar title="Text Utils"/>


//<Navbar/> */}

</Router>

</>
  );
}

export default App;
