import React,{useState} from 'react'

export default function TextForm(props) {

    
    const handleUpClick=()=>{
        console.log("Upper case was clicked"+text);
       let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLowerClick=()=>{
        console.log("Lower case was clicked"+text);
       let newText=text.toLowerCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    const [text,setText]=useState('Enter text here');
 
    return (
        <>
        <div className='container'>
          <h2>{props.heading}</h2>
      <div className="form-group">
      <textarea className="form-control" id="mybox" rows="8"  value={text} onChange={handleOnChange}/>
    </div>
   <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
   <button className="btn btn-primary" onClick={handleLowerClick}>Convert to Lower Case</button>
     </div>

     <div className="container  my-3">


    <h1>Your text summary</h1>
    <p>Text contains {text.split(" ").length} words and {text.length}  characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>

    <h2>Preview</h2>
    <p>{text}</p>
     </div>
     </>

  
 )
}
