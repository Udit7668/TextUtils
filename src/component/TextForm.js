import React,{useState} from 'react'

export default function TextForm(props) {

    
    const handleUpClick=()=>{
        console.log("Upper case was clicked"+text);
       let newText=text.toUpperCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    const [text,setText]=useState('Enter text here');
 
    return (
        <div>
          <h2>{props.heading}</h2>
      <div className="form-group">
      <textarea className="form-control" id="mybox" rows="8"  value={text} onChange={handleOnChange}/>
    </div>
   <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
     </div>
  
 )
}
