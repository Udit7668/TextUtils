import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {


  return (
    <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.About}</Link>
      </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
    


    <div className="d-flex">
      <div className="bg-primary rounded mx-2" onClick={()=>{props.toggle('primary')}} style={{height:'30px',width:'30px'}}></div>
      <div className="bg-danger rounded mx-2" onClick={()=>{props.toggle('danger')}} style={{height:'30px',width:'30px'}}></div>
      <div className="bg-success rounded mx-2" onClick={()=>{props.toggle('success')}} style={{height:'30px',width:'30px'}}></div>
      <div className="bg-warning rounded mx-2" onClick={()=>{props.toggle('warning')}} style={{height:'30px',width:'30px'}}></div>
      <div className="bg-info rounded mx-2" onClick={()=>{props.toggle('info')}} style={{height:'30px',width:'30px'}}></div>
      <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggle('secondary')}} style={{height:'30px',width:'30px'}}></div>
    </div>
    <button className="btn btn-primary mx-3" onClick={props.toggleMode}> 

    {props.mode=='light'?'Enable Dark Mode':'Enable Light Mode'}
    </button>

</nav>
   </>  )
}



Navbar.propTypes={
    title:PropTypes.string,
    About:PropTypes.string
}


Navbar.defaultProps={
    title:"Enter title Here",
    About:"Enter About Here"
}