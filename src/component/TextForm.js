import React,{useState} from 'react'

export default function TextForm(props) {

    
    const handleUpClick=()=>{
        console.log("Upper case was clicked"+text);
       let newText=text.toUpperCase();
        setText(newText)
       props.showAlert("Text has been Capitalize","success")

    }

    const handleLowerClick=()=>{
        console.log("Lower case was clicked"+text);
       let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Text has been Lowered","success")
    }
    const handleClearClick=()=>{
        console.log("Clear text was clicked"+text);
       let newText='';
        setText(newText)
        props.showAlert("Text is removed removed","success")
    }


    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed","success")
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    const handleCopy=()=>{
        
        var text=document.getElementById("mybox");
        console.log(text);
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copied","success")
    }

    const [text,setText]=useState('');
 
    return (
        <>
        <div className='container' style={{color:props.mode=='light'?'black':'white'}}>
          <h2>{props.heading}</h2>
      <div className="form-group">
      <textarea className="form-control" id="mybox" rows="8"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=='light'?'white':'grey',
       color:props.mode=='light'?"black":'white'}}/>
    </div>
   <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
   <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lower Case</button>
   <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
   <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
   <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     </div>

     <div className="container  my-3"  style={{color:props.mode=='light'?'black':'white'}}>


    <h1>Your text summary</h1>
    <p>Text contains {text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length}  characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes to read</p>

    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter the text in above box to preview"}</p>
     </div>
     </>
 )
}
